'use strict';

var UsuarioController = require('./../controller/UsuarioController');

class UsuarioRoute {

    constructor(app) {

        app.get('/usuarios', (req, res) => {
            UsuarioController.buscarTodos(req, res);
        });

        app.get('/usuarios/:id', (req, res) => {
            UsuarioController.buscarPorId(req, res);
        });

        app.post('/usuarios', (req, res) => {
            UsuarioController.salvar(req, res);
        });

        app.put('/usuarios/:id', (req, res) => {
            UsuarioController.editar(req, res);
        });

        app.delete('/usuarios/:id', (req, res) => {
            UsuarioController.excluir(req, res);
        });
    } // constructor()

} // class

module.exports = UsuarioRoute;