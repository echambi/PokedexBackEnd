'use strict'

// var validator = require('validator');
// var fs = require('fs');
// var path = require('path');

var Pokedex = require('../models/pokedex');
var Pokemon = require('../models/pokemon');
var Usuario = require('../models/usuario');

var controller = {

    datosCurso: (req, res) => {
        var holax = req.body.hola;
    
        return res.status(200).send({
            curso: 'Master en Frameworks JSx',
            autor: 'Víctor Robles WEBx',
            url: 'victorroblesweb.esx',
            hola: holax
        });
    },
    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de pokedex'
        });
    },
    getPokedexs: (req, res) => {
        Pokedex.find({}).exec((err, pokedexs)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos !!!'
                });
            }
            if(!pokedexs){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!!'
                });
            }
            return res.status(200).send({
                status: 'success',
                pokedexs
            });
        });
    },
    getUsuarios: (req, res) => {
        Usuario.find({}).exec((err, usuarios)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos !!!'
                });
            }
            if(!usuarios){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos para mostrar !!!'
                });
            }
            return res.status(200).send({
                status: 'success',
                usuarios
            });
        });
    },
    getPokemons: (req, res) => {
        // Pokemon.find({$or:[{"name.english":{ $regex: /.*char.*/i }},{"id": 1}]}).exec((err, pokemons)=>{
        // Pokemon.find({}).exec((err, pokemons)=>{
        Pokemon.find({}).exec((err, pokemons)=>{
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los pokemons !!!'
                });
            }
            if(!pokemons){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay pokemons para mostrar !!!'
                });
            }
            return res.status(200).send({
                status: 'success',
                pokemons
            });
        });
    },
    searchPokemons: (req, res) => {
        // Sacar el string a buscar
        let parId = 0;
        let searchString = '';
        searchString = req.params.search;
        // searchString = 'Charmander';
        // return res.status(200).send({
        //     message: searchString
        // });

        // Pokemon.find({$or:[{"name.english":{ $regex: /.*searchString+.*/i }},{"id": searchString}]}).exec((err, pokemons)=>{

        // debugger;
        // Find or
        // Pokemon.find({ $or: [
        //     { "name.english": { $regex: searchString, $options: "i"}}
        // ]})
        
        // Pokemon.find({"name.english": searchString})

        // Pokemon.find({$or:[{"name.english":{ $regex: searchString }},{"id": 2 }]})
        // parId=Number(searchString);
        // if (parId==null){
        //     parId=0;
        // }

        // Contract.find(
        //     { "$where": "function() { return this.number.toString().match(/555/) != null; }" }
        // ).function(err,contracts) {
        //    // do something with results
        // });


        // { "name.english": { $regex: searchString, $options: "i"}},


        Pokemon.find({ $or: [
            { "name.english": { $regex: searchString, $options: "i"}},
            { "$where": "function() { return this.id.toString().match(/" +searchString+"/) != null; }"}
        ]})
        .exec((err, pokemons) => {
        
            if(err){
                return res.status(500).send({
                    status: 'error1',
                    Parametro: searchString,
                    parId: parId,
                    message: 'Error en la petición !!!'
                });
            }
            
            if(!pokemons || pokemons.length <= 0){
                return res.status(404).send({
                    status: 'error2',
                    Parametro: searchString,
                    parId: parId,
                    message: 'No hay pokemons que coincidan con tu busqueda !!!'
                });
            }

            return res.status(200).send({
                status: 'success',
                Parametro: searchString,
                parId: parId,
                pokemons
            });

        });
    }
};  // end controller

module.exports = controller;