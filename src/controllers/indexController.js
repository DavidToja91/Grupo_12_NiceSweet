let productsDB = require('../data/productsDB')

module.exports = {
    'home': (req, res) => {
        res.render('home', {
            products: productsDB
        });
    },
    'contact': (req, res) => {        
        res.render('contact');
    },
};