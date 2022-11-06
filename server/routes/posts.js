
import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;




//every callback fun has req and res.
/*
router.get('/', (req,res)=>{
    res.send("it's working it is home page")
}) 
*/ //so after middleware it not reach by localhost:5000/ it reach only by https://localhost:5000/posts