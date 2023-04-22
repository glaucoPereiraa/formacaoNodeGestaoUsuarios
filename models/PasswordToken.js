const knex = require("../database/connection")
const User = require("./User")
const Uuid = require('uuid')

class PasswordToken
{
    async tokenGenerate(email)
    {
        let user = await User.findByEmail(email)
        if (user.length > 0) {
            let token = Uuid.v4()
            try {
                return await knex("password_tokens")
                    .insert({
                        token,
                        user_id: user[0].id,
                        used: false
                    })
            } catch (error) {
                console.log(error)
            }
        }

        return undefined
    }

    async validated(token)
    {
        try {
            let userId = await knex
                .select("user_id")
                .from("password_tokens")
                .where({token, used: false})

            knex("password_tokens")
                .where({token, used: false})
                .update({used: true})
                .then(() => {
                    console.log("Token Atualizado")
                })

            return userId
        } catch (error) {
            console.log(error)
        }
    }

    async changePassword(token, password)
    {
        let userId = await this.validated(token)
        
        if (userId.length <= 0) {
            return undefined
        }
        
        return await User.updateById(userId[0].user_id, {password})
    }
}

module.exports = new PasswordToken()