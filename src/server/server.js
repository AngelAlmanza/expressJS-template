const express = require('express')
const cors = require('cors')

class Server {
  #app
  #port
  #apiRoutes = {
    example: '/api/example'
  }

  constructor () {
    this.#app = express()
    this.#port = process.env.PORT || 3000
    this.#app.disable('x-powered-by')
    this.#dbConnection()
    this.#middlewares()
    this.#routes()
  }

  async #dbConnection () {
    try {
      // Connect to the database
    } catch (error) {
      // Handle error
    }
  }

  #middlewares () {
    this.#app.use(express.json())
    this.#app.use(express.urlencoded({ extended: true }))
    this.#app.use(cors())
  }

  #routes () {
    // Define routes
  }

  listen () {
    this.#app.listen(this.#port, () => {
      console.log(`Server running on http://localhost:${this.#port}`)
    })
  }
}

module.exports = Server
