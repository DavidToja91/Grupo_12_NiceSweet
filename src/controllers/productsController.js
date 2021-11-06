/* const { getProducts } = require('../data/productsDB'); */
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Products;


module.exports = {
    index: (req, res) => {
        Product.findAll({            
            include: [{
            association: "productImages"
        }]})
            .then(products =>{
                res.render('products/list.ejs', {products})
            })
    },
    detail: (req, res) => {
        Product.findByPk(req.params.id, {
            include: [{
                association: "productImages"
            }]
        })
        .then(product =>{
            res.render('products/detail.ejs', {product})
        })
    },
    cart: (req, res)=>{

    },
    search: (req, res) => {
        let busqueda = req.query.busqueda
        Product.findAll({
            where: {
                nameProduct: {
                    [Op.like]: `%${busqueda}%`
                }
            },
            include: [{association: "productImages"}]
        })
        .then(products =>{
            res.render('search', {
                products, 
                busqueda: req.query.busqueda
            })
        })
     .catch(error => console.log(error))
    }

}; 