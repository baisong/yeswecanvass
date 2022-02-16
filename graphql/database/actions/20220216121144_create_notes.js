exports.up = function(knex, Promise) {
    return knex.schema.createTable('notes', function (t) {
        t.increments('id').primary()
        t.string('name').notNullable()
        t.string('description').notNullable()
        t.timestamps(false, true)
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('notes');
}