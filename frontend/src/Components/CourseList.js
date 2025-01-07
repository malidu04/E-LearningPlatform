import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../api';

const CourseList = () => {
  const [courses, setCourses] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetchCourses();
        console.log("API Response:", response.data); // Debug
        setCourses(response.data); // Adjust based on actual API structure
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    getCourses();
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {Array.isArray(courses) && courses.length > 0 ? (
          courses.map(course => (
            <li key={course._id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </li>
          ))
        ) : (
          <p>No courses available.</p>
        )}
      </ul>
    </div>
  );
};

export default CourseList;
