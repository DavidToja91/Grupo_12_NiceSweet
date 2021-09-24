module.exports = (sequelize, dataTypes) => {
    let alias = "Subcategories";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        nameSubcategory:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        categoryId:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        
    };
    let config = {
        tableName: "subcategories",
        timestamps: false
    };

    const Subcategory = sequelize.define(alias, cols, config);
//se enlaza con la tabla de categorías
    Subcategory.associate = models => {
        Subcategory.belongsTo(models.Categories, {
            as: "category",
            foreignKey: "categoryId"
        });
        Subcategory.hasMany(models.Products , {
            as: "products",
            foreignKey : "subCategoryId" 
        });
    };

    return Subcategory;
}