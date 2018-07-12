'use strict';

const ClienteModel = require('../model/ClienteModel');
const Mongoose = require('mongoose');
const Cliente = Mongoose.model('Cliente');

class ClienteController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Cliente.find({}));
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // buscarTodos()

    static async buscarPorId(req, res) {
        try {
            res.json(await Cliente.findById(req.params.id));
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // buscarPorId()

    static async salvar(req, res) {
        try {
            res.json(await Cliente.create(req.body));
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // slavar()

    static async editar(req, res) {
        try {
            res.json(await Cliente.findByIdAndUpdate(req.params.id, req.body));
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // editar()

    static async excluir(req, res) {
        try {
            await Cliente.remove({
                _id: req.params.id
            });

            res.send('Excluído com sucesso')
        } catch (error) {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao tentar executar uma ação no banco");
        }
    } // excluir()

} // class

module.exports = ClienteController;