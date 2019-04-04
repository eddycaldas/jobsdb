
exports.up = function(knex, Promise) {
    return knex.schema.createTable('employer', (table) => {
        table.increments()
        table.text('name')
        table.text('number')
        table.text('image')
        table.text('description')
        table.integer('rating')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('employer')
  };
  