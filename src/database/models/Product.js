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
        discount: {
            type: dataTypes.INTEGER(11),
        },
        description: {
            type: dataTypes.STRING(200),
        },
        subcategoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        image: {
            type: dataTypes.TEXT(50),
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
