import Movie from '../models/Movie.js';

export const getLikedMoviesList = async (req, res) => {
    try {
        const { email } = req.params;
        const movies = await Movie.find({ userEmail: email });
        res.send({ status: 'success', data: movies });
    } catch (error) {
        res.send({ status: 'error', message: error.message });
    }
}

export const addMovieToLikedList = async (req, res) => {
    try {
        const { userEmail, movieId, movieName, genres, image } = req.body;
        await Movie.create({
            userEmail,
            movieId,
            movieName,
            genres,
            image
        });

        res.send({ status: 'success', message: 'Movie Added Successfully To The Liked List.' });
    } catch (error) {
        res.send({ status: 'error', message: error.message });
    }
}

export const removeMovieFromLikedList = async (req, res) => {
    try {
        const { objectId, email } = req.params;
        if (email) {
            await Movie.findByIdAndDelete({ _id: objectId });
            const remainingMovies = await Movie.find({ userEmail: email });
            res.send({ status: 'success', data: remainingMovies });
        }
    } catch (error) {
        res.send({ status: 'error', message: error.message });
    }
}