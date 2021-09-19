
const { NotExtended } = require('http-errors');
let { getProducts, writeProductJSON } = require('../data/productsDB');
let { getUsers, writeUsersJSON } = require('../data/usersDB');

module.exports= {
    inicio: (req, res) => {
        res.render('admin/index', {
            getProducts,
            title: "Bienvenid@ Admin"
        });
    },
    ////////// PRODUCTS \\\\\\\\\\
    productos: (req, res) => {
        res.render('admin/products' , {
            title: "Productos",
            getProducts /*Le pasamos como objeto la base de datos */
        });
    },
    agregarFormulario: (req, res) => {
        res.render('admin/addProduct', { title: "Agregar producto"});
    },
    agregarProducto: (req, res) => {
        let lastId = 1;

        getProducts.forEach(product => {
            if (product.id > lastId) {
                lastId = product.id;
            }
        });

        let {name, price, category, subcategory} = req.body;
        let newProduct = {
            id: lastId + 1,
            name: name,
            price: price,
            category: category,
            subcategory: subcategory,
            discount: "0",
            description:"none",
            image: req.file ? req.file.filename : "default-image.png"
        }

        getProducts.push(newProduct);

        writeProductJSON(getProducts);

        res.redirect('/admin');
    },
    editarFormulario : (req, res) => {
        let product = getProducts.find(product => product.id === +req.params.id);
        res.render('admin/editProduct', {
            title: "Agregar producto",
            product
        }); 

    },
    editarProducto: (req, res)=>{
        let {name, price, category, subcategory} = req.body;
        
        getProducts.forEach(product => {
            if (product.id === +req.params.id) {
                product.id = product.id,
                product.name = name,
                product.price = price,
                product.category = category,
                product.subcategory = subcategory,
                product.image = "default-image.png"
            }
        });

        writeProductJSON(getProducts);
        res.redirect('/admin');
    },
    eliminarProducto: (req, res) => {
        getProducts.forEach(product => {
            if (product.id === +req.params.id) {
                let productoAEliminar = getProducts.indexOf(product);
                getProducts.splice(productoAEliminar, 1);
            }
        })

        writeProductJSON(getProducts);
        res.redirect('/admin/products');
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

