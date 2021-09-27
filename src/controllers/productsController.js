const { getProducts } = require('../data/productsDB');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

const Product = db.Product;

module.exports = {
    index: (req, res) => {
        Product.findAll()
        .then(products => {
            res.render('/', {products});
        })
    },
    detail: (req, res) => {
        Product.findByPk(+req.params.id)
        .then(product => {
            res.render('products/detail', {product})
        })
    },
    cart: (req, res) => {
        res.render('products/cart', {title: "Carrito de compras"});
    },
    add: (req, res) => {

    },
    create: (req, res) => {        
        const {
            name, 
            price, 
            discount, 
            image, 
            category, 
            subcategory, 
            description 
        } = req.body;

        Product.create({
            name, 
            price, 
            discount, 
            image, 
            category, 
            subcategory, 
            description 
        });
    },
    edit: (req, res) => {        
        res.render('products/edit');
    },
};