import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { loadResultsAction } from '../../services/redux/actions';
import './SearchForm.scss';

const SearchForm = props => {
    const [name, setName] = useState('');
    const [adult, setAdult] = useState(false);
    const nameRef = useRef(null);
    const adultRef = useRef(null);
    useEffect(() => {
        nameRef.current.focus();
        setName('');
        adultRef.current.checked = false;
        setAdult(false);
    },
        //eslint-disable-next-line
        [props.itemType]);

    const handleNameChange = event => {
        setName(event.target.value);
    }
    const handleAdultChange = event => {
        setAdult(event.target.checked);
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios.get(`https://api.themoviedb.org/3/search/${props.itemType}?api_key=9b4d066eedd374b20d0be2192a5327ec&language=es-ES&query=${encodeURIComponent(name)}&page=1&include_adult=${adult}`).then(res => props.loadSearch(props.itemType, res.data.results)).catch(console.error);
    }
    return (
        <form className={`${props.itemType}Form`} onSubmit={handleSubmit}>
            <input id="name" type="text" name="name" ref={nameRef} value={name} placeholder={`¿Qué ${props.itemType === 'movie' ? 'película' : 'serie'} buscas?`} onChange={handleNameChange} />
            <input type="checkbox" id="adult" name="adult" ref={adultRef} value={adult} onChange={handleAdultChange} />
            <label htmlFor="adult">Adultos</label>
            <button type="submit">Enviar</button>
        </form>
    );

}

const mapDispatchToProps = (dispatch) => ({
    loadSearch: loadResultsAction(dispatch)
});

const connectedSearchResults = connect(
    null,
    mapDispatchToProps,
)(SearchForm);

export default connectedSearchResults;