import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = props => {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1">¿Qué puedo ver?</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li class="nav-item dropdown">
                            {/*eslint-disable-next-line*/}
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Películas
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/movies/top10">Las 10 más populares</NavLink>
                                <div class="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/movies/search">Buscar películas</NavLink>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            {/*eslint-disable-next-line*/}
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Series
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/series/top10">Las 10 más populares</NavLink>
                                <div class="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/series/search">Buscar series</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;