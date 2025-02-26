// build off of Dylan's basic backend starter
// CORS error corrected by Bryan
// chatGPT heavily involved in writing code and fixing errors.
import connectDB from './config/db.mjs';
import agencyRouter from './routes/agencyRouter.mjs';
import userRouter from './routes/userRouter.mjs';
// import initialData from './config/InitialData.mjs';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5002;
// Bryan
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// initialData;
connectDB();

// Routers
app.use('/agencies', agencyRouter);
app.use('/users', userRouter);

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
})