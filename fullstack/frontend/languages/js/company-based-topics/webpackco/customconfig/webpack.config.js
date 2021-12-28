var path=require('path')

module.exports={
    // mode:"development",
    mode:"production",
    entry:"./src/app.js",
    output:{
        path:path.resolve(__dirname,'public'),
        filename:'dinkachika.js'
    }

}