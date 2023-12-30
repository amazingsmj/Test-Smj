// User.js - Modèle pour la gestion des utilisateurs

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Définir les propriétés du modèle User
  // ...
});

module.exports = mongoose.model('User', userSchema);