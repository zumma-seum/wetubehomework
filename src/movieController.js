import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear
  } from "./db";
  
  export const home = (req, res) => {
    return res.render("index.js")
  };
  export const movieDetail = (req, res) => {};
  export const filterMovie = (req, res) => {};
  