let productsDB = require('../data/productsDB')

module.exports = {
    'home': (req, res) => {
        let cardDB = productsDB.filter(product => product.id <= 8)
        res.render('home', {
            cardDB,
        });
    },
    'contact': (req, res) => {        
        res.render('contact');
    },
};