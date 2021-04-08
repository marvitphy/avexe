const app = require('express').Router();
const consultasModel = require('../models/consultasModel');
const bodyparser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');

app.use(bodyparser.json({ limit: '50mb', extended: true }))
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/empresas/:str', async(req, res) => {
    let resultCat = await consultasModel.getResultsCat(req.params.str);
    let resultNome = await consultasModel.getResultsNome(req.params.str)
    res.json([{
        tipo: 'Por Categoria',
        resultados: resultCat,
    }, {
        tipo: 'Por Nome',
        resultados: resultNome
    }])


})

module.exports = app