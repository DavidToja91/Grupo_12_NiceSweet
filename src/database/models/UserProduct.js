module.exports = (sequelize, dataTypes)=>{
    let alias = 'user_products'
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
    },
    userId: {
        type: dataTypes.INTEGER(11).UNSIGNED,
        allowNull: false
    },
    productId:{

    },
    quantity:{
        type: dataTypes.STRING(100),
        allowNull: false
    }
     let config = {
        tableName: "users",
        timestamps: true
    }

    const UserProduct = sequelize.define(alias, cols, config)

    return UserProduct;
}

}