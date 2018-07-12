'use strict';

const UsuarioModel = require('../model/UsuarioModel');
const Mongoose = require('mongoose');
const Usuario = Mongoose.model('Usuario');

class UsuarioController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Usuario.find({}));
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // buscarTodos()

    static async buscarPorId(req, res) {
        try {
            res.json(await Usuario.findById(req.params.id));
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // buscarPorId()

    static async salvar(req, res) {
        try {
            res.json(await Usuario.create(req.body));
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // slavar()

    static async editar(req, res) {
        try {
            res.json(await Usuario.findByIdAndUpdate(req.params.id, req.body));
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // editar()

    static async excluir(req, res) {
        try {
            await Usuario.remove({
                _id: req.params.id
            });

            res.send('Excluído com sucesso')
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // excluir()

} // class

module.exports = UsuarioController;