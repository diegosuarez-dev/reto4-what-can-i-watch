import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Series = props => {

    return (
        <Link to={`/tv/${props.serie.id}`}>
            <div className="media">
                <img src={"https://image.tmdb.org/t/p/w200" + props.serie.poster_path} className="mr-3" alt={`Poster of ${props.serie.name}`}></img>
                <div className="media-body">
                    <h5 className="mt-0">{props.serie.name}</h5>
                    <h6 className="mt-0">Título original: {props.serie.original_name}</h6>
                    <h6 className="mt-0">Primera emisión: {props.serie.first_air_date}</h6>
                    <h6 className="mt-0">Géneros:</h6>
                    <ul>{props.serie.genre_ids?.map(
                        sgId => (
                            <li key={props.serie.id + sgId}>
                                {props.genres.filter(sGen => sGen.id === sgId)[0].name}
                            </li>
                        )
                    )}</ul>
                    <h6 className="mt-0">Número de votos: {props.serie.vote_count}</h6>
                    <h6 className="mt-0">Puntuación media: {props.serie.vote_average}</h6>
                    <p>{
                        props.serie.overview.length > 140
                            ? props.serie.overview.substring(0, props.serie.overview.indexOf(" ", 139)) + '... '
                            : props.serie.overview
                    }</p>
                </div>
            </div>
        </Link>
    )
}

const mapStateToProps = (state) => ({
    genres: state.genres
});

const connectedSeries = connect(
    mapStateToProps,
    null,
)(Series);

export default connectedSeries;