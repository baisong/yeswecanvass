/**
 * Invoke via command line to test database connection.
 */
const knex = require('../mysql')

console.log(process.env);
console.log(knex.client.config);

knex.raw('show schemas')
    .then(res => console.log(res))