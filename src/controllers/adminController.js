
const { NotExtended } = require('http-errors');
const { validationResult } = require('express-validator')
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');

const Product = db.Products;
const Users = db.Users;

module.exports = {
    inicio: (req, res) => {
        Product.findAll()
            .then(getProducts => {
                res.render('admin/index', { getProducts, title: "Bienvenid@ Admin" })
            })
    },
    ////////// PRODUCTS \\\\\\\\\\
    productos: (req, res) => {
        Product.findAll({
            include: [{
                association: "productImages"
            }]
        })
            .then(getProducts => {
                res.render('admin/products', { getProducts, title: "Productos" })
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
            if (req.files) {
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
<<<<<<< HEAD
                destacado:0
=======
                destacado: 0
>>>>>>> 841ab1439b99ae132796727f72b5e5a7849a7f79
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
                    } else {
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
                        errors: errors.mapped(),
                        old: req.body
                    })
                })
                .catch(err => console.log(err))

        }

    },
    productDestac: (req, res) => {
        let allProducts = Product.findAll({ where: { destacado: 0 }, include: [{ association: "productImages" }] })
        let allNoProducts = Product.findAll({ where: { destacado: 1 }, include: [{ association: "productImages" }] })
        Promise.all([allProducts, allNoProducts])

            .then(([getProducts, getDestacados]) => {
                res.render('admin/productDestac', { getProducts, getDestacados, title: "Productos Destacados" })
            })
            .catch(error => console.log(error))
    },
    Destac: (req, res) => {
        let destacado = 1
        Product.update({
            destacado
        }, {
            where: {
                id: +req.params.id
            }
        })
            .then(() => {
                res.redirect('/admin/destacarProducto')
            })
            .catch(error => console.log(error))
    },
    deleteDestac: (req, res) => {
        let destacado = 0
        Product.update({
            destacado
        }, {
            where: {
                id: +req.params.id
            }
        })
            .then(() => {
                res.redirect('/admin/destacarProducto')
            })
            .catch(error => console.log(error))
    },
    editarFormulario: (req, res) => {
        let promProduct = Product.findByPk(req.params.id)
        let promCategory = db.Categories.findAll({
            include: [{
                association: "subcategories"
            }]
        })
        Promise.all([promProduct, promCategory])
            .then(([product, categories]) => {
                let subcategories = []
                categories.forEach(category => {
                    category.subcategories.forEach(subcategory => {
                        subcategories.push(subcategory)
                    })
                })
                res.render("admin/editProduct", {
                    product,
                    categories,
                    subcategories,
                    session: req.session,
                })
            })
            .catch(error => console.log(error))
    },
    editarProducto: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const {
                nameProduct,
                price,
                discount,
                description,
                category, 
                subcategoryId
            } = req.body
            Product.update({
                nameProduct,
                price,
                discount,
                description,
                category, 
                subcategoryId
            }, {
                where: {
                    id: +req.params.id
                }
            })
                .then(() => {
                    res.redirect('/admin/products')
                })
                .catch(error => console.log(error))
        }
        else {
            let promProduct = Product.findByPk(req.params.id)
            let promCategory = db.Categories.findAll({
                include: [{
                    association: "subcategories"
                }]
            })
            Promise.all([promProduct, promCategory])
                .then(([product, categories]) => {
                    let subcategories = []
                    categories.forEach(category => {
                        category.subcategories.forEach(subcategory => {
                            subcategories.push(subcategory)
                        })
                    })
                    res.render("admin/editProduct", {
                        product,
                        categories,
                        subcategories,
                        session: req.session,
                        errors: errors.mapped(),
                        old: req.body
                    })
                })
                .catch(error => console.log(error))
        }
    },
    checkDeleteProduct: (req, res) => {
        Product.findByPk(req.params.id, { include: [{ association: "productImages" }, { association: "subcategory" }] })

            .then((product) => {
                res.render('admin/checkDeleteProduct', {
                    product
                })
            })
            .catch(error => console.log(error))
    },
    eliminarProducto: (req, res) => {
        Product.destroy({
            where: {
                id: +req.params.id,
            }
        })
            .then(() => {
                res.redirect('/admin')
            })
            .catch(error => console.log(error))
    },
    ////////// USERS \\\\\\\\\\
    users: (req, res) => {
        Users.findAll()
            .then(getUsers => {
                res.render('admin/users', { getUsers, title: "Usuarios" })
            })
            .catch(error => console.log(error))
    },
    formUser: (req, res) => {
        Users.findAll()
            .then(getUsers => {
                res.render('admin/addUser', {
                    getUsers,
                    session: req.session
                })
            })
            .catch(error => console.log(error))
    },
    addUser: (req, res) => {
        let errors = validationResult(req);

        if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };
            errors.push(image);
        }
        if (errors.isEmpty()) {
            let { name, lastName, phone, email, pass1 } = req.body;

            Users.create({
                name,
                lastName,
                phone,
                email,
                pass: bcrypt.hashSync(pass1, 10),
                avatar: req.file ? req.file.filename : "default-image.png",
                rol: 0,
            }).then(() => {
                res.redirect("users");
            });
        } else {
            res.render("admin/addUser", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
            });
        }
    },
    editUser: (req, res) => {
        Users.findByPk(req.params.id)
            .then(user => {
                res.render("admin/editUser", {
                    user,
                    title: "Editar usuario"
                })
            })
            .catch(error => console.log(error))
    },
    proccessUser: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let { name, lastName, phone } = req.body;
            /* let avatar = req.file && req.file.filename;
            req.session.user.avatar = avatar */
            Users.update({
                name,
                lastName,
                phone,
                avatar: req.file ? req.file.filename : "default-image.png",
            }, { where: { id: req.params.id } })
                .then(() => { res.redirect('/admin/users'), { session: req.session } })

        } else {
            res.render("admin/editUser", {
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
            });
        }

        /* const { name, lastName, email, phone, category, image } = req.body;

        Users.update({
            name,
            lastName,
            email,
            phone,
            image: image ? image : "default-image.png",
            category
        }, {
            where: {
                id: +req.params.id
            }
        })
            .then(() => {
                res.redirect('admin/users')
            })
            .catch(error => console.log(error)) */
    },
    checkDeleteUser: (req, res) => {
        Users.findByPk(req.params.id)

            .then(user => {
                res.render('admin/checkDeleteUser', {
                    user
                })
            })
            .catch(error => console.log(error))
    },
    deleteUser: (req, res) => {
        Users.destroy({
            where: {
                id: +req.params.id
            }
        })
            .then(() => {
                res.redirect('/admin')
            })
            .catch(error => console.log(error))
    },
    apiProduct: (req, res) => {
        Product.findAll({ include: [{ association: "productImages" }, { association: "subcategory" }] })
            .then(product => res.status(200).json(product))
            .catch(error => console.log(error))
    },
    apiCategories: (req, res) => {
        db.Categories.findAll({ include: [{ association: "subcategories" }] })
            .then(cat => res.status(200).json(cat))
            .catch(error => console.log(error))
    }

}

