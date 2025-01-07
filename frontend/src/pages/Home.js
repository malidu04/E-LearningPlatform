import React from "react";
import CourseList from "../Components/CourseList";
import Slider from "react-slick";

// Import the CSS files required by slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const sliderSettings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite loop of slides
        speed: 1000, // Speed of transition
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Autoplay the slideshow
        autoplaySpeed: 3000, // Speed between autoplay transitions (3 seconds)
        adaptiveHeight: true, // Adjust height based on the current slide
        pauseOnHover: true, // Pause autoplay when hovering over the slideshow
        arrows: false, // Hide default navigation arrows
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Welcome to the E-Learning Platform</h2>

            {/* Slideshow Section */}
            <div style={styles.sliderContainer}>
                <Slider {...sliderSettings}>
                    <div style={styles.slide}>
                        <img
                            src="https://www.w3schools.com/w3images/fjords.jpg"
                            alt="E-learning Course 1"
                            style={styles.image}
                        />
                        <div style={styles.overlay}>
                            <h3 style={styles.overlayText}>Explore Our Courses</h3>
                        </div>
                    </div>
                    <div style={styles.slide}>
                        <img
                            src="https://www.w3schools.com/w3images/mountains.jpg"
                            alt="E-learning Course 2"
                            style={styles.image}
                        />
                        <div style={styles.overlay}>
                            <h3 style={styles.overlayText}>Enhance Your Skills</h3>
                        </div>
                    </div>
                    <div style={styles.slide}>
                        <img
                            src="https://www.w3schools.com/w3images/lights.jpg"
                            alt="E-learning Course 3"
                            style={styles.image}
                        />
                        <div style={styles.overlay}>
                            <h3 style={styles.overlayText}>Join Our Community</h3>
                        </div>
                    </div>
                    <div style={styles.slide}>
                        <img
                            src="https://www.w3schools.com/w3images/forest.jpg"
                            alt="E-learning Course 4"
                            style={styles.image}
                        />
                        <div style={styles.overlay}>
                            <h3 style={styles.overlayText}>Start Learning Today</h3>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* Course List Section */}
            <CourseList />
        </div>
    );
};

export default Home;

// CSS-in-JS styles
const styles = {
    container: {
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#f8f9fa",
    },
    title: {
        fontSize: "36px",
        fontWeight: "700",
        marginBottom: "30px",
        color: "#333",
    },
    sliderContainer: {
        width: "80%", // Adjust width of the slideshow container to 80% of the viewport
        maxWidth: "1200px", // Set a maximum width to prevent it from becoming too large on wide screens
        margin: "0 auto", // Center the slider container
    },
    slide: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
    },
    image: {
        width: "100%",
        height: "auto",
        maxHeight: "400px", // Limit the height of the slideshow image
        objectFit: "cover", // Ensure the image covers the container without distortion
        transition: "transform 0.5s ease",
    },
    overlay: {
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity: "0",
        transition: "opacity 0.3s ease",
        borderRadius: "10px",
    },
    overlayText: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#ffffff",
        textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
    },
};

// Add hover effect to the images
document.querySelectorAll('.slick-slide img').forEach((image) => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
    });
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});
