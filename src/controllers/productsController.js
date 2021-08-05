let productsDB = require('../data/productsDB')

module.exports = {
    'list': (req, res) => {
        res.render('products/list');
    },
    'detail': (req, res) => {        
        res.render('products/detail');
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