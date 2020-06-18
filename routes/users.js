var express = require('express');
var router = express.Router();
//let User = require('../db/models/users.Model');
var axios = require('axios');
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
      .then((users)=>{
        res.render('user',{
            user: users
            });
      })
      .catch((e)=>{
        console.log("Error");
      });
});
router.route('/').post( (req, res) =>{
  const username = req.body.name;
  const newUser = new User({username: username});
  newUser.save()
      .then((users)=>{
        res.render('post',{
          name: users.username,
          data:'respond with a resource post'});
      }).catch((error)=>{
    console.log("Error", error);
  });
});

router.get('/edit/:id', function(req, res, next) {
  let name = req.params.id;
  User.findById(name).select('username')
      .then((ress)=>{
          res.send({
              name: ress,
              data:'respond with a id put'});
      })
});
router.get('/delete/:id', function(req, res, next) {
  let name = req.params.id;
  res.send({
    name,
    data:'respond with a resource delete'
  });
});
router.get('/movie/:id', (req, res)=>{
    const me = req.params.id;
    console.log(me);
   fetch(`http://www.omdbapi.com/?apikey=ebb5d535&t=${req.params.id}`)
       .then(res=> res.json())
       .then(body => { const tt = body;
           res.render('movie', {
               name: {tt}
           });
       })
       .catch((e)=>{
            res.status(500).send(e);
       });

});

module.exports = router;