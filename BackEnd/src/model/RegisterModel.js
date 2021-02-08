const mongoose = require('../config/database');

const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    Nome:{type: String, required: true},
    Email:{type: String, required: true},
    Telefone:{type: String, required: true},
    Profissao:{type: String, required: true},
    PossuiCarro:{type: String, required: true}
});

module.exports = mongoose.model('Register', RegisterSchema);