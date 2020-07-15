import React, { Component } from 'react';
import {searchOutletById, fetchOutletById} from '../actions/searchActions';
import {connect} from 'react-redux';
import SearchByIdMap from './SearchByIdMap';
import { NavLink } from 'react-router-dom';

class SearchById extends Component {

    handleIdChange = e => {
        window.$sendId = e.target.value;
        this.props.searchOutletById(window.$sendId, window.$sendTime);
    }

    handleTimeChange = e => {
        window.$sendTime = e.target.value;
        this.props.searchOutletById(window.$sendId, window.$sendTime);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchOutletById(this.props.id, this.props.time);
    }

    render() {
        const {outletCoords = [], outletDetails, outletProperties} = this.props;

        return (
            <div className="Search">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 leftonmap">
                            <NavLink to="/searchstore">
                                <div className="searchoption">
                                    <div className="text-center">
                                        <h3>Search Store by Id & Time</h3>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/searchstorebyname">
                                <div className="searchoption">
                                    <div className="text-center">
                                        <h3>Search Store by Name</h3>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="/searchstorebyregion">
                                <div className="searchoption">
                                    <div className="text-center">
                                        <h3>Search Store by Region</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-9 col-sm-12 rightonmap">
                            {
                                (outletCoords.length) ? null :
                                <div className="storesearch">
                                    <div className="formbox">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                              <label htmlFor="storeId">Store ID</label>
                                              <input type="text" className="form-control" onChange={this.handleIdChange} placeholder="Enter store ID"/>
                                            </div>
                                            <div className="form-group">
                                              <label htmlFor="time">Time</label>
                                              <input type="text" className="form-control" onChange={this.handleTimeChange} placeholder="Day/Night"/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" class="btn btn-primary" onClick={() => {window.scrollTo(0,400);}}>Get Details</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="formbox topmargin">
                                        <div className="text-center">
                                            <h4>Search By Id Only</h4>
                                        </div>
                                        <hr/>
                                        <div className="text-center">
                                            <NavLink to="/searchbothtimes" className="btn btn-success">Search By Id</NavLink>
                                        </div>
                                    </div>
                                </div>
                            }   
                            

                            {
                                (outletCoords.length) ? <SearchByIdMap outletCoords={outletCoords} outletDetails={outletDetails} outletProperties={outletProperties}/> : null
                            }
                            {
                              (outletCoords.length) ?  
                              <div className="text-center topmargin">
                                  <div className="row">
                                      <div className="col-sm-6 text-right">
                                        <NavLink to="/editmap" className="btn btn-danger">Edit Map</NavLink>
                                      </div>
                                      <div className="col-sm-6 text-left">
                                        <NavLink to="/editdetails" className="btn btn-warning">Edit Details</NavLink>
                                      </div>
                                  </div>
                              </div> 
                              : null
                            } 
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    id: state.outlets.id,
    time: state.outlets.time,
    outletCoords: state.outlets.foundOutletByIdGeometry,
    outletDetails: state.outlets.foundOutletByIdDetails,
    outletProperties: state.outlets.foundOutletByIdProperties
});

export default connect(mapStateToProps, {searchOutletById, fetchOutletById})(SearchById);

