var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {

  fetch(`http://www.omdbapi.com/?apikey=API_KEY&s=man&type=movie`)
      .then(res=> res.json())
      .then(body => { const tt = body;
        res.render('index', {
          name: {tt}
        });
        console.log(tt)
      })
      .catch((e)=>{
        res.status(500).send(e);
      });
});
router.get('/movie/:id',(req, res)=>{
    let names = req.params.id;
    fetch(`http://www.omdbapi.com/?apikey=API_KEY&i=${names}&type=movie`)
        .then(res=> res.json())
        .then(body => { const tt = body;
            res.render('movie', {
                name: {tt},
                ser: names
            });
            console.log(tt)
        })
        .catch((e)=>{
            res.status(500).send(e);
        });
});

module.exports = router;
