var express = require("express");
var router = express.Router();

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.TMDB_API_KEY,
  },
};

router.get("/movies", (req, res) => {
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.json({movies: json.results})) // à updater
    .catch((err) => console.error(err));
});

module.exports = router;
