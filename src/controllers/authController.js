const authService = require("../services/authService");

// Inscription d'un nouvel utilisateur
const signup = async (req, res) => {
  try {
    // Logique pour créer un nouvel utilisateur
    // Utilisation du authService pour gérer les opérations d'inscription
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'inscription", error });
  }
};

// Connexion d'un utilisateur
const login = async (req, res) => {
  try {
    // Logique pour gérer la connexion de l'utilisateur
    // Utilisation du authService pour gérer les opérations de connexion
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion", error });
  }
};

module.exports = { signup, login };