const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


const app = express();

//connecting to db
mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true }).then(db => {
    console.log('Db connected');
}).catch(err => {
    console.log(err);
})

//importing routes
const indexRoutes = require('./routes/index');
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));

//routes
app.use('/', indexRoutes);

//starting the server
app.listen(3000, () => {
    console.log('Server on port 3000');
});