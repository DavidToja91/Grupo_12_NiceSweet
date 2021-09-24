module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        nameCategory:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
    };
    let config = {
        tableName: "categories",
        timeStamps: false
    };

    const Category = sequelize.define(alias, cols, config);
//se enlaza con subcategorias
    Category.associate = models => {
        Category.hasMany(models.Subcategories , {
            as: "subcategories",
            foreignKey: "categoryId"
        });
    };

    return Category;
}
