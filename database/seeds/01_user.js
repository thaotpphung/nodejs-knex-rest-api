exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('developer')
    .del()
    .then(() =>
      knex('developer').insert([
        {
          first_name: 'rowValue',
          last_name: 'rowValue',
          middle_names: 'rowValue',
          email: 'rowValue1',
        },
        {
          first_name: 'rowValue',
          last_name: 'rowValue',
          middle_names: 'rowValue',
          email: 'rowValue2',
        },
        {
          first_name: 'rowValue',
          last_name: 'rowValue',
          middle_names: 'rowValue',
          email: 'rowValue3',
        },
      ])
    );
};
