const data = require("../../data")

function updateUser(req, res){
    let body = []
    req.on("data", chunk=>{
        body.push(chunk)
    }).on('end', ()=>{
        body = JSON.parse(Buffer.concat(body).toString())
        data.update(body.id, body.user)
        res.writeHead(200)
        res.end()
    }) 
}

module.exports = updateUser