// if (process.env.USER) require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const movieRouter = require('./movies/movies.router');
const theatersRouter = require('./theaters/theaters.router');
const reviewsRouter = require('./reviews/reviews.router');
const pagenotfound = require('./_errors/pagenotfound');
const logger = require('./config/logger');
const errorhandler = require('./_errors/errorhandler');

app.use(logger);
app.use(cors());
app.use(express.json());

app.use('/movies', movieRouter);
app.use('/theaters', theatersRouter);
app.use('/reviews', reviewsRouter);
app.use(pagenotfound);

app.use(errorhandler);
module.exports = app;
