// build off of Dylan's basic backend starter
// later change to auth as advised by Bryan
import connectDB from './config/db.mjs';
import agencyRouter from './routes/agencyRouter.mjs'
import userRouter from './routes/userRouter.mjs'
import initialData from './config/initialData.mjs';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5002;
app.use(express.urlencoded({extended: false}));
app.use(express.json());
connectDB();

// Routers
app.use('/agencies', agencyRouter);
app.use('/users', userRouter);

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
})