//require('dotenv').config()

const express= require('express');
const mongoose = require ('mongoose');
const app = express();


mongoose.connect ('mongodb://localhost/subscribers', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', ()=>console.log('Connection error'))
db.once('open', ()=> console.log('Connected to Database'))

app.get('/', (req, res)=>{

    res.send("Hello Everybody")
})

app.use(express.json())  


const subscribersRouter= require('./routes/subscribers')
app.use('/subscribers', subscribersRouter);  
app.listen(3000, ()=>{console.log(' Server listening on port 3000')});