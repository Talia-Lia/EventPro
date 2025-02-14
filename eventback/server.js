import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 51000;

// Middleware
app.use(express.json());
app.use(cors());

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to the Express Backend!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
