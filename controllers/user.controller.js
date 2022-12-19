exports.allAccess = (req, res) => {
    res.status(200).send("Welcome to the home page");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("Welcome to the User page");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Welcome to the Admin page");
  };
  