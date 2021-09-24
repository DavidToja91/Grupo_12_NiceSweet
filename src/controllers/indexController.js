const { getProducts } = require('../data/productsDB');

module.exports = {
    'home': (req, res) => {
        let cardDB = getProducts.filter(product => product.id <= 8)
        let ofert = getProducts.filter(product => product.id >= 9)
        
        res.render('home', {
            title: "HomePage",
            cardDB,
            ofert,
            session: req.session
        });
    },
    'contact': (req, res) => {        
        res.render('contact', { title: "contacto",})
    },
};