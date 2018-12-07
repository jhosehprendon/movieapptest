import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: [],
    error: '',
    movieDetail: {},
    imagePath: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.movies
            }
        case actionTypes.FETCH_MOVIES_FAIL:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.FETCH_MOVIE_DETAIL_SUCCESS:
            return {
                ...state,
                movieDetail: action.movieDetail
            }
        case actionTypes.FETCH_MOVIE_DETAIL_FAIL:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.FETCH_MOVIE_IMAGE_SUCCESS:
            return {
                ...state,
                imagePath: action.imagePath
            }
        case actionTypes.FETCH_MOVIE_IMAGE_FAIL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer