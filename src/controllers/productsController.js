const { getProducts } = require('../data/productsDB');

module.exports = {
    'list': (req, res) => {
        res.render('products/list');
    },
    'detail': (req, res) => {
        let productID = +req.params.id;
        let product = getProducts.find(product => product.id === productID)

        res.render('products/detail',{
            title: "Detalle del producto",
            product,
        });
    },
    'cart': (req, res) => {
        res.render('products/cart');
    },
    'create': (req, res) => {        
        res.render('products/create');
    },
    'edit': (req, res) => {        
        res.render('products/edit');
    },
};