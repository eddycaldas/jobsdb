const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

router.post('/', (req, res) => {
    queries.employee.create(req.body)
        .then((employee) => res.json(employee))
})

router.get('/:id', (req, res) => {
    queries.employee.read(req.params.id)
        .then((employee) => res.json(employee))
})

router.delete('/:id',(req, res) => {
    queries.employee.delete(req.params.id)
        .then(() => res.send(202))
})

router.get('/', (req, res) => {
    queries.employee.list()
        .then((data) => res.json(data))
})

router.put('/:id', (req, res) => {
    queries.employee.update(req.params.id, req.body)
        .then((employee) => res.send(200))
})

module.exports = router
