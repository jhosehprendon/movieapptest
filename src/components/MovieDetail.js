import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/movies';
import { Link } from 'react-router-dom';
import Spinner from './UI/Spinner';

class MovieDetail extends Component {

    componentDidMount() {
        this.props.onFetchMovieDetail(this.props.match.params.id)
        this.props.onFetchMovieImage(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.onclearImage()
    }

    render() {

        let movie = <Spinner />;

        if(!this.props.loading) {
            movie = (
                <div>
                    <Link to={'/'} className="waves-effect waves-light btn" style={styles.button}>Go back to list</Link>
                    <div className="card" style={styles.card}>
                        <div className="card-image">
                            <img 
                                src={'https://image.tmdb.org/t/p/w185/' + this.props.imagePath} 
                                alt=''
                            />
                            <span className="card-title">{this.props.movie.title}</span>
                        </div>
                        <div className="card-content">
                            <h3 style={styles.title}>{this.props.movie.title}</h3>
                            <p>{this.props.movie.tagline}</p>
                            <h3 style={styles.subTitle}>Overview:</h3>
                            <p style={styles.content}>{this.props.movie.overview}</p>
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div>
                {movie}
            </div>
        )
    }
}

const styles = {
    card: {
        width: '350px',
        display: 'block',
        margin: '50px auto'
    },
    title: {
        fontSize: '1.8rem',
        margin: '0 0 2px 0'
    },
    subTitle: {
        fontSize: '1.1rem',
        textAlign: 'left',
        marginBottom: '5px',
        fontWeight: 'bold'
    },
    content: {
        textAlign: 'left'
    },
    button: {
        marginTop: '30px',
    }
}


const mapStateToProps = state => {
    return {
        movie: state.movies.movieDetail,
        imagePath: state.movies.imagePath,
        loading: state.movies.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovieDetail: (id) => dispatch(actions.fetchMovieDetail(id)),
        onFetchMovieImage: (id) => dispatch(actions.fetchMovieImage(id)),
        onclearImage: () => dispatch(actions.clearImage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)