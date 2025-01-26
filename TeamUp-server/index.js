require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');  
const authRoutes = require('./routes/auth');

const app = express();


app.use(cors({
    origin: process.env.ORIGIN_API,  
    methods: ['GET', 'POST'], 
  }));

app.use(bodyParser.json());

app.use('/api', authRoutes);
app.get('/', (req, res) => {
    res.send('Server Started');
});
mongoose
  .connect(process.env.DATABASE_API, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`,process.env.ORIGIN_API));
