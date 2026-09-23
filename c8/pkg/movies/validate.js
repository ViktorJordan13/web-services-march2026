const { Validator } = require("node-input-validator");

// Schema for creating a new movie (MoviePost)
const MoviePost = {
  title: "required|string",
  genre: "required|string",
  releaseYear: "required|integer|min:1900|max:" + new Date().getFullYear(),
  // You can add more validation rules for other properties if needed
};

// Schema for updating an existing movie (MovieUpdate)
const MovieUpdate = {
  title: "string",
  genre: "string",
  releaseYear: "integer|min:1900|max:" + new Date().getFullYear(),
  // You can add more validation rules for other properties if needed
};

const validate = async (data, schema) => {
  let v = new Validator(data, schema);
  let e = v.check();
  if (!e) {
    throw {
      code: 400,
      error: v.errors,
    };
  }
};

module.exports = {
  validate,
  MoviePost, // Export the MoviePost schema
  MovieUpdate, // Export the MovieUpdate schema
};
