const { getProducts } = require('../data/productsDB');

module.exports = {
    'index': (req, res) => {
        res.render('products/list',{
            getProducts
        })
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
        res.render('products/cart', {title: "Carrito de compras"});
    },
    'create': (req, res) => {        
        res.render('products/create');
    },
    'edit': (req, res) => {        
        res.render('products/edit');
    },
};