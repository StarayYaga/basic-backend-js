const data = require("../../data")

function updateUser(req, res){
    let body = []
    req.on("data", chunk=>{
        body.push(chunk)
    }).on('end', async ()=>{
        body = JSON.parse(Buffer.concat(body).toString())
        const user = await data.update(body)
        res.writeHead(200)
        res.end(JSON.stringify(user))
    }) 
}

module.exports = updateUser