const express = require ('express');
const exphbs = require ('express-handlebars');
const bodyParser = require ('body-parser');
const path = require ('path');


//database
var db = require('./config/database');
// test db
db.authenticate()
.then(() => console.log('DATABASE CONNECTED'))
.catch(err => console.log('Error:' + err))


const app =express();

app.get('/',(req, res) => res.send('INDEX'));


//names  routes

app.use('/names', require('./routes/names'))


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('SERVER started on port ${PORT}'));


