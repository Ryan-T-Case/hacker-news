import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/searchActions';

class Navbar extends Component {
    state = {
       currentSearchInput: "" 
    }

    handleInputChange = (event) => {
        // Getting the value of the input from the form
        let newSearchInput = event.target.value;
    
        //And updating the component's state
        this.setState({
            currentSearchInput: newSearchInput
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        console.log(this.state.currentSearchInput);
        this.props.search(this.state.currentSearchInput);
        console.log(this.props)
    }

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
                            <form className="form-inline" onSubmit={this.handleFormSubmit}>
                                <input className="form-control mr-sm-2" type="search" onChange={this.handleInputChange} placeholder="Search for Articles" aria-label="Search"></input>
                                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searches: state.searches
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (terms) => { dispatch(search(terms)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);