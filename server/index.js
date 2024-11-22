import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoute.js";
import contactsRouters from "./routes/ContactRoutes.js";
import setupSocket from "./socket.js";
import messagesRoutes from "./routes/MessagesRoutes.js";
import channelRoutes from "./routes/ChannelRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

const databaseUrl = process.env.DATABASE_URL;
app.use(cors({
    origin:[process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads/files", express.static("uploads/files"));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes );
app.use("/api/contacts", contactsRouters);
app.use('/api/messages', messagesRoutes );
app.use('/api/channel', channelRoutes);

const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

setupSocket(server);
mongoose
    .connect(databaseUrl)
    .then(() => console.log("Database connected"))
    .catch((err) => {
        console.error("Database connection error:", err.message);
    });
      