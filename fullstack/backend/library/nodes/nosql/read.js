var mongodb = require('mongodb').MongoClient

var url = "mongodb://127.0.0.1:27017/"


mongodb.connect(url, (err, db) => {
    if (err) throw err
    console.log("db connected")
    var dbo = db.db("murshi")



 
//single value

//     dbo.collection("students").findOne({},(err,res)=>{
// if(err)throw err
// console.log(res)
// db.close()
//     })




    dbo.collection("students").find({}).toArray((err,res)=>{
        if(err)throw err
        console.log(res)
        db.close()
            })
})