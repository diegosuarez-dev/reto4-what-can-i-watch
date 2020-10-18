import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadDetailedSeriesAction, loadRecommendedSeriesAction } from '../../services/redux/actions';
import axios from "axios";
import { Link } from 'react-router-dom';
import './DetailedSeries.scss';

const DetailedSeries = props => {
    useEffect(
        () => {
            //eslint-disable-next-line
            axios.get(`https://api.themoviedb.org/3/tv/${props.match.params.seriesId}?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES`).then(res => props.loadDetailedSeries(res.data)).catch(console.error);
            axios.get(`https://api.themoviedb.org/3/tv/${props.match.params.seriesId}/recommendations?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&page=1
            `).then(res => props.loadRecommendedSeries(res.data.results)).catch(console.error);
            window.scrollTo(0, 0);
        }
        //eslint-disable-next-line
        , [props.match.params.seriesId]);
    return (
        <article className="detailedSeries">
            <header>
                <div className="leftHeader">
                    <h3>{props.detailedSeries.name}</h3>
                    <img src={"https://image.tmdb.org/t/p/w200" + props.detailedSeries.poster_path} alt={`Poster of ${props.detailedSeries.name}`}></img>
                </div>
                <div className="rightHeader">
                    <h6>Título original: {props.detailedSeries.original_name}</h6>
                    {props.detailedSeries.first_air_date
                        ? <h6>Fecha primera emisión: {props.detailedSeries.first_air_date}</h6>
                        : null}
                    {props.detailedSeries.last_air_date
                        ? <h6>Fecha última emisión: {props.detailedSeries.last_air_date}</h6>
                        : null}
                    {props.detailedSeries.last_episode_to_air?.episode_number && props.detailedSeries.last_episode_to_air?.season_number
                        ? <h6>Último episodio emitido: episodio {props.detailedSeries.last_episode_to_air?.episode_number} de la temporada {props.detailedSeries.last_episode_to_air?.season_number}</h6>
                        : null}
                    <h6>Géneros: </h6>
                    <ul>{props.detailedSeries.genres?.map(
                        gen => (
                            <li key={props.detailedSeries.id + gen.id}>
                                {gen.name}
                            </li>
                        )
                    )}</ul>
                    <h6>Número de votos: {props.detailedSeries.vote_count}</h6>
                    <h6>Puntuación media: <span>{props.detailedSeries.vote_average}</span></h6>
                </div>
            </header>
            <main>
                {props.detailedSeries.overview ? <h6>Visión general:</h6> : null}
                {props.detailedSeries.overview ? <p>{props.detailedSeries.overview}</p> : null}
                {props.detailedSeries.seasons ? <h6>Temporadas:</h6> : null}
                <ul>{props.detailedSeries.seasons?.map(
                    season => (
                        <li key={props.detailedSeries.id + season.id}>
                            {season.name}
                            <ul>
                                <li>Fecha estreno: {season.air_date}</li>
                                <li>Nº episodios: {season.episode_count}</li>
                            </ul>
                        </li>
                    )
                )}</ul>
            </main>
            <footer>
                <h4>También te podrían interesar...</h4>
                <div className="recommendations">
                    {
                        props.recommendedSeries.slice(0, 5).map(
                            recSeries => {
                                return (recSeries.poster_path ? <Link to={`/reto4-what-can-i-watch/tv/${recSeries.id}`} key={recSeries.id}>
                                    <h6>{recSeries.name}</h6>
                                    <img src={"https://image.tmdb.org/t/p/w200" + recSeries.poster_path} alt={`Poster of ${recSeries.name}`}></img>
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
    detailedSeries: state.detailedSeries,
    recommendedSeries: state.recommendedSeries
});

const mapDispatchToProps = (dispatch) => ({
    loadDetailedSeries: loadDetailedSeriesAction(dispatch),
    loadRecommendedSeries: loadRecommendedSeriesAction(dispatch)
});

const connectedDetailedSeries = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailedSeries);

export default connectedDetailedSeries;