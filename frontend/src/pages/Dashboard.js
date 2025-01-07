import React from "react";
import ProgressTracker from "../Components/ProgressTracker";

const Dashboard = () => {
    const userId = "user-id-here";

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Your Dashboard</h1>
            <div style={styles.progressContainer}>
                <ProgressTracker userId={userId} />
            </div>
        </div>
    );
};

export default Dashboard;

// CSS-in-JS Styles
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: "#f7f9fc",
    },
    title: {
        fontSize: "32px",
        fontWeight: "700",
        color: "#333",
        textAlign: "center",
        marginBottom: "20px",
    },
    progressContainer: {
        background: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "900px", // Keeps the container responsive
        margin: "0 auto",
    },
};

// Adding responsiveness through media queries
const responsiveStyles = {
    '@media (max-width: 768px)': {
        container: {
            padding: "15px",
        },
        title: {
            fontSize: "28px",
            marginBottom: "15px",
        },
        progressContainer: {
            padding: "15px",
            width: "100%",
            maxWidth: "600px",
        },
    },
    '@media (max-width: 480px)': {
        title: {
            fontSize: "24px",
            marginBottom: "10px",
        },
        progressContainer: {
            padding: "10px",
            width: "100%",
            maxWidth: "100%",
        },
    },
};
