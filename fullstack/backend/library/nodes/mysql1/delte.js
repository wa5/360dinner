var mysql=require('mysql')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'murshi'
})


con.connect((err)=>{
if(err)throw err;
console.log('db connected')
var q="DELETE FROM `students` WHERE name='pratik'"
con.query(q,(err,reult)=>{
if(err)throw err;
console.log("value deleted")
})
})