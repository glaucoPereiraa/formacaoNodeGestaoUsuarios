require('dotenv').config()

exports.config = {
    dbHost: process.env.DB_HOST,
    dbDatabase: process.env.DB_DATABASE,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
}