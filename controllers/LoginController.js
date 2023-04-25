const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const {config} = require('../config/config')

class LoginController
{
    async login(req, res)
    {
        let user = await User.findByEmail(req.body.email)

        if (user.length <= 0) {
            res.status(406)
            return res.json({err: "Não existe um usuario com este email"})
        }
        
        if(bcrypt.compareSync(req.body.password, user[0].password)){
            let token = jwt.sign({
                email: user[0].email,
                role: user[0].role
            },config.jwtSecret)

            return res.json({token})
        }

        res.status(406)
        return res.json({err: "Password incorreto."})
    }
}

module.exports = new LoginController()