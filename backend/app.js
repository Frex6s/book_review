const express = require('express');

const app = express();

app.use(express.json());

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
      author : 'Elder Cooper',
      year: 2021,
      genre: 'Policier',
      imageUrl: '/images/Milwaukee_Mission.jpg',
      //ratings : 
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Book for Esther',
      author : 'Alabaster',
      year: 2022,
      genre: 'Paysage',
      imageUrl: '/images/bookForEsther.jpg',
      
    },
    {
      _id: 'oeihfzeomoi',
      title: 'The Kinfolk Table',
      author : 'Nathan Williams',
      year: 2022,
      genre: 'Cuisine',
      imageUrl: '/images/theKinfolkTable.jpg',
      
    },
    {
      _id: 'oeihfzeoi',
      title: 'Thinking, Fast and Slow',
      author : 'Daniel Kahneman',
      year: 2022,
      genre: 'Economie',
      imageUrl: '/images/thinkingfast&slow.jpg',
      
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Company of One',
      author : 'Paul Jarvis',
      year: 2022,
      genre: 'Business',
      imageUrl: '/images/Companyofone.jpg',
      
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Design Anthology',
      author : 'James Doe',
      year: 2022,
      genre: 'Architecture',
      imageUrl: '/images/DesignAnthology.jpg',
      
    },
    {
      _id: 'oeihfzeoi',
      title: 'Book of Genesis',
      author : 'Alabaster',
      year: 2022,
      genre: 'Jardinage',
      imageUrl: '/images/BookofGenesis.jpg',
      
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Psalms',
      author : 'Alabaster',
      year: 2022,
      genre: 'Poésie',
      imageUrl: '/images/Psalms.jpg',
      
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Milk & Honey',
      author : 'Rupi Kaur',
      year: 2022,
      genre: 'Ecologie',
      imageUrl: '/images/Milk&Honey.jpg',
      
    },
    {
      _id: 'oeihfzeoi',
      title: 'Stupore e Tremori',
      author : 'Amélie Nothomb',
      year: 2018,
      genre: 'Roman',
      imageUrl: '/images/StuporeeTremori.jpg',
      
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Cereal',
      author : 'Van Duysen',
      year: 2022,
      genre: 'Architecture',
      imageUrl: '/images/Cereal.jpg',
      
    },
    {
      _id: 'oeihfzeomoi',
      title: 'Zero to One',
      author : 'Peter Thiel',
      year: 2022,
      genre: 'Business',
      imageUrl: '/images/zeroToOne.jpg',
      
    },
  ];
  res.status(200).json(books);
});

module.exports = app;