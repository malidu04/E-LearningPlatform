import React, { useState } from "react";
import { registerUser } from "../api";

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert("Registration Successful!");
        } catch (error) {
            console.error("Error registering user: ", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>Create an Account</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>Register</button>
            </form>
        </div>
    );
};

export default Register;

// CSS-in-JS Styles
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f9",
    },
    form: {
        backgroundColor: "#ffffff",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "400px",
        textAlign: "center",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#333333",
        marginBottom: "20px",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "4px",
        border: "1px solid #ddd",
        fontSize: "16px",
    },
    button: {
        backgroundColor: "#007bff",
        color: "#ffffff",
        padding: "12px 20px",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};
