// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const postSchema = new mongoose.Schema({
  post: {type:String, required:true},
  posttype: { type: String, required: true},
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comment: [{
    commentdate: {type: Date, default: Date.now},
    userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }]
})


const Post = mongoose.model("Post", postSchema);


async function create(post, posttype, userid) {
  const newPost = await Post.create({
    post: post,
    posttype: posttype,
    userid: userid
  });

  return newPost;
}


async function updatePost(postid, post, posttype) {
  const postNew = await Post.updateOne({"_id": postid}, {$set: { post:post, posttype: posttype}});
  return postNew;
}


async function deletePost(postid) {
  await Post.deleteOne({"_id": postid});
};


async function getUserPosts(userid) {
    return await Post.find({ "userid": userid});
}


module.exports = { 
    create, updatePost, deletePost, getUserPosts
};