
var url=require('url')

var address="http://localhost:4000/home/intro?name=murshi&&chocalatte=cadbury"
var quree=url.parse(address,true)


console.log(quree.host)
console.log(quree.path)
console.log(quree.query.name)
