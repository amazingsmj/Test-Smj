const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const urlRoutes = require('./routes/urlRoutes');
const billingRoutes = require('./routes/billingRoutes');
const middleware = require('./utils/middleware');

// Charger les variables d'environnement depuis .env
dotenv.config();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Middleware pour gérer les erreurs et les exceptions
app.use(middleware.errorHandler);

// Connexion à la base de données MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecté à la base de données');
  })
  .catch((error) => {
    console.error('Erreur de connexion à la base de données', error);
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/urls', urlRoutes);
app.use('/api/billing', billingRoutes);

// Port d'écoute
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});