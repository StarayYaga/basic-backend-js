const data = require("../../data")

function createUser(req, res){
    let body = []
    req.on("data", chunk=>{
        body.push(chunk)
    }).on('end', ()=>{
        body = JSON.parse(Buffer.concat(body).toString())
        data.addUser({name: body.name})
        res.writeHead(200)
        res.end()
    }) 
    // res.end(JSON.stringify(data.getUsers()))
}

module.exports = createUser