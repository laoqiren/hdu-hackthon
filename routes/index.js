var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/intro',(req,res)=>{
  res.render('index');
})

router.get('/prepare',(req,res)=>{
  res.render('prepare');
})

router.get('/reward',(req,res)=>{
  res.render('reward');
})

router.get('/date',(req,res)=>{
  res.render('date');
})

router.get('/rules',(req,res)=>{
  res.render('rule');
})

router.get('/fqa',(req,res)=>{
  res.render('fqa');
})
router.get('/joinself',(req,res)=>{
  res.render('joinself');
})
router.get('/jointeam',(req,res)=>{
  res.render('jointeam');
})
router.get('/admin',(req,res)=>{
  if(req.session.admin){
        
        console.log(`${__dirname}/../admin.html`)
        return res.render('admin')
    } else {
        return res.redirect('/auth')
    }
})
router.get('/auth',(req,res)=>{
  return res.render('auth')
})
module.exports = router;
