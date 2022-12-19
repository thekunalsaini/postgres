const express = require('express');
//const mongoose = require('mongoose');
const router = require('./routes/userRoutes');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:3001"
  };
  
  app.use(cors(corsOptions));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

//mongoose.connect('mongodb://127.0.0.1:27017/TestDB')
//mongoose.connection.once('open', (err)=>{
  //  if(!err) {
    //    console.log('connected to db');
 //   } else {
 //       throw err;
  //  }
//})

const db = require("./models");
const Role = db.role;

//db.sequelize.sync({force: true}).then(() => {
  //  console.log('Drop and Resync Db');
  //  initial();
  //});
  
app.use(express.json());
app.use('/api', router);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application" });
  });

  require('./routes/auth.routes')(app);
  require('./routes/user.routes')(app);


let port = 3000 || process.env.PORT;
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    
    Role.create({
      id: 2,
      name: "admin"
    });
  }