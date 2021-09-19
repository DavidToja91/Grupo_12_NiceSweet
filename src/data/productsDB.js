const fs = require('fs');
const path = require('path');

module.exports = {
    getProducts: JSON.parse(fs.readFileSync(path.join(__dirname, '/productsDataBase.json'), "utf-8")),
    writeProductJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), JSON.stringify(dataBase), "utf-8")
    }
}


