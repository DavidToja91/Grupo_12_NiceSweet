let { getProducts, getUsers } = require('../data/productsDB')

module.exports = {
    'index': (req, res) => {
        res.render('admin/index');
    },
    'products': (req, res) => {        
        res.render('admin/products');
    },
    'users': (req, res) => {        
        res.render('admin/users');
    },
};