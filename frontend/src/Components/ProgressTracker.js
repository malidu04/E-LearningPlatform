import React, { useEffect, useState } from "react";
import { fetchProgress } from "../api";

const ProgressTracker = ({ userId }) => {
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        const getProgress = async () => {
            try {
                const { data } = await fetchProgress(userId);
                setProgress(data);
            } catch (error) {
                console.error("Error fetching progress:", error);
            }
        };
        getProgress();
    }, [userId]);

    return (
        <div style={styles.container}> 
            <h2 style={styles.heading}>Your Progress</h2>
            <div style={styles.progressList}>
                {progress.map(item => (
                    <div key={item._id} style={styles.progressCard}>
                        <h3 style={styles.courseTitle}>{item.courseTitle}</h3>
                        <div style={styles.progressBarContainer}>
                            <div
                                style={{
                                    ...styles.progressBar,
                                    width: `${item.completionPercentage}%`,
                                }}
                            ></div>
                        </div>
                        <p style={styles.completionText}>
                            {item.completionPercentage}% completed
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressTracker;

// CSS-in-JS styles
const styles = {
    container: {
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "'Roboto', sans-serif",
    },
    heading: {
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "20px",
        color: "#333",
    },
    progressList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
    },
    progressCard: {
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        transition: "transform 0.2s ease-in-out",
        border: "1px solid #f0f0f0",
    },
    courseTitle: {
        fontSize: "18px",
        fontWeight: "600",
        margin: "10px 0",
        color: "#007bff",
    },
    progressBarContainer: {
        width: "100%",
        height: "10px",
        backgroundColor: "#e9ecef",
        borderRadius: "5px",
        overflow: "hidden",
        marginTop: "10px",
    },
    progressBar: {
        height: "10px",
        backgroundColor: "#28a745",
        transition: "width 0.3s ease-in-out",
    },
    completionText: {
        marginTop: "10px",
        fontSize: "14px",
        color: "#666",
    },
    progressCardHover: {
        transform: "scale(1.05)",
    },
};
