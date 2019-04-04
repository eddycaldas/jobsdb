const router = require('Express').Router()
const queries = require('../db/queries')

const table = 'employer'

router.post('/', (req, res) => {
    queries[table].create(req.body)
        .then((employee) => res.json(employee))
})

router.get('/:id', (req, res) => {
    queries[table].read(req.params.id)
        .then((employee) => res.json(employee))
})

router.delete('/:id',(req, res) => {
    queries[table].delete(req.params.id)
        .then(() => res.send(202))
})

router.get('/', (req, res) => {
    queries[table].list()
        .then((data) => res.json(data))
})

router.put('/:id', (req, res) => {
    queries[table].update(req.params.id, req.body)
        .then((employee) => res.send(200))
})

module.exports = router
