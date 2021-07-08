const http= require("http");
const server= http.createServer((req,res)=>{
   // console.log(req.url);
   if(req.url=="/")
   {     
    res.end("hello from other side");
   } else if(req.url=="/about")
   { 
    res.end("hello from other side this is about us ");
   }
   else{
       res.writeHead(404,{ "Content-type" :"text/html" });
       res.end("<h1>404 error</h1>");
   }
});
    server.listen(8000,"127.0.0.1",()=>{
    console.log("Server is started Successfully at 8000 Port");
   
    });
