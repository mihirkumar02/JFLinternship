import React, { Component } from 'react';
import {searchBothTimesById, fetchBothTimes} from '../actions/searchActions';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

class EditBothTimeDetails extends Component {

    /*
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
    */

    handleChange = e => {

    }

    render() {
        const {bothTimeDetails, nightProps, dayProps} = this.props;

        return (
            <div className="Edit">
                <div className="container-fluid">
                    <div className="text-center">
                        <div className="formboxedit">
                          <form>
                              <div className="form-group">
                                <label htmlFor="storeName">Store Name</label>
                                <input type="text" className="form-control" onChange={this.handleChange} value={bothTimeDetails.name} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="storePhone">Store Phone Number</label>
                                <input type="number" maxLength="10" className="form-control" value={bothTimeDetails.phoneNumber} />
                              </div>
                              <hr/>
                                <div className="form-group">
                                  <label htmlFor="storeName">Day Timing</label>
                                  <div className="row">
                                      <div className="col-sm-6">
                                        <label htmlFor="storeName">Shift 1</label>
                                        <div className="row">
                                          <div className="col-sm-6">
                                            <label htmlFor="storeName">Start Time</label>
                                            <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={dayProps.timeRangeMinOfDay[0].startTime} />
                                          </div>
                                          <div className="col-sm-6">
                                            <label htmlFor="storeName">End Time</label>
                                            <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={dayProps.timeRangeMinOfDay[0].endTime} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <label htmlFor="storeName">Shift 2</label>
                                        <div className="row">
                                          <div className="col-sm-6">
                                            <label htmlFor="storeName">Start Time</label>
                                            <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={dayProps.timeRangeMinOfDay[1].startTime} />
                                          </div>
                                          <div className="col-sm-6">
                                            <label htmlFor="storeName">End Time</label>
                                            <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={dayProps.timeRangeMinOfDay[1].endTime} />
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                                <hr/>
                                <div className="form-group">
                                  <label htmlFor="storeName">Night Timing</label>
                                  <div className="row">
                                      <div className="col-sm-6">
                                        <label htmlFor="storeName">Shift 1</label>
                                        <div className="row">
                                          <div className="col-sm-6">
                                            <label htmlFor="storeName">Start Time</label>
                                            <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={nightProps.timeRangeMinOfDay[0].startTime} />
                                          </div>
                                          <div className="col-sm-6">
                                            <label htmlFor="storeName">End Time</label>
                                            <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={nightProps.timeRangeMinOfDay[0].endTime} />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <label htmlFor="storeName">Shift 2</label>
                                        <div className="row">
                                          <div className="col-sm-6">
                                            <label htmlFor="storeName">Start Time</label>
                                            <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={nightProps.timeRangeMinOfDay[1].startTime} />
                                          </div>
                                          <div className="col-sm-6">
                                            <label htmlFor="storeName">End Time</label>
                                            <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={nightProps.timeRangeMinOfDay[1].endTime} />
                                          </div>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              <div className="form-group">
                                <label htmlFor="storeAddress">Store Address</label>
                                <input type="text" className="form-control" value={bothTimeDetails.address} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="storeCity">Store City</label>
                                <input type="text" className="form-control" value={bothTimeDetails.storeCity} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="storeRegion">Store Region</label>
                                <input type="text" className="form-control" value={bothTimeDetails.region} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="storeBaseRegion">Store Base Region</label>
                                <input type="text" className="form-control" value={bothTimeDetails.baseRegion} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="storePostalCode">Store Postal Code</label>
                                <input type="text" className="form-control" value={bothTimeDetails.postalCode} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="storeId">Store Night Message</label>
                                <input type="text" className="form-control" value={bothTimeDetails.nightMsg} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="storeId">Store Day Message</label>
                                <input type="text" className="form-control" value={bothTimeDetails.dayMsg} />
                              </div>
                              <div className="text-center">
                                  <button type="submit" class="btn btn-primary">Update Details</button>
                              </div>
                          </form>
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

export default connect(mapStateToProps, {searchBothTimesById, fetchBothTimes})(EditBothTimeDetails);



