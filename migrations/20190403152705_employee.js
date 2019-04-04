
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee', (table) => {
    table.increments()
    table.text('name')
    table.text('number')
    table.integer('zipCode')
    table.text('image')
    table.text('skills')
    table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('employee')
};
