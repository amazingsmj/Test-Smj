const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

// Route pour effectuer un paiement
router.post('/payment', billingController.makePayment);

module.exports = router;