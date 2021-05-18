// if (process.env.USER) require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const movieRouter = require('./movies/movies.router');
const pagenotfound = require('./_errors/pagenotfound');
const errorhandler = require('./_errors/errorhandler');

app.use(express.json());
app.use(cors());

app.use('/movies', movieRouter);

app.use(pagenotfound);

app.use(errorhandler);
module.exports = app;
