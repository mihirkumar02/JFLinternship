import React, { Component } from 'react';

class Signin extends Component {
    render() {
        return (
            <div className="Signin">
                <div className="container">
                    <div className="storeadd">
                        <div className="formbox">
                            <form action="/" method="">
                                <div className="form-group">
                                  <label for="email">Email</label>
                                  <div className="row">
                                      <div className="col-sm-11">
                                        <input type="email" className="form-control" placeholder="Enter Email ID.."/>
                                      </div>
                                      <div className="col-sm-1">
                                        <i className="fas fa-envelope form-icon"></i>
                                      </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label for="password">Password</label>
                                  <div className="row">
                                    <div className="col-sm-11">
                                      <input type="password" className="form-control" placeholder="Enter Password.."/>
                                    </div>
                                    <div className="col-sm-1">
                                      <i className="fas fa-key form-icon"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;
