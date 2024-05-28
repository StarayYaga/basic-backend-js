const data = require("../../data")

function deleteUser(req, res){
    let body = []
    req.on("data", chunk=>{
        body.push(chunk)
    }).on('end', async ()=>{
        body = JSON.parse(Buffer.concat(body).toString())
        await data.deleteUser(body.id)
        res.writeHead(200)
        res.end()
    }) 
    // res.end(JSON.stringify(data.getUsers()))
}

module.exports = deleteUser