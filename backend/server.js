const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
