const { getProducts } = require('../data/productsDB');

module.exports = {
    'home': (req, res) => {
        let cardDB = getProducts.filter(product => product.id <= 8)
        let ofert = getProducts.filter(product => product.discount > 20)
        res.render('home', {
            title: "HomePage",
            cardDB,
            ofert
        });
    },
    'contact': (req, res) => {        
        res.render('contact');
    },
};