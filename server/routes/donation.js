const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');

// Define route for donation submission (handles multipart/form-data)
router.post('/', donationController.submitDonation);

module.exports = router;
