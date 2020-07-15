import React, { Component } from 'react';
import {searchOutletById, fetchOutletById} from '../actions/searchActions';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

class EditDetails extends Component {

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
        const {outletDetails, outletProperties} = this.props;

        return (
            <div className="Edit">
                <div className="container-fluid">
                        
                    <div className="formboxedit">
                        <div className="text-center">
                            <h4>{outletProperties.timeTag}</h4>
                        </div>
                      <form>
                          <div className="form-group">
                            <label htmlFor="storeName">Store Name</label>
                            <input type="text" className="form-control" onChange={this.handleChange}value={outletDetails.name} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="storePhone">Store Phone Number</label>
                            <input type="number" maxLength="10" className="form-control" value={outletDetails.phoneNumber} />
                          </div>
                          <hr/>
                            <div className="form-group">
                              <label htmlFor="storeName">Store Timing</label>
                              <div className="row">
                                  <div className="col-sm-6">
                                    <label htmlFor="storeName">Shift 1</label>
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <label htmlFor="storeName">Start Time</label>
                                        <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={outletProperties.timeRangeMinOfDay[0].startTime} />
                                      </div>
                                      <div className="col-sm-6">
                                        <label htmlFor="storeName">End Time</label>
                                        <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={outletProperties.timeRangeMinOfDay[0].endTime} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <label htmlFor="storeName">Shift 2</label>
                                    <div className="row">
                                      <div className="col-sm-6">
                                        <label htmlFor="storeName">Start Time</label>
                                        <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={outletProperties.timeRangeMinOfDay[1].startTime} />
                                      </div>
                                      <div className="col-sm-6">
                                        <label htmlFor="storeName">End Time</label>
                                        <input type="text" className="form-control" max="23" min="00" onChange={this.handleChange} value={outletProperties.timeRangeMinOfDay[1].endTime} />
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                            <hr/>
                          <div className="form-group">
                            <label htmlFor="storeAddress">Store Address</label>
                            <input type="text" className="form-control" value={outletDetails.address} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="storeCity">Store City</label>
                            <input type="text" className="form-control" value={outletDetails.storeCity} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="storeRegion">Store Region</label>
                            <input type="text" className="form-control" value={outletDetails.region} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="storeBaseRegion">Store Base Region</label>
                            <input type="text" className="form-control" value={outletDetails.baseRegion} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="storePostalCode">Store Postal Code</label>
                            <input type="text" className="form-control" value={outletDetails.postalCode} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="storeId">Store Night Message</label>
                            <input type="text" className="form-control" value={outletDetails.nightMsg} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="storeId">Store Day Message</label>
                            <input type="text" className="form-control" value={outletDetails.dayMsg} />
                          </div>
                          <div className="text-center">
                              <button type="submit" class="btn btn-primary">Update Details</button>
                          </div>
                      </form>
                    </div> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    id: state.outlets.id,
    time: state.outlets.time,
    outletDetails: state.outlets.foundOutletByIdDetails,
    outletProperties: state.outlets.foundOutletByIdProperties
});

export default connect(mapStateToProps, {searchOutletById, fetchOutletById})(EditDetails);



