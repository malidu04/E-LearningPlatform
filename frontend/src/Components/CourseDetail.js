import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCourseById } from '../api';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const { data } = await fetchCourseById(id);
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    getCourse();
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <h2 style={styles.title}>{course.title}</h2>
        <p style={styles.description}>{course.description}</p>
        <div style={styles.details}>
          <h3 style={styles.subTitle}>Course Details</h3>
          <p style={styles.text}><strong>Duration:</strong> {course.duration}</p>
          <p style={styles.text}><strong>Level:</strong> {course.level}</p>
          <p style={styles.text}><strong>Instructor:</strong> {course.instructor}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

// CSS-in-JS Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  contentContainer: {
    background: "#fff",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    width: "100%",
    marginTop: "20px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  },
  details: {
    borderTop: "2px solid #eee",
    marginTop: "20px",
    paddingTop: "15px",
  },
  subTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "8px",
  },
};

// Media Queries for Responsiveness
const responsiveStyles = {
  '@media (max-width: 768px)': {
    container: {
      padding: "15px",
    },
    contentContainer: {
      padding: "20px",
      width: "100%",
    },
    title: {
      fontSize: "28px",
    },
    description: {
      fontSize: "14px",
    },
    subTitle: {
      fontSize: "20px",
    },
    text: {
      fontSize: "14px",
    },
  },
  '@media (max-width: 480px)': {
    container: {
      padding: "10px",
    },
    contentContainer: {
      padding: "15px",
      width: "100%",
    },
    title: {
      fontSize: "24px",
    },
    description: {
      fontSize: "12px",
    },
    subTitle: {
      fontSize: "18px",
    },
    text: {
      fontSize: "12px",
    },
  },
};
