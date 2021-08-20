// let productsDB = require('../data/productsDB');
const { NotExtended } = require('http-errors')
let { getProducts, getUsers, writeJson } = require('../data/productsDB')

module.exports= {
    inicio: (req, res)=>{
        res.render('admin/adminIndex', {
            getProducts,
            title: "Bienvenide Admin"
        } )
    },
    productos: (req, res)=>{
        res.render('admin/adminProductos' , {
            getProducts /*Le pasamos como objeto la base de datos */
        })
    },
    agregarFormulario: (req, res)=>{
        res.render('admin/agregarProducto')
    },
    agregarProducto: (req, res)=>{
        let lastId = 1;
        getProducts.forEach(product => {
            if(product.id > lastId){
                lastId = product.id
            }
        }) 
        let {name, price, category, subcategory} = req.body

        let newProduct = {
            id: lastId + 1,
            name: name,
            price: price,
            category: category,
            subcategory: subcategory,
            discount: "0",
            description: "none",
            image: req.file ? req.file.filename : "default-image.png"
        }
        getProducts.push(newProduct);
        writeJson(getProducts);
        res.redirect('/admin')
    },
    

}

//EDU SI VES ESTO LO COMENTÉ PARA NO MANDARME MACANAS TKM
// module.exports = {
//     'index': (req, res) => {
//         res.render('admin/index');
//     },
//     'products': (req, res) => {        
//         res.render('admin/products');
//     },
//     'users': (req, res) => {        
//         res.render('admin/users');
//     },
// };
