import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { loadGenresAction } from '../../services/redux/actions';
import Movie from '../Movie/Movie';
import Series from '../Series/Series';
import SearchForm from '../SearchForm/SearchForm';
import './SearchResults.scss';

const Search = props => {
    useEffect(
        () => {
            axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES
            `).then(res => props.loadGenres("movie", res.data.genres)).catch(console.error);
            axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES
            `).then(res => props.loadGenres("tv", res.data.genres)).catch(console.error);
        }
        //eslint-disable-next-line
        , []);
    if (props.match.params.itemType === 'movie') {
        return (
            <section>
                <SearchForm itemType={props.match.params.itemType}/>
                <div className={props.match.params.itemType}>
                    {
                        props.movies.map(
                            movie => <Movie movie={movie} key={movie.id} />
                        )
                    }
                </div>
            </section>
        );
    } else if (props.match.params.itemType === 'tv') {
        return (
            <section>
                <SearchForm itemType={props.match.params.itemType}/>
                <div className={props.match.params.itemType}>
                    {
                        props.series.map(
                            serie => <Series serie={serie} key={serie.id} />
                        )
                    }
                </div>
            </section>
        );
    } else {
        return (
            <section>
                <SearchForm itemType={props.match.params.itemType}/>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    series: state.series,
    genres: state.genres
});

const mapDispatchToProps = (dispatch) => ({
    loadGenres: loadGenresAction(dispatch)
});

const connectedSearchResults = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);

export default connectedSearchResults;