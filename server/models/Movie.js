import mongoose from 'mongoose';
const { Schema } = mongoose;

const movieSchema = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    movieId: {
        type: Number,
        required: true
    },
    movieName: {
        type: String,
        required: true
    },
    genres: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema, 'likedMovies');
export default Movie;