import mongoose from 'mongoose';
import Schema from "mongoose";


const Team = new mongoose.Schema({
    name: String,
    description: String,
    boards: {type: Schema.Types.ObjectId, ref: 'Board'},
    defaultStep: {type: Schema.Types.ObjectId, ref: 'Step'}
});

export default mongoose.model<mongoose.Document>('Team', Team);
