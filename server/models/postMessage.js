//to create schema by mongoose, it gives uniformoity.

import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {  //it is obj {}
        type: Number,
        default: 0,
    },
    //{ } means obj
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

//now convert schema into model.
var PostMessage = mongoose.model('PostMessage', postSchema);

//we are exporting mongoose model from postMessage file.
export default PostMessage;

//model is ready.


