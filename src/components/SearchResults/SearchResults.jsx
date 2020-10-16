import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { loadGenresAction, loadResultsAction } from '../../services/redux/actions';
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
            props.loadResults(props.match.params.itemType, []);
        }
        //eslint-disable-next-line
        , []);
    if (props.match.params.itemType === 'movie') {
        return (
            <section>
                <SearchForm itemType={props.match.params.itemType} />
                <div className={props.match.params.itemType}>
                    {props.movies.length === 0 && props.querySent
                        ?
                        <div className="notFound">
                            <h1>Vaya... ¡no hemos encontrado lo que buscas!</h1>
                            <h3>Puede que no la tengamos pero... ¿podrías asegurarte de que has escrito bien el título?</h3>
                        </div>
                        :
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
                <SearchForm itemType={props.match.params.itemType} />
                <div className={props.match.params.itemType}>
                    {props.series.length === 0 && props.querySent
                        ?
                        <div className="notFound">
                            <h1>Vaya... ¡no hemos encontrado lo que buscas!</h1>
                            <h3>Puede que no la tengamos pero... ¿podrías asegurarte de que has escrito bien el título?</h3>
                        </div>
                        :
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
                <SearchForm itemType={props.match.params.itemType} />
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    series: state.series,
    querySent: state.querySent,
    genres: state.genres
});

const mapDispatchToProps = (dispatch) => ({
    loadGenres: loadGenresAction(dispatch),
    loadResults: loadResultsAction(dispatch)
});

const connectedSearchResults = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);

export default connectedSearchResults;