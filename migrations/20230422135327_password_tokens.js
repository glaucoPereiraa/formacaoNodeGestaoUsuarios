exports.up = function(knex) {
    return knex.schema
    .createTable('password_tokens', function (table) {
        table.increments('id')
        table.string('token', 200)
        table.boolean('used')
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('users')
}