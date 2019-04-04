const knex = require('./')

module.exports = {
    employee: {
        create(body) {
            return knex('employee').insert(body)
        },
        update(id, body){
            return knex('employee').where({id}).update(body)
        },
        read(id) {
            return knex('employee').where({id}).first()
        },
        delete(id) {
            return knex('employee').where({id}).delete()
        },
        list() {
            return knex('employee')
        }
    }
}