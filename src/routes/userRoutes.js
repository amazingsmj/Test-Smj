const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route pour récupérer les informations d'un utilisateur
router.get('/:id', userController.getUser);

// Route pour mettre à jour les informations d'un utilisateur
router.put('/:id', userController.updateUser);

module.exports = router;