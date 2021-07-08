const http= require("http");
const server= http.createServer((req,res)=>{
res.end("Hello from Other side today awesome day ");
});
 
  server.listen(8000,"127.0.0.1",()=>{
      console.log("Web server is running at 8000 port")
  });