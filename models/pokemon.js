'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nameSchema = new Schema({ english: String, japanese: String, chinese: String, french: String });
var baseSchema = new Schema({ 'HP': Number, 'Attack': Number, 'Defense': Number, 'Sp. Attack': Number, 'Sp. Defense': Number, 'Speed': Number });
var PokemonSchema = Schema({
    id: Number,
    name: nameSchema,
    type: [String],
    base: baseSchema
});

module.exports = mongoose.model('Pokemon',PokemonSchema);
