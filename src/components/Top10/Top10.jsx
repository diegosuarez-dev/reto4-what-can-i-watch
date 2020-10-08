import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTop10Action } from '../../services/redux/actions';

const Top10 = props => {
    useEffect(
        () => {
            props.loadTop10(props.match.params.itemType);
        }
        ,[props.match.params.itemType]);
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
                                    <h5 className="mt-0">{movie.title}</h5>
                                    <h6 className="mt-0">Título original: {movie.original_title}</h6>
                                    <h6 className="mt-0">Fecha de lanzamiento: {movie.release_date}</h6>
                                    <h6 className="mt-0">Género: {}</h6>
                                    <h6 className="mt-0">Número de votos: {movie.vote_count}</h6>
                                    <h6 className="mt-0">Puntuación media: {movie.vote_average}</h6>
                                    {movie.overview}
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
                                    <h6 className="mt-0">Género: {}</h6>
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
    series: state.series
});

const mapDispatchToProps = (dispatch) => ({
    loadTop10: loadTop10Action(dispatch)
});

const connectedTop10 = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Top10);

export default connectedTop10;