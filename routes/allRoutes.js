import express from "express";
import { prisma } from "../lib/prisma.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to Express Jason!"})
});

router.get("/test", (req, res) => {
    res.json({ message: "Welcome to the Test path!" })
})

router.get("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        // Remember, req.params.id is a STRING. Convert to a number
        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId)
            }
        })
        
        if (!user) {
            console.log(`User with ID ${ id } not found.`);
            return null;
        }

        return res.json(user);
    } catch (error) {
        return res.status(400).json({ error: "Fatal error occurred when trying to retrieve this user from the database: " + error });
    }
})

export default router;