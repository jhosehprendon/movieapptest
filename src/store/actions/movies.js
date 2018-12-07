import * as actionTypes from './actionTypes';
import axios from '../../axios-movies';
import API_KEY from '../../API_KEY'


// Fetching movie lists
export const fetchMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        movies: movies
    };
};

export const fetchMoviesFail = (error) => {
    return {
        type: actionTypes.FETCH_MOVIES_FAIL,
        error: error
    };
};

export const fetchMovies = () => {
    return dispatch => {
        axios.get(`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then(response => {
                dispatch(fetchMoviesSuccess(response.data.results))
            })
            .catch(error => {
                dispatch(fetchMoviesFail(error))
            })
    }
}

// Fetching movie detail
export const fetchMovieDetailSuccess = (movieDetail) => {
    return {
        type: actionTypes.FETCH_MOVIE_DETAIL_SUCCESS,
        movieDetail: movieDetail
    };
};

export const fetchMovieDetailFail = (error) => {
    return {
        type: actionTypes.FETCH_MOVIE_DETAIL_FAIL,
        error: error
    };
};

export const fetchMovieDetail = (id) => {
    return dispatch => {
        axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                dispatch(fetchMovieDetailSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchMovieDetailFail(error))
            })
    }
}

// Fetching movie image
export const fetchMovieImageStart = () => {
    return {
        type: actionTypes.FETCH_MOVIE_IMAGE_START
    };
};

export const fetchMovieImageSuccess = (imagePath) => {
    return {
        type: actionTypes.FETCH_MOVIE_IMAGE_SUCCESS,
        imagePath: imagePath
    };
};

export const fetchMovieImageFail = (error) => {
    return {
        type: actionTypes.FETCH_MOVIE_IMAGE_FAIL,
        error: error
    };
};

export const fetchMovieImage = (id) => {
    return dispatch => {
        dispatch(fetchMovieImageStart());
        axios.get(`/movie/${id}/images?api_key=${API_KEY}`)
            .then(response => {
                dispatch(fetchMovieImageSuccess(response.data.backdrops[0].file_path))
            })
            .catch(error => {
                dispatch(fetchMovieImageFail(error))
            })
    }
}

