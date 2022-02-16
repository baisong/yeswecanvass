exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('notes').del()
    .then(function () {
      return knex('notes').insert([
        {
          id: 1,
          name: 'Person 1',
          description: 'No answer'
        },
        {
            id: 2,
            name: 'Person 2',
            description: 'Registered to vote for the first time'
        },
        {
            id: 3,
            name: 'Person 3',
            description: 'Interested in volunteering'
          }
      ]);
    });
  };