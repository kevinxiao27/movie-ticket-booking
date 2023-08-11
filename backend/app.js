import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express();

mongoose
    .connect(
        `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.rlfp17q.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() =>
        app.listen(5003, ()=>
        console.log(`Connected to Database and Server is active`)
        )
    )
    .catch((e) => console.log(e))

app.use("/",(req, res, next) => {
    res.send("<h1>YOYOYO WASSUP</h1><p>hi mom</p>")
})

// M224jaNcze5GlQsL