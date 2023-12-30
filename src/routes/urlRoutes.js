const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

// Route pour générer une URL de redirection
router.post('/', urlController.generateURL);

module.exports = router;