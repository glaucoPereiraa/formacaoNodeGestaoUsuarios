const {config} = require('../config/config')

let knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : config.dbHost,
      user : config.dbUser,
      password : config.dbPassword,
      database : config.dbDatabase
    }
  });

module.exports = knex