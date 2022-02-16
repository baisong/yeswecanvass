/**
 * Create the Notes table
 * 
 * @param {*} knex 
 * @param {*} Promise 
 * @returns 
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('description').notNullable()
        t.timestamps(false, true)
    })
}

/**
 * Destroy the Notes table
 * 
 * @param {*} knex 
 * @param {*} Promise 
 * @returns 
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notes');
}