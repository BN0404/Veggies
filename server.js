require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const veggies = require('./models/veggies');
const Veggie = require('./models/Veggie');

const app = express()
const PORT = 3000;


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.use((req, res, next) => {
    console.log(req.url)
    next()
})


app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Veggies Store:</h1>");
})

app.get('/veggies', (req, res) => {
    Veggie.find({}, (error, allVeggies) => {
        
    res.render('veggies/Index', {veggies:allVeggies})
    })
})

app.post('/veggies', (req, res) => {
    console.log(req.body);
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }


Veggie.create(req.body, (error, createdVeggie) => {
    res.redirect('/veggies')
})
})

app.get('/veggies/new', (req, res) => {
res.render('veggies/New')
})


app.get('/veggies/:id', (req, res) => {
    console.log(req.params);
    Veggie.findById(req.params.id, (error, foundVeggie) => {
    res.render('veggies/Show', {veggie:foundVeggie})
    })
})

app.get('*', (req, res) => {
res.render('404')
})


app.listen(3000, () => {
    console.log(`Server is running on port: ${PORT}`);
    mongoose.set('strictQuery', true)
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    });
})