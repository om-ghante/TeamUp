require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();

const originAPI = process.env.ORIGIN_API || "*"; 

app.use(cors({
  origin: originAPI,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  preflightContinue: true,  
  optionsSuccessStatus: 200  
}));

app.use((req, res, next) => {
  console.log('CORS headers set for:', req.headers.origin);
  next();
});

app.use(bodyParser.json());


app.use('/api', authRoutes);
app.use('/read-api', profileRoutes);
app.get('/', (req, res) => {
  res.send('Server Started');
});

mongoose
  .connect(process.env.DATABASE_API, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS is enabled for: ${originAPI}`); 
});
