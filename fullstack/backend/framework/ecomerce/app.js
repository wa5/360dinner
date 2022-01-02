require('dotenv').config()
const express=require('express')
const app=express()
app.set('port',process.env.PORT||8005)


const path=require('path')
const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'src/views'))

//settings for static files
app.use(express.static(path.join(__dirname,'src/public/img')))

const endPoint=require('./src/routes')

app.use('/api',endPoint.home)
app.use('/api',endPoint.login)
app.use('/api',endPoint.register)

//url rewiting
//?-zero 
// app.get('/ca?r',(req,res)=>{
//     res.send('hello im a car api')
// })

//more then one charecter
// app.get('/ca+r',(req,res)=>{
//     res.send('hello im a car api')
// })
//anything in between
// app.get('/man*sa',(req,res)=>{
//     res.send('hello im a car api')
// })

//url capturing 
// app.get('/vahical/:name/:email',(req,res)=>{
//     console.log(req.params.name)
//     console.log(req.params.email)
//     res.send(`hello  ${req.params.name} ${req.params.email}`)
// })




app.listen(app.get('port'),()=>{
console.log(`server stated on port no ${app.get('port')}`)
})