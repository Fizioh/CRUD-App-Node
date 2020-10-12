const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing');

mongoose.connect('mongodb+srv://Eni:Nagato59500@eni.vvqvt.gcp.mongodb.net/ENI?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'))


const app = express();



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(bodyParser.json());


  app.post('/api/products', (req, res, next) => {
     delete req.body._id;
     const thing = new Things({
         ...req.body
     });
     thing.save()
     .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
     .catch(error => res.status(400).json({ error }));
  });

app.get('/api/products', (req, res, next) => {
    const product = [
        {
            name: 'Mac',
            description: 'Apple',
            price: 2800,
            inStock: true
        }
    ];
    next();
})


module.exports = app;