
// Agency Schema
import mongoose from 'mongoose'
const agencySchema = new mongoose.Schema({
    dateCollected: Date,
    agency: String,
    personnelChange: String,
    totalPersonnel: Number,
    sources: [String],
    summary: String
});

export default mongoose.model('Agency', agencySchema);