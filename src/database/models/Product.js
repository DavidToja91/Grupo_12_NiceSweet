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
            type: dataTypes.STRING(20),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(200),
        },
        image: {
            type: dataTypes.TEXT(50),
        },
        discount: {
            type: dataTypes.INTEGER(11),
        },
        subcategoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
    };
    let config = {
        tableName: "products",
        timeStamps: true
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Subcategories,{
            as: "subcategory",
            foreignKey: "subcategoryId"
        });
        Product.hasMany(models.UserProducts,{
            as: "productUsers",
            foreignKey: "productId"
        });
    };

    return Product;
}
