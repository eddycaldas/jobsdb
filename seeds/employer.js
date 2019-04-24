
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employer').del()
    .then(function () {
      // Inserts seed entries
      return knex('employer').insert([
        {
          name: 'Flores Constructions',
          number: '720-337-7401',
          image: 'http://www.logofound.com/wp-content/uploads/2015/03/business-logo-05-230x230.jpg',
          description: 'The Perfect Logo, Under Budget! Millions of Gigs®. 24H Delivery. Unbeatable value. Professional sellers.',
          rating: '0',
          email: 'berto.ort@gmail.com',
          password: 'pineapple'
        }
      ]);
    });
};
