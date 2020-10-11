import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { loadTop10Action, loadGenresAction } from '../../services/redux/actions';
import Movie from '../Movie/Movie';
import Series from '../Series/Series';
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
        return (
            <div className={props.match.params.itemType}>
                {
                    props.movies.map(
                        movie => <Movie movie={movie}/>
                    )
                }
            </div>
        );
    } else if (props.match.params.itemType === 'tv') {
        return (
            <div className={props.match.params.itemType}>
                {
                    props.series.map(
                        serie => <Series serie={serie}/>
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