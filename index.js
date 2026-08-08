import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 5051

// test comment

// Use cors & express
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Express Jason!"})
});

app.get("/test", (req, res) => {
    res.json({ message: "Welcome to the Test path!" })
})

app.listen(PORT, () => {
    console.log("Listening to PORT: " + PORT);
})