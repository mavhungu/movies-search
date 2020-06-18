var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {

  fetch(`http://www.omdbapi.com/?apikey=ebb5d535&s=man&page=2`)
      .then(res=> res.json())
      .then(body => { const tt = body;
        res.render('index', {
          name: {tt}
        });
        //console.log(tt)
      })
      .catch((e)=>{
        res.status(500).send(e);
      });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
