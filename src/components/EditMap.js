import React, { Component } from 'react';
import {searchOutletById, fetchOutletById} from '../actions/searchActions';
import {connect} from 'react-redux';
import MapToEdit from './MapToEdit';
import { NavLink } from 'react-router-dom';

class EditMap extends Component {

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
                            <NavLink to="/searchstore" className="active">
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
                          <MapToEdit outletCoords={outletCoords} outletDetails={outletDetails} outletProperties={outletProperties}/>
                          <div className="text-center topmargin">
                            <div className="row">
                                <div className="col-sm-6 text-right">
                                  <NavLink to="/editdetails" className="btn btn-danger">Edit Details</NavLink>
                                </div>
                                <div className="col-sm-6 text-left">
                                  <NavLink to="/savemap" className="btn btn-success">Save Changes</NavLink>
                                </div>
                            </div>
                          </div> 
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

export default connect(mapStateToProps, {searchOutletById, fetchOutletById})(EditMap);


