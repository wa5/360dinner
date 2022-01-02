const express=require('express')
const Router=express.Router()
var {
    getHome,
    postHome,
    deleteHome,
    putHome,
  }=require('../controllers/home.Ctrl')
  

Router.route('/home')
.get(getHome)
.post(postHome)
.put(deleteHome)
.delete(putHome)

module.exports=Router