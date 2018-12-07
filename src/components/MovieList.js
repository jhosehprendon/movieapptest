import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import * as actions from '../store/actions/movies';

class MovieList extends Component {
    
    componentDidMount () {
        this.props.onFetchMovieList()
    }

    render() {
        const list = this.props.movies.map(movie => {
            return (
                <div key={movie.id}>
                    <MovieItem  id={movie.id} title={movie.title}/>
                </div>
            )
        })

        return (
            <div>
                <h5>Most Popular Movies 2018</h5>
                {list}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovieList: () => dispatch(actions.fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)