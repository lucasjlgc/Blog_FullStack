const db = require('./Db')

const Postas = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Postas;

/* Postas.sync({force: true}) */