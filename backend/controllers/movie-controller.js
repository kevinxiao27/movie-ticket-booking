import jwt from "jsonwebtoken";
import Movie from "../models/Movie";

export const addMovie = async (req, res, next) => {
  const extractedToken = req.headers.authorization.split(" ")[1]; // this is a bearer token
  if (!extractedToken && extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token Not Found" });
  }

  let adminId;
  // verify -- then decrypt the token ==> then store the admin id from the token
  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` });
    } else {
      adminId = decrypted.id;
      return;
    }
  });

  // create new movie
  const {
    title,
    description,
    actors,
    releaseDate,
    posterUrl,
    featured,
    bookings,
    admin,
  } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !description &&
    description.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Input" });
  }

  // defining movie
  let movie;
  try {
    movie = new Movie({
      title,
      description,
      releaseDate: new Date(`${releaseDate}`),
      featured,
      actors,
      admin: adminId,
      posterUrl,
      admin: adminId,
    });
    movie = await movie.save();
  } catch (err) {
    return console.log(err);
  }

  if (!movie) {
    return res.status(500).json({ message: "Request failed" });
  }

  return res.status(201).json({ movie });
};

export const getAllMovies = async (req, res, next) => {
  let movies;

  try {
    movies = await Movie.find();
  } catch (err) {
    console.log(err);
  }

  if (!movies) {
    return res.status(500).json({ message: "failed to get" });
  }

  return res.status(200).json({ movies });
};
