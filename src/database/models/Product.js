module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        nameProduct: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(200),
        },
        discount: {
            type: dataTypes.INTEGER(11),
        },
        subcategoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
/*          created_at: dataTypes.TIMESTAMP,
         updated_at: dataTypes.TIMESTAMP, */
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Subcategories,{
            as: "subcategory",
            foreignKey: "subcategoryId"
        });
        Product.hasMany(models.ProductImages, {
            as: "productImages",
            foreignKey: "productId"
        })
    };  

    return Product;
}
