var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {

  fetch(`http://www.omdbapi.com/?apikey=ebb5d535&s=man&type=movie`)
      .then(res=> res.json())
      .then(body => { const tt = body;
        res.render('index', {
          name: {tt}
        });
      })
      .catch((e)=>{
        res.status(500).send(e);
      });
});

module.exports = router;
