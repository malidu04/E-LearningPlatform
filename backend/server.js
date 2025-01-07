const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Import routes
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");
const progressRoutes = require("./routes/progressRoutes");

// Initialize app and load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for the port or fallback to 5000

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

// Routes
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/progress", progressRoutes);

// Start Server
const startServer = async () => {
  await connectDB(); // Ensure MongoDB is connected before starting the server
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
};

// Execute
startServer();
