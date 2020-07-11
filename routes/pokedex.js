'use strict'

var express = require('express');
var ArticleController = require('../controllers/pokedex');

var router = express.Router();

// var multipart = require('connect-multiparty');
// var md_upload = multipart({ uploadDir: './upload/articles'});

// Rutas de prueba
router.post('/datos-curso', ArticleController.datosCurso);
router.get('/test-de-controlador', ArticleController.test);

// // Rutas útiles
// router.post('/save', ArticleController.save);
// router.get('/articles/:last?', ArticleController.getArticles);
router.get('/pokedexs', ArticleController.getPokedexs);
router.get('/usuarios', ArticleController.getUsuarios);
router.get('/pokemons', ArticleController.getPokemons);
router.get('/searchpk/:search', ArticleController.searchPokemons);
// router.get('/article/:id', ArticleController.getArticle);
// router.put('/article/:id', ArticleController.update);
// router.delete('/article/:id', ArticleController.delete);
// router.post('/upload-image/:id?', md_upload, ArticleController.upload);
// router.get('/get-image/:image', ArticleController.getImage);
// router.get('/search/:search', ArticleController.search);

module.exports = router;