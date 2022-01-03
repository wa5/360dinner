var nodemailer=require('nodemailer')
var sendotp=require('./otp')
function sendMil(email,name){

var tr=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'1ac13cs034'
    }
})
var otp=sendotp()




var mailop={
    from:'wseemahmed116@gmail.com',
    to:email,
    subject:`successfully registered`,
    text:`welcome ${name}
    your otp is ${otp}
    `

}
tr.sendMail(mailop,(err,res)=>{
if(err){
    console.log(err)
}else{
    console.log('mail send')
}
})
}

module.exports=sendMil