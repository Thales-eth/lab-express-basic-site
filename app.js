const express = require('express');
const hbs = require('hbs');
const path = require('path');

require('./db')
const data = require('./products.json')
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

// MODELO
const Product = require('./models/Product.model')

app.get('/tienda', (req, res) => {
    Product
        .find()
        .select({ title: 1, description: 1, brand: 1, images: 1, price: 1 })
        .sort({ price: -1 })
        .limit(20)
        .then(allPhones => {
            res.render('shop', { allPhones })
            console.log(allPhones)
        })
        .catch(err => console.log(err))
    // res.render('shop', { data })
})

app.listen(5005, () => console.log('🏃‍ on port 3000'));