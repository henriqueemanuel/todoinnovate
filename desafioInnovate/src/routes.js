const express = require('express');

const TarefasController = require('./controllers/TarefasController');

const routes = express.Router();

//Create
routes.post('/tarefa', TarefasController.store);

//Read
routes.get('/tarefa', TarefasController.index);

//Update
routes.put('/tarefa/:id', TarefasController.update);

//Delete
routes.delete('/tarefa/:id', TarefasController.delete);

module.exports = routes;