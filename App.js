'use strict';


const Express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');

const ClienteRoute = require('./routes/ClienteRoute');
const UsuarioRoute = require('./routes/UsuarioRoute');

class App {

    constructor() {
        this.app;
        this.porta = 3000;
        this.db = 'mongodb://root:root123@ds016058.mlab.com:16058/api-cadastro-cliente';
    } // constructor()

    init() {
        this.app = Express();
        this.app.use(BodyParser.urlencoded({
            extended: false
        }));
        this.app.use(BodyParser.json());

        Mongoose.connect(this.db, {
            useNewUrlParser: true
        });

        new ClienteRoute(this.app);
        new UsuarioRoute(this.app);

        this.app.get('/', (req, res) => {
            res.send(`Bem vindo a API de Cadastro de Cliente`);
        });

        this.app.listen(this.porta, () => {
            console.log(`\tAPI rodando na porta: ${this.porta}\n\tBanco de dados selecionado: ${this.db}`);
        });
    } // init()

} // class

new App().init();