/* const { getProducts } = require('../data/productsDB'); */
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Products;
const Categories = db.Categories

module.exports = {
    index: (req, res) => {
        let promiProduct = Product.findAll({include: [{association: "productImages"}]})
        let promiCategories = Categories.findAll({ include: [{association: "subcategories"}]})

        Promise.all([promiProduct, promiCategories])
        .then(([products, categories]) => {
            return res.render('products/list.ejs', {products, categories})
        }) 
        
    },
    detail: (req, res) => {
        let oneProduct = Product.findByPk(req.params.id, {include: [{association: "productImages"}]})
        let products = Product.findAll({include: [{association: "productImages"}]})
        Promise.all([oneProduct, products])
        .then(([oneProduct, products]) => {
            return res.render('products/detail.ejs', {oneProduct, products})
        })
    },
    cart: (req, res)=>{
        res.render('products/cart.ejs')
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
    },
    subCategoriesResult: (req, res) => {
        let promiProduct = Product.findAll({where: {subCategoryId: req.params.id}, include: [{association: "productImages"}]})
        let promiSubCategories = db.Subcategories.findByPk(req.params.id)
        Promise.all([promiProduct, promiSubCategories])

        .then(([products, subcategories]) => {
            res.render('products/subCategoriesResult', {
                products,
                subcategories
            })
        })
        .catch(error => console.log(error))
    }

}; 