import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Search extends Component {
    render() {
        return (
            <div className="Landing">
                <div className="container">
                    <div className="searchpage">
                        <div className="row">
                            <div className="col-md-6 text-center">
                                <h4>Search Store by Id & Time</h4>
                                <Link to="/searchstore" class="btn btn-primary">Go</Link> 
                            </div>
                            <div className="col-md-6 text-center">
                                <h4>Search Store by Id</h4>
                                <Link to="/searchbothtimes" class="btn btn-primary">Go</Link> 
                            </div>
                        </div>
                        <div className="row topmargin">
                            <div className="col-md-6 text-center">
                                <h4>Search Store by Region</h4>
                                <Link to="/searchstorebyregion" class="btn btn-dark">Go</Link> 
                            </div>
                            <div className="col-md-6 text-center">
                                <h4>Search Store by Name</h4>
                                <Link to="/searchstorebyname" class="btn btn-dark">Go</Link> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
