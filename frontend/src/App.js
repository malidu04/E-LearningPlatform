import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import CourseDetail from './Components/CourseDetail';
import CreateCourse from './Components/createCourse';  // Import the new CreateCourse component
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/create-course" element={<CreateCourse />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
