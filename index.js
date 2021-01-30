const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user');
const InitiateMongoServer = require('./config/db');

// Initiate databse pro-auth
InitiateMongoServer();

const app = express();

const PORT = process.env.PORT || 4000;


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({message: "API Working"})
});


app.use('/user',user);

app.listen(PORT, () => {
    console.log('App listening on port 4000!');
});