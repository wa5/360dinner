const getRegister = (req, res) => {


    res.render("register", { name: "pratik" });
  };
  const postRegister = (req, res) => {
    res.render("home", { name: "pratik" });
  };
  const deleteRegister = (req, res) => {
    res.render("home", { name: "pratik" });
  };
  const putRegister = (req, res) => {
    res.render("home", { name: "pratik" });
  };
  
  module.exports = {
    getRegister,
    postRegister,
    deleteRegister,
    putRegister,
  };
  