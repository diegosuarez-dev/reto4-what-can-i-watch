import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import { loadResultsAction } from '../../services/redux/actions';
import './SearchForm.scss';

const SearchForm = props => {
    const [name, setName] = useState('');
    const [adult, setAdult] = useState(false);
    const nameRef = useRef(null);
    useEffect(() => {
        nameRef.current.focus();
    },
        []
    );
    

}

const mapDispatchToProps = (dispatch) => ({
    loadSearch: loadResultsAction(dispatch)
});

const connectedSearchResults = connect(
    null,
    mapDispatchToProps,
)(Search);

export default connectedSearchResults;