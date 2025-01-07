import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.section}>
                    <h4 style={styles.heading}>E-Learning Platform</h4>
                    <p style={styles.text}>
                        Empowering learners with the best tools for online education.
                    </p>
                </div>
                <div style={styles.section}>
                    <h4 style={styles.heading}>Quick Links</h4>
                    <ul style={styles.list}>
                        <li><a href="/" style={styles.link}>Home</a></li>
                        <li><a href="/dashboard" style={styles.link}>Dashboard</a></li>
                        <li><a href="/login" style={styles.link}>Login</a></li>
                    </ul>
                </div>
                <div style={styles.section}>
                    <h4 style={styles.heading}>Contact Us</h4>
                    <p style={styles.text}>Email: support@elearning.com</p>
                    <p style={styles.text}>Phone: +1 234 567 890</p>
                </div>
            </div>
            <div style={styles.bottomBar}>
                <p style={styles.bottomText}>
                    © {new Date().getFullYear()} E-Learning Platform. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

// CSS-in-JS styles
const styles = {
    footer: {
        backgroundColor: "#007bff",
        color: "#ffffff",
        padding: "40px 20px 20px",
        marginTop: "40px",
        fontFamily: "'Roboto', sans-serif",
    },
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    section: {
        textAlign: "center",
    },
    heading: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "10px",
    },
    text: {
        fontSize: "14px",
        lineHeight: "1.6",
    },
    list: {
        listStyleType: "none",
        padding: "0",
        margin: "0",
    },
    link: {
        color: "#ffffff",
        textDecoration: "none",
        fontSize: "14px",
        lineHeight: "1.8",
        transition: "color 0.2s ease-in-out",
    },
    linkHover: {
        color: "#d1e8ff",
    },
    bottomBar: {
        marginTop: "20px",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        paddingTop: "10px",
        textAlign: "center",
    },
    bottomText: {
        fontSize: "14px",
        margin: "0",
        color: "#e9ecef",
    },
};
