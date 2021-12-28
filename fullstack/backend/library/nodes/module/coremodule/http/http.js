var http=require('http')

console.log(http)

http.createServer((req,res)=>{
    res.write("hello im the response from ur first api")
    res.end()
}).listen(4000,()=>{
    console.log(" server sarted")
})