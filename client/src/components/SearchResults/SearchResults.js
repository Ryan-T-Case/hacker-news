import React, { Component } from 'react';
import { connect } from 'react-redux';


class SearchResults extends Component {

    handleSearchResults = () => {
        if (this.props.results.length === 0) {
            return (
                <p className="text-info border border-info p-3">There are no results to display.</p>
            )
        } else {
            const { results } = this.props;
            return (
                results.map(result => {
                    return (
                        <p className="text-info" key={result.objectID}>{result.title}</p>
                    )
                })
            )
        }
    }

    render() {
        return(
            <div className="search-results">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-light">Search Results</h1>
                    </div>
                </div>
                <div className="row m-3">
                    <div className="col-12">
                        {this.handleSearchResults()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps)(SearchResults);