const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Products;

module.exports = {
    home: (req, res) => {
        /* let cardDB = getProducts.filter(product => product.id <= 8)
        let ofert = getProducts.filter(product => product.id >= 9) */
        Product.findAll({
            include: [{
                association: "productImages"
            }]
        })
        .then(products =>{
            res.render('home', {
                products,
                title: "HomePage",
                session: req.session
            })
        })
    },
    contact: (req, res) => {        
        res.render('contact', { title: "contacto",})
    },
};