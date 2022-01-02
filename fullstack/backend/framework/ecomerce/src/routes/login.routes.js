const express=require('express')
const Router=express.Router()
var {
    getLogin,
    postLogin,
    deleteLogin,
    putLogin,
  }=require('../controllers/login.Ctrl')
  


Router.route('/login')
.get(getLogin)
.post( postLogin)
.put(deleteLogin)
.delete(putLogin)


module.exports=Router