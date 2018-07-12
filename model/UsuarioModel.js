'use restrict';

const Mongoose = require('mongoose');

class UsuarioModel extends Mongoose.Schema {

    constructor() {
        super({
            nome: {
                type: String
            },

            senha: {
                type: String
            }
        });

        Mongoose.model('Usuario', this);
    } // constructor()

} // class

new UsuarioModel();
module.exports = UsuarioModel;