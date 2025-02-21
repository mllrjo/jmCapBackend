// build off of Dylan's basic backend starter
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3003;

app.use(express);
connectDB();

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
})