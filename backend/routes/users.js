const router = require('express').Router();
let User = require('../models/user.model');

router.post('/add',(req, res)=>{
  let newUser = new User({
    name:req.body.name,
    password:req.body.password
  });

  newUser.save()
    .then(()=> res.json('User Added'))
    .catch(err=> res.status(400).json('Error' + err));
  
});

router.get('/',(req, res)=>{
  User.find((err, users)=>{
    if(err) throw err;
    else{
      res.json(users);
    }
  })
});

router.get('/:id',(req, res)=>{
  User.findById(req.params.id,(err, user)=>{
    if(err) throw err;
    else{
      res.json(user);
    }
  })
})

module.exports = router;
