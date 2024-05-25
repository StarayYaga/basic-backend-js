const url = require("url")
const getUsers = require("./get.users")
const createUser = require("./add.user")
const deleteUser = require("./delete.user")
const updateUser = require("./update.user")


function router(req, res){
    const path = url.parse(req.url, true).pathname
    const method = req.method
    res.setHeader('Content-Type', "application/json")

    if (path == "/users" && method == "GET"){
        getUsers(req, res)
    } else if (path == "/user" && method == "POST"){
        createUser(req, res)
    } else if (path == "/user" && method == "DELETE"){
        deleteUser(req, res)
    } else if (path == "/user" && method == "PUT"){
        updateUser(req, res)
    }

}

module.exports = router