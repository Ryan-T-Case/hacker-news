import React, { Component } from 'react';

class SearchResults extends Component {
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
                        <p className="text-info border border-info p-3">There are no results to display.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;