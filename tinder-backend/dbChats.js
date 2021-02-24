import mongoose from 'mongoose';

const chatsSchema=mongoose.Schema({
    name: String,
    message: String,
    timestamp: String,
    profilePic: String
})


export default mongoose.model('chats', chatsSchema)


            