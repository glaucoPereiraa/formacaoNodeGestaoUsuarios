const express = require("express")
const router = express.Router()
const HomeController = require("../controllers/HomeController")
const UserController = require("../controllers/UserController")
const PasswordTokenController = require("../controllers/PasswordTokenController")
const LoginController = require("../controllers/LoginController")
const AuthMiddleware = require("../middleware/AutheticationMiddleware")

router.get('/', HomeController.index)

router.get('/user', AuthMiddleware, UserController.index)
router.post('/user', AuthMiddleware, UserController.create)
router.get('/user/:id', AuthMiddleware, UserController.show)
router.put('/user/:id', AuthMiddleware, UserController.update)
router.delete('/user/:id', AuthMiddleware, UserController.delete)

router.post('/user/tokenGenarete', PasswordTokenController.tokenGenerate)
router.post('/user/changePassword', PasswordTokenController.changePassword)
router.post('/login', LoginController.login)

module.exports = router