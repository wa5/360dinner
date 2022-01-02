
const sendmail=require('../helpers/sendingmail')

const getLogin = (req, res) => {
const name=req.query.name
const email=req.query.email
const password=req.query.name
console.log(name,email,password,req.query)
sendmail(email,name)
    res.render("login", { name: name,email:email,password:password });
  };
  const postLogin = (req, res) => {
    res.render("home", { name: "pratik" });
  };
  const deleteLogin = (req, res) => {
    res.render("home", { name: "pratik" });
  };
  const putLogin = (req, res) => {
    res.render("home", { name: "pratik" });
  };
  
  module.exports = {
    getLogin,
    postLogin,
    deleteLogin,
    putLogin,
  };
  