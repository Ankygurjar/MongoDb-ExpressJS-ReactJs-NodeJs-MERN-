const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;
const router = require('./routes/users');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const uri = 'mongodb://127.0.0.1:27017/Users';

mongoose.connect(uri,{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
const connection = mongoose.connection;
connection.once('open',()=>{
  console.log("Server is connected to the database!!");
})

app.use('/users', router);

app.listen(port, ()=>{
  console.log("Server is running on Port : "+port);
});
