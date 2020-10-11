import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Movie = props => {

    return (
        <Link to={`/movie/${props.movie.id}`}> 
            <div className="media">
                <img src={"https://image.tmdb.org/t/p/w200" + props.movie.poster_path} className="mr-3" alt={`Poster of ${props.movie.title}`}></img>
                <div className="media-body">
                    <h4 className="mt-0">{props.movie.title}</h4>
                    <h6 className="mt-0">Título original: {props.movie.original_title}</h6>
                    <h6 className="mt-0">Fecha de lanzamiento: {props.movie.release_date}</h6>
                    <h6 className="mt-0">Géneros:</h6>
                    <ul>{props.movie.genre_ids.map(
                        gId => (
                            <li key={props.movie.id + gId}>
                                {props.genres.filter(mGen => mGen.id === gId)[0].name}
                            </li>
                        )
                    )}</ul>
                    <h6 className="mt-0">Número de votos: {props.movie.vote_count}</h6>
                    <h6 className="mt-0">Puntuación media: {props.movie.vote_average}</h6>
                    <p>{
                        props.movie.overview.length > 140
                            ? props.movie.overview.substring(0, props.movie.overview.indexOf(" ", 139)) + '... '
                            : props.movie.overview
                    }</p>
                </div>
            </div>
        </Link>
    )
}

const mapStateToProps = (state) => ({
    genres: state.genres
});

const connectedMovie = connect(
    mapStateToProps,
    null,
)(Movie);

export default connectedMovie;