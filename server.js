const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const users = require('./routes/users');
const config = require('./config/database');
//connect to database
mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
  console.log('Connected to database: '+config.database);
});
mongoose.connection.on('error',(err)=>{
  console.log('Database connection err: '+err);
});


app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);
app.use(express.static(path.join(__dirname, 'public'));


app.get('/',(req, res)=>{
  res.send('Invalid Endpoint!');
});
app.listen(port, ()=>{
  console.log('The server is runnig at '+port);
});
