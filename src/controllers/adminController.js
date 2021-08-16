// let productsDB = require('../data/productsDB');
let { getProducts, getUsers } = require('../data/productsDB')

module.exports= {
    productos: (req, res)=>{
        res.render('admin' , {
            getProducts /*Le pasamos como objeto la base de datos */
        })
    },
    producto: (req, res)=>{

    },
    agregarFormulario: (req, res)=>{

    },
    agregarProducto: (req, res)=>{

    }
}

//EDU SI VES ESTO LO COMENTÉ PARA NO MANDARME MACANAS TKM
// let { getProducts, getUsers } = require('../data/productsDB')

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
