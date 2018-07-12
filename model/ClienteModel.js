'use restrict';

const Mongoose = require('mongoose');

class ClienteModel extends Mongoose.Schema {

    constructor() {
        super({
            nome: {
                type: String
            },

            email: {
                type: String
            },

            sexo: {
                type: String
            },

            estado: {
                type: String
            },

            foto: {
                type:String
            },

            data_nascimento: {
                type: Date
            },

            curso_interesse: {
                type: String
            }
        });

        Mongoose.model('Cliente', this);
    } // constructor()

} // class

new ClienteModel();
module.exports = ClienteModel;