const express=require('express')
const Router=express.Router()
var {
    getRegister,
    postRegister,
    deleteRegister,
    putRegister,
  }=require('../controllers/register.Ctrl')
  


Router.route('/register')
.get(getRegister)
.post(postRegister)
.put(deleteRegister)
.delete(putRegister)

module.exports=Router