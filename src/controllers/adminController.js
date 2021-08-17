// let productsDB = require('../data/productsDB');
let { getProducts, getUsers } = require('../data/productsDB')

module.exports= {
    inicio: (req, res)=>{
        res.render('/', {
            title: "Bienvenide Admin"
        } )
    },
    productos: (req, res)=>{
        res.render('admin/adminIndex.ejs' , {
            getProducts /*Le pasamos como objeto la base de datos */
        })
    },
    agregarFormulario: (req, res)=>{
        res.render('admin/agregarProducto')
    },
    agregarProducto: (req, res)=>{
        

    }
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
