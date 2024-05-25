const url = require("url")

const router = require("./userRoutes/router")

function routeHandler(req, res){
    const path = url.parse(req.url, true).path
    if (path == "/users" || path == "/user"){
        router(req, res)
    } else {
        res.setHeader('Content-Type', "application/json")
        res.writeHead(404)
        res.end(JSON.stringify({message: "Route not found!"}))
    }
}

module.exports = routeHandler