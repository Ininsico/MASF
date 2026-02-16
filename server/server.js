require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const donationRoutes = require('./routes/donation');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/donation', donationRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('MASF Backend is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📧 Email configured: ${process.env.EMAIL_USER || 'NOT SET'}`);
    console.log(`✅ Backend ready at http://localhost:${PORT}`);
});
