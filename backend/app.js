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
      title: 'Book for Esther',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/bookForEsther.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoi',
      title: 'The Kinfolk Table',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/theKinfolkTable.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeoi',
      title: 'Thinking, Fast and Slow',
      description: 'Les infos de mon premier objet',
      imageUrl: '/images/thinkingfast&slow.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Company of One',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Companyofone.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Design Anthology',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/DesignAnthology.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeoi',
      title: 'Book of Genesis',
      description: 'Les infos de mon premier objet',
      imageUrl: '/images/BookofGenesis.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Psalms',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Psalms.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Milk & Honey',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Milk&Honey.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeoi',
      title: 'Stupore e Tremori',
      description: 'Les infos de mon premier objet',
      imageUrl: '/images/StuporeeTremori.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Cereal',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/Cereal.jpg',
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Zero to One',
      description: 'Les infos de mon deuxième objet',
      imageUrl: '/images/zeroToOne.jpg',
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(books);
});

module.exports = app;