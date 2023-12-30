const crypto = require('crypto');

const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(16).toString('hex');
  return secretKey;
};

// Utilisation de la fonction pour générer une clé secrète
console.log("\nNouvelle clé secrète : "+generateSecretKey());
console.log("\nUne clé secrète aléatoire est générée à chaque exécution de ce code !\n");