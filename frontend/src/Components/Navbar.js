import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <h1 style={styles.logoText}>E-Learning Platform</h1>
            </div>
            <ul style={{...styles.navLinks, ...(isMenuOpen && styles.menuOpen)}}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.link}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/dashboard" style={styles.link}>Dashboard</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/login" style={styles.link}>Login</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/create-course" style={styles.link}>Create Course</Link>
                </li>
            </ul>
            <div style={styles.menuIcon} onClick={toggleMenu}>
                <span style={styles.iconLine}></span>
                <span style={styles.iconLine}></span>
                <span style={styles.iconLine}></span>
            </div>
        </nav>
    );
};

export default Navbar;

// CSS-in-JS styles
const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#007bff",
        color: "#ffffff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "relative",
    },
    logo: {
        fontWeight: "700",
        fontSize: "22px",
    },
    logoText: {
        margin: "0",
        fontSize: "24px",
        color: "#ffffff",
    },
    navLinks: {
        display: "flex",
        listStyleType: "none",
        margin: "0",
        padding: "0",
    },
    navItem: {
        margin: "0 15px",
    },
    link: {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "16px",
        fontWeight: "500",
        transition: "color 0.2s ease-in-out",
    },
    linkHover: {
        color: "#d1e8ff",
    },
    menuIcon: {
        display: "none",  // Hidden by default for large screens
        flexDirection: "column",
        cursor: "pointer",
        zIndex: "999",
    },
    iconLine: {
        width: "25px",
        height: "3px",
        backgroundColor: "#ffffff",
        margin: "5px 0",
    },
    menuOpen: {
        display: "block",  // Show links when the menu is open
        position: "absolute",
        top: "60px",
        left: "0",
        right: "0",
        backgroundColor: "#007bff",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "10px 0",
    },
    "@media (max-width: 768px)": {
        navbar: {
            justifyContent: "space-between",
        },
        navLinks: {
            display: "none",  // Hide navigation links on mobile by default
        },
        menuIcon: {
            display: "flex",  // Show the menu icon on mobile
        },
    }
};
