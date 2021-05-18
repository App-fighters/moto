import express from 'express';
import mongoose from "mongoose"
import userRouter from './userRouter'
import dotenv from 'dotenv'
import data from "./data"

dotenv.config()

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/moto', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(express.static(path.join(__dirname, '..', 'public')));


    app.use(('/api/users', userRouter))
    res.set('Content-Type', 'text/html');
    app.get('/', (req, res) => {
    res.send('Hello world !!');
});
app.use((err, req, res, next ) =>{
    res.status(500).send({ message : err.message})
})

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});