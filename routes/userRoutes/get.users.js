const data = require("../../data")

function getUsers(req, res){
    res.writeHead(200)
    res.end(JSON.stringify(data.getUsers()))
}

module.exports = getUsers