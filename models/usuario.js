'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    'nombre': String,
    'apellido': String,
    edad: Number
});

module.exports = mongoose.model('Usuario',UsuarioSchema);
