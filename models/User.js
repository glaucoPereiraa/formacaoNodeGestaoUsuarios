const knex = require("../database/connection")
const bcrypt = require("bcrypt")

class User{
    async findAll()
    {
        try {
            return await knex
                .select("id", "name", "email", "role")
                .from('users')
        } catch (error) {
            console.log(error)
        }
    }

    async findById(id) 
    {
        try {
            return await knex
                .select("id", "name", "email", "role")
                .from("users")
                .where({id})
        } catch (error) {
            console.log(error)
        }
    }

    async findByEmail(email) 
    {
        try {
            return await knex
                .select("id", "name", "email", "role")
                .from("users")
                .where({email})
        } catch (error) {
            console.log(error)
        }
    }

    async create(email, name, password)
    {
        let hash = bcrypt.hashSync(password, 8)
        try {
            return await knex("users").insert({
                email,
                password: hash,
                name,
                role: 0
            })
        } catch (error) {
            console.log(error)
        }
    }

    async updateById(id, {name, email, role})
    {
        try {
            return await knex("users")
            .where({id})
            .update({
                name,
                email,
                role
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new User()