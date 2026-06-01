const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requete ok');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();    
});

app.use((req, res, next) => {
    res.json({ message: 'bien reçu' });
    next();
});

app.use((req, res) => {
    console.log('Réponse envoyé bien');
});

module.exports = app;