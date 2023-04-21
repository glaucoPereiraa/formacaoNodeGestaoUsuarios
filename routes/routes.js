const express = require("express")
const router = express.Router()
const HomeController = require("../controllers/HomeController")
const UserController = require("../controllers/UserController")

router.get('/', HomeController.index)

router.get('/user', UserController.index)
router.post('/user', UserController.create)
router.get('/user/:id', UserController.show)
router.put('/user/:id', UserController.update)

module.exports = router