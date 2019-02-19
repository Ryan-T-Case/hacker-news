import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
                <a href="/" className="navbar-brand">Hacker News</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-0" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search for Articles" aria-label="Search"></input>
                                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;