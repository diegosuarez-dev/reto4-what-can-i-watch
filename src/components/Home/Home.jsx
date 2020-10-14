import React from 'react';
import logo from '../../img/blue_long_1.svg';
import './Home.scss';

const Home = props => {
    return (
        <article id="hArticle">
            <h1 id="hH1">¿Qué puedo ver?</h1>
            <h4 id="hH4">La web con toda la información sobre tus pelis y series favoritas</h4>
            <h6 id="hH6">Powered by</h6>
            <img id="hImg" src={logo} alt="Logo The Movie DB"/>
        </article>
    )
}

export default Home;