import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { loadTop10Action, loadGenresAction } from '../../services/redux/actions';
import './Top10.scss';

const Top10 = props => {
    useEffect(
        () => {
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES
            `).then(res => props.loadGenres("movie", res.data.genres)).catch(console.error);
            axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES
            `).then(res => props.loadGenres("tv", res.data.genres)).catch(console.error);
            //eslint-disable-next-line
            axios.get(`https://api.themoviedb.org/3/${props.match.params.itemType}/popular?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&page=1`).then(res => props.loadTop10(props.match.params.itemType, res.data.results)).catch(console.error);
        }
        //eslint-disable-next-line
        , [props.match.params.itemType]);
    if (props.match.params.itemType === 'movie') {
        console.log(props.movies);
        return (
            <div className={props.match.params.itemType}>
                {
                    props.movies.map(
                        movie => (
                            <div className="media" key={movie.id}>
                                <img src={"https://image.tmdb.org/t/p/w200" + movie.poster_path} className="mr-3" alt={`Poster of ${movie.title}`}></img>
                                <div className="media-body">
                                    <h4 className="mt-0">{movie.title}</h4>
                                    <h6 className="mt-0">Título original: {movie.original_title}</h6>
                                    <h6 className="mt-0">Fecha de lanzamiento: {movie.release_date}</h6>
                                    <h6 className="mt-0">Géneros:</h6>
                                    <ul>{movie.genre_ids.map(
                                        gId => (
                                            <li key={movie.id+gId}>
                                                {props.genres.filter(mGen => mGen.id === gId)[0].name}
                                            </li>
                                        )
                                    )}</ul>
                                    <h6 className="mt-0">Número de votos: {movie.vote_count}</h6>
                                    <h6 className="mt-0">Puntuación media: {movie.vote_average}</h6>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        );
    } else if (props.match.params.itemType === 'tv') {
        console.log(props.series);
        return (
            <div className={props.match.params.itemType}>
                {
                    props.series.map(
                        serie => (
                            <div className="media" key={serie.id}>
                                <img src={"https://image.tmdb.org/t/p/w200" + serie.poster_path} className="mr-3" alt={`Poster of ${serie.name}`}></img>
                                <div className="media-body">
                                    <h5 className="mt-0">{serie.name}</h5>
                                    <h6 className="mt-0">Título original: {serie.original_name}</h6>
                                    <h6 className="mt-0">Primera emisión: {serie.first_air_date}</h6>
                                    <h6 className="mt-0">Géneros:</h6>
                                    <ul>{serie.genre_ids.map(
                                        sgId => (
                                            <li key={serie.id+sgId}>
                                                {props.genres.filter(sGen => sGen.id === sgId)[0].name}
                                            </li>
                                        )
                                    )}</ul>
                                    <h6 className="mt-0">Número de votos: {serie.vote_count}</h6>
                                    <h6 className="mt-0">Puntuación media: {serie.vote_average}</h6>
                                    {serie.overview}
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    series: state.series,
    genres: state.genres
});

const mapDispatchToProps = (dispatch) => ({
    loadTop10: loadTop10Action(dispatch),
    loadGenres: loadGenresAction(dispatch)
});

const connectedTop10 = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Top10);

export default connectedTop10;