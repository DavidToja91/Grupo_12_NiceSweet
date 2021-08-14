let productsDB = require('../data/productsDB');

module.exports= {
    productos: (req, res)=>{
        res.render('admin' , {
            productsDB /*Le pasamos como objeto la base de datos */
        })
    },
    producto: (req, res)=>{

    },
    agregarFormulario: (req, res)=>{

    },
    agregarProducto: (req, res)=>{

    }
}