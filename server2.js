const fs = require("fs")
const http = require("http")

let home = fs.readFileSync("./home.html","utf-8")
let contact = fs.readFileSync("./contact.html","utf-8")
let about = fs.readFileSync("./about.html","utf-8")
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        return res.end(home)
    }
    if(req.url==="/Contact"){
       return res.end(contact)
    }
    if(req.url==="/About"){
        return res.end(about)
    }else{
        return res.end("<h1>page not found</h1>")
    }
    

    
})
server.listen(3000,"localhost",()=>{
    console.log("server is working ")
})