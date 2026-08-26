import express from "express";
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Hello from URL Shortener."
    })
})

app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "Server is healthy!"
    })
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})