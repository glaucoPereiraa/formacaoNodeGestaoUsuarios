const {config} = require('../config/config')
const jwt = require("jsonwebtoken")

module.exports = function (req, res, next)
{
    let authToken = req.headers['authorization']

    if (authToken != undefined) {
        const token = authToken.split(' ')[1]

        let role = jwt.verify(token, config.jwtSecret)['role']

        if (role == 1) {
            return next()
        }

        res.status(403)
        return res.json({err: "unauthorized."})
    }

    res.status(403)
    return res.json({err: "Token invalido."})
}