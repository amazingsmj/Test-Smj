// Billing.js - Modèle pour la gestion de la facturation

const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  // Définir les propriétés du modèle Billing
  // ...
});

module.exports = mongoose.model('Billing', billingSchema);