var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

con.connect((err)=>{
    if(err)throw err;
    console.log("connected")
    con.query("CREATE DATABASE murshi",(err,reulst)=>{
        if(err)throw err;
        console.log("db created")
    })
})