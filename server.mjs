// build off of Dylan's basic backend starter
// later change to auth as advised by Bryan
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
import agencyRouter from './routes/agencyRouter.mjs'
import userRouter from './routes/userRouter.mjs'


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3003;

app.use(express.json());
connectDB();
// Register Routers
app.use('/agencies', agencyRouter);
app.use('/users', userRouter);


// Listener
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
})