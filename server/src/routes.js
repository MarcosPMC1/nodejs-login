const express = require('express');

const all = [{
    nome: 'Marcos', 
    status: false
}];
const Routes = express.Router()

Routes.post('/login', (request, response) => {
    const { name } = request.body;
    all.push({name, status: false})
    return response.status(201).json(all)
});

module.exports = Routes;