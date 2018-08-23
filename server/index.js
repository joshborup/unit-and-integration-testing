const express = require('express');
const app = express();
const carData = require('./carData.js');
const bodyParser = require('body-parser');

//use cors or set headers.
const cors = require('cors');
app.use(cors());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(bodyParser.json());

let id = 26;

app.get('/api/cars', (req, res) => {
    res.status(200).send(carData)
});

app.post('/api/cars', (req, res) => {
    const {make, model, year, color} = req.body
    console.log('hit')
    
    carData.push({
        id,
        make,
        model,
        year,
        color
    })
    console.log(carData)
    id++
    res.status(200).send(carData)
});
const PORT = 4000;
app.listen(PORT, ()=> console.log(`Server listening on port ${4000}`));