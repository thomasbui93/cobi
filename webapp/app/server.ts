"use strict"
import express from "express"
import next from "next"
import { parse } from "url"

import route from "./routers"
// Constants
const PORT = 8000
const HOST = "0.0.0.0"
const dev = process.env.NODE_ENV !== "production"
const nextRoutes = require("../routes.json")

// App
const app = express()
route(app)

const nextApp = next({dir: ".", dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  app.get("*", (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query = {} } = parsedUrl
    const route = nextRoutes[pathname]
    if (route) {
      return nextApp.render(req, res, route.page, route.query)
    }
    return handle(req, res)
  })
  try {
    app.listen(PORT, HOST)
    console.log(`Running on http://${HOST}:${PORT}`)
  } catch (err) {
    console.log(err)
  }
})

