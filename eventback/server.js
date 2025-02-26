import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample API Route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});


app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
