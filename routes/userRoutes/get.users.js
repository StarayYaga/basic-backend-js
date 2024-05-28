const data = require("../../data")

async function getUsers(req, res){
    res.writeHead(200)
    res.end(JSON.stringify(await data.getUsers()))
}

module.exports = getUsers