require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const apiRoute = require('./Routes/apiRoute');
// const authRoute = require('./Routes/authRoute');
const sessionConfig = require('./config/session');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session(sessionConfig));
// app.use('/api', apiRoute);
// app.use('/auth', authRoute);

app.listen(PORT, () => {
  console.log('Опять работа?');
});
