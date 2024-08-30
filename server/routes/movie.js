import express from 'express';
import { getLikedMoviesList, addMovieToLikedList, removeMovieFromLikedList } from '../controllers/movie.js';

const router = express.Router();

router.get('/get-liked-movies-list/:email', getLikedMoviesList);
router.post('/add-movie-to-liked-list', addMovieToLikedList);
router.delete('/delete-movie-from-liked-list/:objectId/:email', removeMovieFromLikedList);

export default router;