var express = require('express');
var router = express.Router();
//let User = require('../db/models/users.Model');
var axios = require('axios');
var fetch = require('node-fetch');

/* GET users listing. */
router.get('/:search-movie', function(req, res, next) {
    let search = req.params.search_movie;
    console.log(search);
    fetch(`http://www.omdbapi.com/?apikey=ebb5d535&s=${search}&plot=full&v=2`)
        .then(res=> res.json())
        .then(body => { const tt = body;
            res.render('movie', {
                searched_movie: {tt}
            });
            console.log(tt)
        })
        .catch((e)=>{
            res.status(500).send(e);
        });
});
router.post('/', (req, res) =>{
  let search = req.body.search_movie;
  console.log(search);
    fetch(`http://www.omdbapi.com/?apikey=ebb5d535&s=${search}&plot=full&v=2`)
        .then(res=> res.json())
        .then(body => { const tt = body;
            res.render('movie', {
                searched_movie: {tt}
            });
            console.log(tt)
        })
        .catch((e)=>{
            res.status(500).send(e);
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
   fetch(`http://www.omdbapi.com/?apikey=ebb5d535&i=${req.params.id}`)
       .then(res=> res.json())
       .then(body => { const tt = body;
           res.render('movie', {
               name: {tt}
           });
           console.log(tt)
       })
       .catch((e)=>{
            res.status(500).send(e);
       });

});

module.exports = router;