/* const { getProducts } = require('../data/productsDB'); */
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Products;


module.exports = {
    index: (req, res) => {
        Product.findAll()
            .then(products =>{
                res.render('/', {products})
            })
    },
    detail: (req, res) => {
        Product.findByPk(req.params.id)
        .then(product =>{
            res.render('products/detail.ejs', {product})
        })
    },
    add: (req, res) => {
        res.render('products/create');
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
        } = req.body
        Product.create({
            name,
            price,
            discount,
            image,
            category,   
            subcategory,
            description
        })
        .then(() =>{
            res.redirect('/products/list')
        })
        .catch(error => console.log(error))
    },
    edit: (req, res) => {        
        res.render('products/edit');
    },
    cart: (req, res)=>{

    }
}; 