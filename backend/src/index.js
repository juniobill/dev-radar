const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// MongoDB connect
mongoose.connect('mongodb+srv://junio:junio@cluster0-e3tat.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); //Used to parse JSON body
app.use(routes);

app.listen(3333);
