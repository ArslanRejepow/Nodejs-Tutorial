const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    res.write('Biz tapmadyk')
    res.end()
})

server.listen(5000)