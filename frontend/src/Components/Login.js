import React, { useState } from "react";
import { loginUser } from "../api";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await loginUser(formData);
            alert(`Welcome, ${data.name}!`);
            navigate("/home"); // Redirect to home page after successful login
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={styles.title}>Welcome Back</h2>
                <p style={styles.subtitle}>Please log in to your account</p>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="email">
                        Email Address
                    </label> 
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={styles.input}
                        onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                        onBlur={(e) => (e.target.style.borderColor = "#cccccc")}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                        style={styles.input}
                        onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                        onBlur={(e) => (e.target.style.borderColor = "#cccccc")}
                    />
                </div>

                <button
                    type="submit"
                    style={styles.button}
                    disabled={loading}
                    onMouseOver={(e) => {
                        if (!loading) e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
                    }}
                    onMouseOut={(e) => {
                        if (!loading) e.target.style.backgroundColor = "#007bff";
                    }}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <div style={styles.registerLinkContainer}>
                    <p style={styles.registerLinkText}>
                        Don't have an account?{" "}
                        <Link to="/register" style={styles.registerLink}>Register here</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;

// CSS-in-JS styles
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f5f7",
        padding: "20px",
    },
    form: {
        background: "#ffffff",
        borderRadius: "8px",
        padding: "30px 40px",
        boxShadow: "0 4px 6px rgba(90, 67, 67, 0.1)",
        width: "100%",
        maxWidth: "400px",
    },
    title: {
        fontSize: "24px",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "8px",
        color: "#333333",
    },
    subtitle: {
        fontSize: "14px",
        textAlign: "center",
        marginBottom: "20px",
        color: "#666666",
    },
    formGroup: {
        marginBottom: "20px",
    },
    label: {
        display: "block",
        marginBottom: "8px",
        fontSize: "14px",
        color: "#333333",
        fontWeight: "500",
    },
    input: {
        width: "100%",
        padding: "10px 12px",
        border: "1px solid #cccccc",
        borderRadius: "4px",
        fontSize: "14px",
        transition: "border-color 0.2s",
    },
    inputFocus: {
        borderColor: "#007bff",
        outline: "none",
    },
    button: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        fontWeight: "600",
        backgroundColor: "#007bff",
        color: "#ffffff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.2s",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
    registerLinkContainer: {
        marginTop: "20px",
        textAlign: "center",
    },
    registerLinkText: {
        fontSize: "14px",
        color: "#666666",
    },
    registerLink: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "600",
    },
};
