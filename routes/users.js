var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");

/* GET users listing. */
router.get("/:search-movie", function (req, res, next) {
  let search = req.params.search_movie;
  fetch(
    `http://www.omdbapi.com/?apikey=${process.env.key}&s=${search}&plot=full&v=2`
  )
    .then((res) => res.json())
    .then((body) => {
      const response = body;
      res.render("movie", {
        searched_movie: { response },
      });
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});
router.post("/", (req, res) => {
  let search = req.body.search_movie;
  fetch(
    `http://www.omdbapi.com/?apikey=${process.env.key}&s=${search}&plot=short&v=2`
  )
    .then((res) => res.json())
    .then((body) => {
      const response = body;
      res.render("movie", {
        searched_movie: { response },
      });
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

router.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  fetch(`http://www.omdbapi.com/?apikey=${process.env.key}&i=${req.params.id}`)
    .then((res) => res.json())
    .then((body) => {
      const response = body;
      res.render("movie", {
        name: { response },
      });
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

module.exports = router;
