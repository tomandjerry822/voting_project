const express = require('express');
const router = express.Router();
router.get('/register', (req, res, next)=>{
   res.send('Register');
});

router.get('/authentication', (req, res, next)=>{
  res.send('authentication');
});

router.get('/validation', (req, res, next)=>{
  res.send('validation');
});

router.get('/about', (req, res, next)=>{
  res.send('about');
});
module.exports =router;
