module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
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
/*          created_at: dataTypes.TIMESTAMP,
         updated_at: dataTypes.TIMESTAMP, */
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

<<<<<<< HEAD
    /* Product.associate = models => {
=======
/*     Product.associate = models => {
>>>>>>> aebff415af43af12a6d4d42d1b6b38ce9f6fbaa7
        Product.belongsTo(models.Subcategories,{
            as: "subcategory",
            foreignKey: "subcategoryId"
        });
        Product.hasMany(models.UserProducts,{
            as: "productUsers",
            foreignKey: "productId"
        });
    }; */

    return Product;
}
