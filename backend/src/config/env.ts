import dotenv from 'dotenv'

dotenv.config();

interface EnvConfig{
    PORT: number;
    MONGODB_URI: string;
    NODE_ENV: "development" | "production" | "test";
}

const env : EnvConfig = {
    PORT: Number(process.env.PORT) || 5000,
    MONGODB_URI: process.env.MONGODB_URI || "",
    NODE_ENV: (process.env.NODE_ENV as EnvConfig["NODE_ENV"]) || "development",
}

export default env;