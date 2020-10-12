import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadDetailedMovieAction, loadRecommendedMoviesAction } from '../../services/redux/actions';
import axios from "axios";
import { Link } from 'react-router-dom';
import './DetailedMovie.scss';

const DetailedMovie = props => {
    useEffect(
        () => {
            //eslint-disable-next-line
            axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES
            `).then(res => props.loadDetailedMovie(res.data)).catch(console.error);
            axios.get(`https://api.themoviedb.org/3/movie/${props.match.params.movieId}/recommendations?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&page=1
            `).then(res => props.loadRecommendedMovies(res.data.results)).catch(console.error);
        }
        //eslint-disable-next-line
        , [props.match.params.movieId]);
    return (
        <article className="detailedMovie">
            <header>
                <div className="leftHeader">
                    <h3>{props.detailedMovie.title}</h3>
                    <img src={"https://image.tmdb.org/t/p/w200" + props.detailedMovie.poster_path} alt={`Poster of ${props.detailedMovie.title}`}></img>
                </div>
                <div className="rightHeader">
                    <h6>Título original: {props.detailedMovie.original_title}</h6>
                    <h6>Fecha de lanzamiento: {props.detailedMovie.release_date}</h6>
                    <h6>Géneros: </h6>
                    <ul>{props.detailedMovie.genres?.map(
                        gen => (
                            <li key={props.detailedMovie.id + gen.id}>
                                {gen.name}
                            </li>
                        )
                    )}</ul>
                    <h6>Duración: {props.detailedMovie.runtime} minutos</h6>
                    <h6>Número de votos: {props.detailedMovie.vote_count}</h6>
                    <h6>Puntuación media: <span>{props.detailedMovie.vote_average}</span></h6>
                </div>
            </header>
            <main>
                {props.detailedMovie.overview ? <h6>Visión general:</h6> : null}
                {props.detailedMovie.overview ? <p>{props.detailedMovie.overview}</p> : null}                
            </main>
            <footer>
                <h4>También te podrían interesar...</h4>
                <div className="recommendations">
                {
                    props.recommendedMovies.slice(0, 5).map(
                        recMovie => {
                            return (recMovie.poster_path ? <Link to={`/movie/${recMovie.id}`} key={recMovie.id}>
                                <h6>{recMovie.title}</h6>
                                <img src={"https://image.tmdb.org/t/p/w200" + recMovie.poster_path} alt={`Poster of ${recMovie.title}`}></img>
                            </Link> : null)
                        }
                    )
                }
                </div>
            </footer>
        </article>
    )
}

const mapStateToProps = (state) => ({
    detailedMovie: state.detailedMovie,
    recommendedMovies: state.recommendedMovies
});

const mapDispatchToProps = (dispatch) => ({
    loadDetailedMovie: loadDetailedMovieAction(dispatch),
    loadRecommendedMovies: loadRecommendedMoviesAction(dispatch)
});

const connectedDetailedMovie = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailedMovie);

export default connectedDetailedMovie;