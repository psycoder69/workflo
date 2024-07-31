import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, trim: true, unique: true },
    name: { type: String, trim: true },
    password: { type: String, required: true, trim: true },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
}, {
    versionKey: false,
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

const User = mongoose.model('User', userSchema);

export default User;