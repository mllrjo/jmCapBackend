// build off of Dylan's basic backend
import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3003;

app.use(express.json());

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`);
})