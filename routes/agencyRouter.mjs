// Routers
import express from 'express';
const agencyRouter = express.Router();


// Agency Routes
agencyRouter.post('/', async (req, res) => {
    try {
        const agency = new Agency(req.body);
        await agency.save();
        res.status(201).json(agency);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

agencyRouter.get('/', async (req, res) => {
    const agencies = await Agency.find();
    res.json(agencies);
});

agencyRouter.put('/:id', async (req, res) => {
    try {
        const agency = await Agency.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(agency);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

agencyRouter.delete('/:id', async (req, res) => {
    try {
        await Agency.findByIdAndDelete(req.params.id);
        res.json({ message: 'Agency data deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default agencyRouter;