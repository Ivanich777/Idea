require('dotenv').config();

const express = require('express');
const upload = require('express-fileupload');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const apiRoute = require('./Routes/apiRoute');
const authRoute = require('./Routes/authRoute');
const telegramRoute = require('./Routes/telegramRoute');
const sessionConfig = require('./config/session');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(session(sessionConfig));
app.use(upload());
app.use('/api', apiRoute);
app.use('/auth', authRoute);
app.use('/feedback', telegramRoute);

app.listen(PORT, () => {
  console.log('Опять работа?');
});
