const fs = require('fs');
const path = require('path');

module.exports = {
    getUsers: JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), "utf-8")),
    writeUsersJson : (dataBase) => {
        fs.writeFileSync('./src/data/users.json', JSON.stringify(dataBase), "utf-8");
    }
}
