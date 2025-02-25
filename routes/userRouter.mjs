// User Routes
import express from 'express';
import User from '../models/userSchema.mjs'
const userRouter = express.Router();
userRouter.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

userRouter.get('/:username', async (req, res) => {
    const user = await User.findOne({ username: req.params.username });
    res.json(user);
});

userRouter.put('/:username', async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ username: req.params.username }, req.body, { new: true });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default userRouter;