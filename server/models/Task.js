import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: { type: String, required: true },
    description: { type: String },
    category: {
        type: String,
        enum: ["to-do", "in-progress", "under-review", "finished"],
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

taskSchema.index({ category: 1 });

const Task = mongoose.model('Task', taskSchema);

export default Task;