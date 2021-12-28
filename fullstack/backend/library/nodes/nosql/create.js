var mongodb=require('mongodb').MongoClient

var url="mongodb://127.0.0.1:27017/"


mongodb.connect(url,(err,db)=>{
    if(err)throw err
    console.log("db created")
    var dbo=db.db("murshi");
    dbo.createCollection("students",(err,res)=>{
        if(err)throw err;
        console.log("collection created")
        db.close()
    })
})