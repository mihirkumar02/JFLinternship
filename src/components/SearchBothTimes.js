import React, { Component } from 'react';
import {searchBothTimesById, fetchBothTimes} from '../actions/searchActions';
import {connect} from 'react-redux';
import SearchBothTimesMap from './SearchBothTimesMap';
import { NavLink } from 'react-router-dom';

class SearchBothTimes extends Component {

    handleChange = e => {
        this.props.searchBothTimesById(e.target.value);
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.fetchBothTimes(this.props.id);
    }

    render() {
        const {nightCoords = [], dayCoords = [], nightProperties, dayProperties, bothTimeDetails} = this.props;

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
                                (nightCoords.length) ? null :
                                <div className="storesearch">
                                    <div className="formbox">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                              <label htmlFor="storeId">Store ID</label>
                                              <input type="text" className="form-control" onChange={this.handleChange} placeholder="Enter store ID"/>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" class="btn btn-primary" onClick={() => {window.scrollTo(0,400);}}>Get Details</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            }

                            {
                                (nightCoords.length) ? <SearchBothTimesMap nightCoords={nightCoords} dayCoords={dayCoords} bothTimeDetails={bothTimeDetails} /> : null
                            }
                            {
                              (nightCoords.length) ?  
                              <div className="text-center topmargin">
                                  <div className="row">
                                      <div className="col-sm-6 text-right">
                                        <NavLink to="/editbothtimesmap" className="btn btn-danger">Edit Map</NavLink>
                                      </div>
                                      <div className="col-sm-6 text-left">
                                        <NavLink to="/editbothtimes" className="btn btn-warning">Edit Details</NavLink>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-sm-6 text-right">
                                          <div className="form-group">
                                              <label htmlFor="day">DAY </label>
                                              <input type="checkbox" id="dayCheck" value="day"/> 
                                          </div>
                                      </div>
                                      <div className="col-sm-6">
                                            <div className="form-group text-left">
                                                <label htmlFor="night">NIGHT </label>
                                                <input type="checkbox" id="nightCheck" value="night"/> 
                                            </div>
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
    nightProps: state.outlets.nightProperties,
    dayProps: state.outlets.dayProperties,
    nightCoords: state.outlets.nightGeometry,
    dayCoords: state.outlets.dayGeometry,
    bothTimeDetails: state.outlets.bothTimeDetails
});

export default connect(mapStateToProps, {searchBothTimesById, fetchBothTimes})(SearchBothTimes);


