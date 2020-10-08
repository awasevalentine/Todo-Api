import { Document } from 'mongoose';


export interface UserDocument extends Document {
   
    readonly userName: string;
    readonly email: string;
    readonly passwordHash: string;
}