
const { NotExtended } = require('http-errors');
/* let { getProducts, writeProductJSON } = require('../data/productsDB');
let { getUsers, writeUsersJSON } = require('../data/usersDB'); 
 */
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Product = db.Products;


module.exports= {
    inicio: (req, res) => {
        Product.findAll()
        .then(getProducts =>{
            res.render('admin/index', {getProducts, title: "Bienvenid@ Admin"})
        })   
    },
    ////////// PRODUCTS \\\\\\\\\\
    productos: (req, res) => {
        Product.findAll()
        .then(getProducts =>{
            res.render('admin/products', {getProducts, title: "Productos"})
        })
    },
    agregarFormulario: (req, res) => {
        res.render('admin/addProduct', { title: "Agregar producto"});
    },
    agregarProducto: (req, res) => {
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
            res.redirect('/admin/products')
        })
        .catch(error => console.log(error))
    },
    editarFormulario : (req, res) => {
        Product.findByPk(req.params.id)
        .then(product =>{
            res.render("admin/editProduct",{
                product
            })
        })
    },
    editarProducto: (req, res)=>{
        const {
            name,
            price,
            discount,
            image,
            category,
            subcategory,
            description
        } = req.body
        Product.update({
            name,
            price,
            discount,
            image,
            category,
            subcategory,
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
    },
    eliminarProducto: (req, res) => {
        Product.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(()=>{
            res.redirect('/admin')
        })
        .catch(error => console.log(error))
    },
    ////////// USERS \\\\\\\\\\
    users: (req, res) => {
        res.render('admin/users' , {
            title: "Usuarios",
            getUsers /*Le pasamos como objeto la base de datos */
        });
    },
    addUser: (req, res) => {
        res.render('admin/addUser', {
            getUsers,
            title: "Agregar usuario"
        });
    },
    editUser: (req, res) => {
        let user = getUsers.find(user => user.id === +req.params.id);

        res.render('admin/editUser', {
            title: "Editar usuario",
            user
        });
    },
    proccessUser: (req, res) => {
        let {name, lastName, email, category, image} = req.body;
        
        getUsers.forEach(user => {
            if (user.id === +req.params.id) {
                user.id = user.id;
                user.name = name;
                user.lastName = lastName;
                user.email = email;
                user.category = category;       
                user.image = image? image : "default-image.png";
            }
        });

        writeUsersJSON(getUsers);
        res.redirect('/admin');
    },
    deleteUser: (req, res) => {
        getUsers.forEach(user=>{
            if(user.id === +req.params.id){
                let usuarioAEliminar = getUsers.indexOf(user)
                getUsers.splice(usuarioAEliminar, 1)
            }
        });

        writeUsersJSON(getUsers)
        res.redirect('/admin/users')
    }
}

