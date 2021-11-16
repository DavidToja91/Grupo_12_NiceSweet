const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Products;

module.exports = {
    home: (req, res) => {
        let promiseDestacado = Product.findAll({
            where: {
                destacado: +1
            },
            include: [{association: "productImages"}]
        })
        let promiseProducts = Product.findAll({include: [{association: "productImages"}]})
        console.log(promiseDestacado)
        Promise.all([promiseDestacado, promiseProducts])

       .then(([destacados, products]) =>{
            res.render('home', {
                products,
                destacados,
                title: "HomePage",
                session: req.session
            })
        }) 
    },
    contact: (req, res) => {        
        res.render('contact', { title: "contacto", session: req.session})
    }, 
   

    }
