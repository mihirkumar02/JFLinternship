import React, { Component } from 'react';
import {fetchAllOutlets} from '../actions/searchActions';
import {connect} from 'react-redux';

class AllStores extends Component {

    componentDidMount(){
        this.props.fetchAllOutlets();
    }

    render() {
    
        return (
            <div className="Search">
                <div className="container">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    allOutlets: state.outlets.allOutlets    
});

export default connect(mapStateToProps, {fetchAllOutlets})(AllStores);
