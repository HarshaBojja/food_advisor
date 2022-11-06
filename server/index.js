import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'

const app=express()
dotenv.config();


app.use(bodyParser.json({limit:'30mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));
app.use(cors());

//middleware to connect this to posts applictn
//every route inside of postRoutes, it start with /posts //must write below app.use(cors());
app.use('/posts',postRoutes);


//now connect server with database
const CONNECTION_URL='mongodb+srv://bojja:1234@cluster0.cbjp8i9.mongodb.net/?retryWrites=true&w=majority'
//later we store this password in env var to kept private

const PORT = process.env.PORT || 5000;
//after deployment in heroku it populate env var PORT


//to not get any errors in console
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true}).then(
    ()=>app.listen(PORT,()=>console.log(`server running on port :${PORT}`))
).catch(
    (error)=> console.log(error.message)
)
//mongoose.set('useFindAndModify', false); //no need






