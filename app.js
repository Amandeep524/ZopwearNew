const express = require('express');
const app = express();
const path = require('path');
const fs =require('fs');
const http = require('http');
const bodyparser = require('body-parser');
port = 80;




//Database 
var mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://0.0.0.0:27017/zopwear',
    {
        useNewUrlParser: true,
    });

var db = mongoose.connection;
const Schema = mongoose.Schema;


const ZopSchema = new Schema({
        name: String,
        size: String ,
        gender: String ,
        modelNumber: String ,
        adress: String ,
        emailId: String,
        phoneNumber: Number
    });

var Zopmod = mongoose.model('zopCollect' , ZopSchema);


// Express Code 


app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))

// Pug Code 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Listening Port 
app.listen(port, () => {
    console.log(`The application is started on port ${port}`)
})


// Endpoints 

app.get('/', (req, res) => {
    const parms = {};
    res.render('index.pug', parms);
})
app.post('/', (req, res) => {
    const parms = {};
    res.render('index.pug', parms);
    console.log(req.body)
})

// app.post('/', (req, res) => {
//     const MyData = new Zopmod(req.body)
//     MyData.save().then(()=>{
//         res.send("Form has been Submitted");
//     }).catch(()=>{
//         res.status(400).send("Form Not Submitted");
//     });
// })