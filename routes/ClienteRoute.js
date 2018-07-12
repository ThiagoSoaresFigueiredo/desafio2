'use strict';

var ClienteController = require('./../controller/ClienteController');

class ClienteRoute {

    constructor(app) {

        app.get('/clientes', (req, res) => {
            ClienteController.buscarTodos(req, res);
        });

        app.get('/clientes/:id', (req, res) => {
            ClienteController.buscarPorId(req, res);
        });

        app.post('/clientes', (req, res) => {
            ClienteController.salvar(req, res);
        });

        app.put('/clientes/:id', (req, res) => {
            ClienteController.editar(req, res);
        });

        app.delete('/clientes/:id', (req, res) => {
            ClienteController.excluir(req, res);
        });
    } // constructor()

} // class

module.exports = ClienteRoute;