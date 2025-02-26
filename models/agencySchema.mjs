
// Agency Schema
import mongoose from 'mongoose'
const agencySchema = new mongoose.Schema({
    Date: Date,
    Agency: String,
    fired: Number,
    rehired: Number,
    totalPersonnel: Number,
    sources: [String],
    summary: String
});

export default mongoose.model('Agency', agencySchema);