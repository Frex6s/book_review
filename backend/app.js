const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/books', (req, res, next) => {
  const books = [
    {
      _id: 'oeihfzeoi',
      title: 'Milwaukee Mission',
      description: 'Les infos de mon premier objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeoi',
      title: 'Milwaukee Mission',
      description: 'Les infos de mon premier objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeoi',
      title: 'Milwaukee Mission',
      description: 'Les infos de mon premier objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeoi',
      title: 'Milwaukee Mission',
      description: 'Les infos de mon premier objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(books);
});

module.exports = app;