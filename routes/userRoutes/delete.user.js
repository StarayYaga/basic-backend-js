const data = require("../../data")

function deleteUser(req, res){
    let body = []
    req.on("data", chunk=>{
        body.push(chunk)
    }).on('end', async ()=>{
        body = JSON.parse(Buffer.concat(body).toString())
        const user = await data.deleteUser(body.id)
        res.writeHead(200)
        res.end(JSON.stringify(user))
    }) 
    // res.end(JSON.stringify(data.getUsers()))
}

module.exports = deleteUser