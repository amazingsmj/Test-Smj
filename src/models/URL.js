// URL.js - Modèle pour la gestion des URLs

const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  // Définir les propriétés du modèle URL
  // ...
});

module.exports = mongoose.model('URL', urlSchema);