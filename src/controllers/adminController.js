
const { NotExtended } = require('http-errors')
let { getProducts, getUsers, writeJson } = require('../data/productsDB')

module.exports= {
    inicio: (req, res)=>{
        res.render('admin/adminIndex', {
            getProducts,
            title: "Bienvenid@ Admin"
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
            description:"none",
            image: req.file ? req.file.filename : "default-image.png"
        }
        getProducts.push(newProduct);
        writeJson(getProducts);
        res.redirect('/admin')
    },
    editarFormulario : (req, res)=>{
        let product = getProducts.find(product =>{
            return product.id === +req.params.id
        })
        res.render('admin/editarProducto', {
            product
        })

    },
    editarProducto: (req, res)=>{
        let {name , price , category , subcategory , discount , description , image} = req.body
        getProducts.forEach(product=>{
            if(product.id === +req.params.id){
                product.id = product.id
                product.name = name
                product.price = price
                product.category = category
                product.subcategory = subcategory
                product.discount = discount
                product.description = description
                product.image = "default-image.png"
            }
        })
        writeJson(getProducts);

        res.redirect('/admin')

},
    eliminarProducto: (req, res)=>{
        getProducts.forEach(product=>{
            if(product.id === +req.params.id){
                let productoAEliminar = getProducts.indexOf(product)
                getProducts.splice(productoAEliminar, 1)
            }
        })
        writeJson(getProducts)

        res.redirect('/admin')
    }
}

