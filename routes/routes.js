const express = require("express")
const router = express.Router()
const HomeController = require("../controllers/HomeController")
const UserController = require("../controllers/UserController")
const PasswordTokenController = require("../controllers/PasswordTokenController")

router.get('/', HomeController.index)

router.get('/user', UserController.index)
router.post('/user', UserController.create)
router.get('/user/:id', UserController.show)
router.put('/user/:id', UserController.update)
router.delete('/user/:id', UserController.delete)

router.post('/user/tokenGenarete', PasswordTokenController.tokenGenerate)
router.post('/user/changePassword', PasswordTokenController.changePassword)

module.exports = router