const { Model, DataTypes } = require('sequelize');

class Tarefa extends Model {
    static init(sequelize) {
        super.init({
            tarefa: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Tarefa;