const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite3',
    Storage: __dirname + 'test.db'
})

const Tasks = db.define('task', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: Sequelize.DataTypes.STRING(40),
        allowNull: false
    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
})

exports = module.exports = Tasks