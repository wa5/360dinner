require('./config/db.config')

var {User,Students}=require('./src/models')

// var stu1=new Students({name:'pratik',age:7,chocalate:'perk'})
// stu1.save()

// Students.findOneAndUpdate({age:7},{name:'murshi'},
// {overwrite:false,new:true},(err)=>{
// if(err)throw err
// console.log('value updated')
// })


// Students.findOne({name:'murshi'},(err,res)=>{
// if(err)throw err
// console.log(res)
// })

Students.findOneAndDelete({age:7},(err,res)=>{
    if(err)throw err
    console.log(res)
})