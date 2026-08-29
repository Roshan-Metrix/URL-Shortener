import express from "express";
import dotenv from "dotenv";
import env from "./config/env.js";
import connectDB from "./config/database.js";
import urlRouter from "./routes/urlRouter.js";

dotenv.config();

const app = express();

const PORT = env.PORT;
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Hello from URL Shortener."
    })
})

app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server is healthy!"
    })
})

app.use('/api/v1/url',urlRouter);

app.use((req, res, next) => {
        res.status(404).json({status:'false', message:'Not Found.'})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})