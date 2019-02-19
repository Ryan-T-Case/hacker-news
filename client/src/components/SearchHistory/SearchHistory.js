import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchHistory extends Component {
    render() {
        const { searches } = this.props;
        return(
            <div className="search-results">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-light">Search History</h1>
                    </div>
                </div>
                <div className="row m-3 bg-dark text-light border border-info">
                    <div className="col-12">
                        <p>Click on any of your previous search terms to conduct a retroactive search.</p>
                        {
                            searches.map(search => {
                                return (
                                    <button className="btn btn-info m-2" key={search.id}>{search.terms}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        searches: state.searches
    }
}

export default connect(mapStateToProps)(SearchHistory);