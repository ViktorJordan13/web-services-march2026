const Movie = require("../pkg/movies/"); 

const { 
  validate,
   MoviePost,
  MovieUpdate 
} = require("../pkg/movies/validate");

// Handler for getting all movies
const getAllMovies = async (req, res) => {
  
  try {
    const movies = await Movie.getAll(req.auth.id);
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

// Handler for getting a single movie by ID
const getSingleMovie = async (req, res) => {
  try {
    const movie = await Movie.getSingle(req.auth.id, req.params.id);
    if (!movie) {
      res.status(404).json({ error: "Movie not found!" });
    } else {
      res.status(200).json(movie);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

// Handler for creating a new movie
const createMovie = async (req, res) => {
  try {
    await validate(req.body, MoviePost);
    if(!req.auth.id){
      return res.status(400).send("Unathorized action!");
  } 
    const data = {
      ...req.body,
      account_id: req.auth.id
    };
    const movie = await Movie.create(data);
    return res.status(201).send(movie);
  } catch (error) {
    console.error(error);
    res.status(error.code || 500).json({ error: error.error || "Internal Server Error!" });
  }
};

const updateMovie = async (req, res) => {
  try {
    await validate(req.body, MovieUpdate);
    if(!req.auth.id){
      return res.status(400).send("Unathorized action!");
    }
    const data = {
        ...req.body,
        account_id: req.auth.id
    };
    await Movie.update(req.params.id, data);
    return res.status(204).send("Update succesfull!");
  } catch (error) {
    console.error(error);
    res.status(error.code || 500).json({ error: error.error || "Internal Server Error!" });
  }
};

const removeMovie = async (req, res) => {
  try{
    await Movie.remove(req.params.id);
    return res.status(200).send("Delete succesful!");
  }catch(err){
      console.error(err);
      return res.status(500).send("Internal server error");
  }
};

module.exports = {
  getAllMovies,
  getSingleMovie,
  createMovie,
  updateMovie,
  removeMovie,
};
