const Sequelize = require('sequelize');

const sequelize = new Sequelize('zalone', 'root', '#ATRUS10112', {
    host: "localhost",
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}