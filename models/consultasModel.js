const knex = require('../db')


function getResultsCat(str) {
    return knex('empresas').select().where('categoria', 'like', `${str}%`)
        .orderBy('id', 'desc')
        .then(result => result)
        .catch(err => err)
}

function getResultsNome(str) {
    return knex('empresas').select().where('nome', 'like', `${str}%`)
        .orderBy('id', 'desc')
        .then(result => result)
        .catch(err => err)
}

module.exports = {
    getResultsCat,
    getResultsNome
}