const data = require("../../data")

function updateUser(req, res){
    let body = []
    req.on("data", chunk=>{
        body.push(chunk)
    }).on('end', async ()=>{
        body = JSON.parse(Buffer.concat(body).toString())
        await data.update(body)
        res.writeHead(200)
        res.end()
    }) 
}

module.exports = updateUser