const { update } = require('../models/Tarefa');
const Tarefa = require('../models/Tarefa');

module.exports = {
    //para criar uma tarefa
    async store(req, res){
        const { tarefa } = req.body;

        const dever = await Tarefa.create({ tarefa });

        return res.json(dever);
    },

    //para listar as tarefas
    async index (req, res) {
        const tarefas = await Tarefa.findAll();

        return res.json(tarefas);
    },

    //para deletar uma tarefa
    async delete (req, res) {
        const { id } = req.params;

        await Tarefa.destroy({
            where: {
                id: id
            }
        });

        return res.json({ ok: "Deletado com sucesso!" });
    },

    //para atualizar uma tarefa
    async updateS (req, res) {
        const { state } = req.body
        const { id } = req.params
        await Tarefa.update({state: state}, {
            where: {
              id:id
            }
          });

          return res.json(state)
    }
};