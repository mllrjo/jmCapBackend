
// User Tracking Schema
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: String,
    trackedAgencies: [String],
    trackedDataItems: [String]
});

export default mongoose.model('User', userSchema);