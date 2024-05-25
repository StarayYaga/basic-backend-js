const data = require("../../data")

function deleteUser(req, res){
    let body = []
    req.on("data", chunk=>{
        body.push(chunk)
    }).on('end', ()=>{
        body = JSON.parse(Buffer.concat(body).toString())
        console.log(body)
        data.deleteUser({id: body.id})
        res.writeHead(200)
        res.end()
    }) 
    // res.end(JSON.stringify(data.getUsers()))
}

module.exports = deleteUser