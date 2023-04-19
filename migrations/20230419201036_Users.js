

exports.up = function(knex) {
    return knex.schema
    .createTable('users', function (table) {
        table.increments('id')
        table.string('name', 50)
        table.string('email', 150).notNullable()
        table.string('password', 200)
        table.integer('role')
        table.unique('email')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('users')
};
