const http = require(`http`);

http.createServer((req,rep)=>{

    console.log(rep)
    rep.write(`Hola mundo`)
    rep.end();
})
.listen(8080);