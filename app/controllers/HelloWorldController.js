class HelloWorldController {
  helloWorld(req, res) {
    res.json({ message: "Hello World" })
  }
}

module.exports = new HelloWorldController()
