const express = require('express');
const logger = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => console.log('Server is listening on port ', port));

const homeRoute = require('./routes/home')
const userRoute = require('./routes/users')

app.use('/', homeRoute);
app.use('/users', userRoute);
