require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const donationRoutes = require('./routes/donation');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/donation', donationRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('MASF Backend is running');
});

// Start Server
app.listen(PORT, () => {
});
