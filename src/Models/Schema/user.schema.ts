import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({


    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
        
    },
    passwordHash: {
        type: String,
        required: true
    }

})