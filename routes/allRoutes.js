import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to Express Jason!"})
});

router.get("/test", (req, res) => {
    res.json({ message: "Welcome to the Test path!" })
})

export default router;