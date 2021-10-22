
const { NotExtended } = require('http-errors');
const { validationResult } = require('express-validator')
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Products;
const Users = db.Users;

module.exports= {
    inicio: (req, res) => {
        Product.findAll()
        .then(getProducts =>{
            res.render('admin/index', {getProducts, title: "Bienvenid@ Admin"})
        })   
    },
    ////////// PRODUCTS \\\\\\\\\\
    productos: (req, res) => {
        Product.findAll({            
            include: [{
            association: "productImages"
        }]})
        .then(getProducts =>{
            res.render('admin/products', {getProducts, title: "Productos"})
        })
    },
    agregarFormulario: (req, res) => {
        db.Categories.findAll({
            include: [{
                association: "subcategories"
            }]
        })
        .then(categories => {
            let subcategories = []
            categories.forEach(category => {
                category.subcategories.forEach(subcategory => {
                    subcategories.push(subcategory)
                })
            })
            res.render('admin/addProduct', {
                categories,
                subcategories,
                session: req.session
                
            })
        })
        .catch(err => console.log(err))
    },
    agregarProducto: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let arrayImages = [];
            if(req.files){
                req.files.forEach(image => {
                    arrayImages.push(image.filename)
                })
            }
            const {
                nameProduct,
                price,
                discount,
                category,
                subcategoryId, 
                description,
            } = req.body
            Product.create({
                nameProduct,
                price,
                discount,
                category,   
                subcategoryId,
                description,
            })
            .then(product => {
                if (arrayImages.length > 0) {
                    let images = arrayImages.map(image => {
                        return {
                            image: image,
                            productId: product.id
                        }
                    })
                    db.ProductImages.bulkCreate(images)
                    .then(() => res.redirect('/admin/products'))
                    .catch(err => console.log(err))
                }else {
                    db.ProductImages.create({
                        image: "default-image.png",
                        productId: product.id
                    })
                    .then(() => res.redirect('/admin/products'))
                    .catch(err => console.log(err))
                }
            })
        } else {
            db.Categories.findAll({
                include: [{
                    association: "subcategories"
                }]
            })
            .then(categories => {
                let subcategories = []
                categories.forEach(category => {
                    category.subcategories.forEach(subcategory => {
                        subcategories.push(subcategory)
                    })
                })
                res.render('admin/addProduct', {
                    categories,
                    subcategories,
                    session: req.session,
                    errors : errors.mapped(),
                    old : req.body 
                })
            })
            .catch(err => console.log(err))

        }
  
    },
    editarFormulario : (req, res) => {
        let promProduct = Product.findByPk(req.params.id)
        let promCategory = db.Categories.findAll({
            include: [{
                association: "subcategories"
            }]
        })
        Promise.all([promProduct, promCategory])
        .then(([product, categories]) =>{
            categories =>{
                let subcategories = []
                categories.forEach(category => {
                    category.subcategories.forEach(subcategory => {
                        subcategories.push(subcategory)
                    })
                })
            }
            return res.render("admin/editProduct",{
                product,
                session: req.session,
            })

        })
    },
    editarProducto: (req, res)=>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            const {
                nameProduct,
                price,
                discount,
                description
            } = req.body
            Product.update({
                nameProduct,
                price,
                discount,
                description
            }, {
                where: {
                    id: +req.params.id
                }
            })
            .then(() =>{
                res.redirect('/admin/products')
            })
            .catch(error => console.log(error))
        }
        else {
            Product.findByPk(req.params.id)
            .then((product)=> { 
                res.render('admin/editProduct', {
                    product,
                    session: req.session,
                    errors : errors.mapped(),
                    old : req.body 
                })
            })

        }

    },
    eliminarProducto: (req, res) => {
        Product.destroy({
            where: {
                id: +req.params.id,
            }
        })
        .then(()=>{
            res.redirect('/admin')
        })
        .catch(error => console.log(error))
    },
    ////////// USERS \\\\\\\\\\
    users: (req, res) => {
        Users.findAll()
        .then(getUsers =>{
            res.render('admin/users', {getUsers, title: "Usuarios"})
        })   
    },
    addUser: (req, res) => {
        res.render('admin/addUser', {
            getUsers,
            title: "Agregar usuario"
        });
    },
    editUser: (req, res) => {
        Users.findByPk(req.params.id)
        .then(user =>{
            res.render("admin/editUser",{
                user,
                title: "Editar usuario"
            })
        })
    },
    proccessUser: (req, res) => {
        const {name, lastName, email, category, image} = req.body;

        Users.update({
            name,
            lastName,
            email,
            image: image? image : "default-image.png",
            category
        }, {
            where: {
                id: +req.params.id
            }
        })
        .then(() =>{
            res.redirect('/admin/users')
        })
        .catch(error => console.log(error))
    },
    deleteUser: (req, res) => {

        Users.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(()=>{
            res.redirect('/admin')
        })
        .catch(error => console.log(error))
    },
    apiProduct: (req, res) => {
        Product.findAll({ include: [{association: "productImages"}, {association: "subcategory"}] })
        .then(product => res.status(200).json(product))
    }
}

