const { Router } = require("express")

const HelloWorldController = require("./controllers/HelloWorldController")

const index = Router()

index.get("/", HelloWorldController.helloWorld)

const router = Router()

router.use("/", index)

module.exports = router
