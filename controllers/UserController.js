const User = require("../models/User")

class UserController {

    async index(req, res)
    {
        let users = await User.findAll()
        return res.json(users)
    }

    async show(req, res)
    {
        let id = req.params.id
        let user = await User.findById(id)

        if (user.length <= 0) {
            res.status(406)
            return res.json(user)
        }

        return res.json(user)
    }

    async create(req, res)
    {
        let { email, name, password } = req.body

        if (email == undefined) {
            res.status(400)
            return res.json({err: "O campo email e obritagorio"})
        }

        if (name == undefined) {
            res.status(400)
            return res.json({err: "O campo name e obritagorio"})
        }

        if (password == undefined) {
            res.status(400)
            return res.json({err: "O campo password e obritagorio"})
        }

        let user = await User.findByEmail(email)

        if (user.length > 0) {
            res.status(406)
            return res.json({err: "Ja existe um usuario com este email"})
        }

        await User.create(email, name, password)

        return res.json({message: "Usuario criado com sucesso."})    
    }

    async update(req, res)
    {
        let id = req.params.id
        let { email, name, password } = req.body

        if (email == undefined) {
            res.status(400)
            return res.json({err: "O campo email e obritagorio"})
        }

        if (name == undefined) {
            res.status(400)
            return res.json({err: "O campo name e obritagorio"})
        }

        if (password == undefined) {
            res.status(400)
            return res.json({err: "O campo password e obritagorio"})
        }

        let user = await User.findByEmail(email)

        if (user.length > 0) {
            res.status(406)
            return res.json({err: "Ja existe um usuario com este email"})
        }

        await User.updateById(id,{
            email,
            name,
            password
        })

        return res.json({message: "Usuario atualizado com sucesso."})    
    }

    async delete(req, res)
    {
        let id = req.params.id
        let user = await User.delete(id)

        if (user > 0) {
            return res.json({message: "Usuario deletado com sucesso."})
        }
        
        res.status(406)
        return res.json({message: "Usuario nao foi encontado."})
    }
}

module.exports = new UserController()