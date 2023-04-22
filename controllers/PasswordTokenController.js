const knex = require('../database/connection')
const PasswordToken = require('../models/PasswordToken')

class PasswordTokenController
{
    async tokenGenerate(req, res)
    {
        let email = req.body.email
        if (email == undefined) {
            res.status(400)
            return res.json({err: "O campo email e obritagorio"})
        }

        let token = await PasswordToken.tokenGenerate(email)
        if (token == undefined) {
            res.status(406)
            return res.json({err: "Nao foi possivel gerar o token para este email"})
        }

        return res.send('Token enviado com sucesso')
    }

    async changePassword(req, res)
    {
        let { token, password} = req.body
        let response = await PasswordToken.changePassword(token, password)
        console.log(response)
        if (!response) {
            res.status(406)
            return res.json({err: "Nao foi possivel atualizar a senha"})
        }

        return res.json({message: "Senha alterado com sucesso"})
    }

}

module.exports = new PasswordTokenController()