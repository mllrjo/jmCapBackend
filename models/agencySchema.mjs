
// Agency Schema
import mongoose from 'mongoose'
const agencySchema = new mongoose.Schema({
    agency: String,
    date: String,
    fired: String,
    rehired: String,
    total_employees: Number,
    summary: String,
    source: [String]
});

export default mongoose.model('Agency', agencySchema);