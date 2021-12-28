var sendmaile=require('nodemailer')

var transporter=sendmaile.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'1ac13cs034'
    }
});


var mailOptions={
    from:'waseemahmed116@gmail.com',
    to:`manasa0552@gmail.com,prtknk13@gmail.com`,
    subject:'mansa faveret villn is look i to mail',
    text:'favret villain sunil'
}

transporter.sendMail(mailOptions,(err,info)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail sent')
    }
})