const app = require('express').Router()
const api = require('./api')

app.use(api)
app.get('/', function(req, res) {
    res.render('Index');
});

app.get('/empresa', function(req, res) {
    res.render('Empresa');
});


module.exports = app