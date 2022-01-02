function otpsend(){
    var digits='0123456789'
    let otp=''
    for(let i=0;i<4;i++){
        otp+=digits[Math.floor(Math.random()*10)]
    }
    
    return otp
}
console.log(otpsend)
 module.exports=otpsend