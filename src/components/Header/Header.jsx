import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">¿Qué puedo ver?</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/reto4-what-can-i-watch/" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            {/*eslint-disable-next-line*/}
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Películas
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/reto4-what-can-i-watch/movie/top10">Las 10 más populares</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/reto4-what-can-i-watch/movie/search">Buscar películas</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            {/*eslint-disable-next-line*/}
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Series
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/reto4-what-can-i-watch/tv/top10">Las 10 más populares</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" to="/reto4-what-can-i-watch/tv/search">Buscar series</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;