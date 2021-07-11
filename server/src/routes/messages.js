import express from "express";
const router = express.Router();
import Message from "../models/messages.js";
import mongoose from 'mongoose';

router.post('/message', async (req, res) => {
    const msg = req.body;
    console.log(msg);
    const newMsg = new Message(msg);
    try{
        await newMsg.save();
        res.status(201).json(newMsg);
    } catch(error){
        res.status(409).json({message: error.message});
    }
    
});

router.get("/", async (req, res) => {
    try {
        const Messages = await Message.find();
        res.status(200).json(Messages);
    } catch(error){
        res.status(409).json({message: error.message});
    }
});

export default router;