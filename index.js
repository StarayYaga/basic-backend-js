const http = require("http")
const routeHandler = require("./routes/routeHandler")

const port = 3060
const server = http.createServer(routeHandler)

server.listen(port, ()=>{
    console.log("http://localhost:"+port);
})