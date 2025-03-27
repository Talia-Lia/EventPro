import express from "express";
import cors from "cors";
import connectDB from "./db.js"; 
import dotenv from "dotenv";
import Project from "./models/Project.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5001;


connectDB();


app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

app.post("/api/projects", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
