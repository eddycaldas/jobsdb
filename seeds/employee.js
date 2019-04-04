
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employee').del()
    .then(function () {
      // Inserts seed entries
      return knex('employee').insert([
        {
          name: 'Manuel Mendez',
          number: '534-392-5543',
          zipCode: '90321',
          image: 'https://media.eurekalert.org/multimedia_prod/pub/web/169764_web.jpg',
          skills: 'concrete, plumbing, framing',
          rating: '0'
        },
        {
          name: 'Manuel2 Mendez2',
          number: '534-392-5543',
          zipCode: '90321',
          image: 'https://media.eurekalert.org/multimedia_prod/pub/web/169764_web.jpg',
          skills: 'concrete, plumbing, framing',
          rating: '0'
        }
      ]);
    });
};
