import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../api';

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    videos: [{ title: '', url: '', duration: '' }],
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse(courseData);
      alert('Course created successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error("Error creating course:", error);
      alert('Failed to create course. Please try again.');
    }
  };

  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...courseData.videos];
    updatedVideos[index][field] = value;
    setCourseData({ ...courseData, videos: updatedVideos });
  };

  const addVideoField = () => {
    setCourseData({
      ...courseData,
      videos: [...courseData.videos, { title: '', url: '', duration: '' }],
    });
  };

  const removeVideoField = (index) => {
    const updatedVideos = [...courseData.videos];
    updatedVideos.splice(index, 1);
    setCourseData({ ...courseData, videos: updatedVideos });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create New Course</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Course Title:</label>
          <input
            type="text"
            value={courseData.title}
            onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            value={courseData.description}
            onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
            style={styles.textarea}
          />
        </div>
        <h3 style={styles.subHeading}>Course Videos</h3>
        {courseData.videos.map((video, index) => (
          <div key={index} style={styles.videoGroup}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Video Title:</label>
              <input
                type="text"
                value={video.title}
                onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Video URL:</label>
              <input
                type="text"
                value={video.url}
                onChange={(e) => handleVideoChange(index, 'url', e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Duration (minutes):</label>
              <input
                type="number"
                value={video.duration}
                onChange={(e) => handleVideoChange(index, 'duration', e.target.value)}
                style={styles.input}
              />
            </div>
            <button
              type="button"
              onClick={() => removeVideoField(index)}
              style={styles.removeButton}
            >
              Remove Video
            </button>
          </div>
        ))}
        <button type="button" onClick={addVideoField} style={styles.addButton}>
          Add Video
        </button>
        <button type="submit" style={styles.submitButton}>
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;

// CSS-in-JS Styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
    display: 'block',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    height: '150px',
    boxSizing: 'border-box',
  },
  subHeading: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '15px',
  },
  videoGroup: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  addButton: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
    marginBottom: '20px',
  },
  removeButton: {
    padding: '8px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    fontSize: '14px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  submitButton: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    alignSelf: 'center',
  },
};
