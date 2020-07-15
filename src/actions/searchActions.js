import {SEARCH_OUTLET_BY_ID, FETCH_OUTLET_BY_ID, FETCH_ALL_OUTLETS, FETCH_BOTH_TIMES, SEARCH_ID_FOR_BOTH_TIMES} from './types';

import axios from 'axios';

export const searchOutletById = (id, time) => dispatch => {
    dispatch({
        type: SEARCH_OUTLET_BY_ID,
        payload: {
            id: id,
            time: time
        }
    })
}


export const fetchOutletById = (id, time) => dispatch => {
    axios.get(`http://dev1.dominosindia.in:8086/locator-service/vi1/event/geojson/${time}/store/${id}`)
        .then(res => dispatch({
                type: FETCH_OUTLET_BY_ID,
                payload: res.data
            })
        )
        .catch(err => console.log("Error is: " + err));
}

export const fetchAllOutlets = () => dispatch => {
    axios.get(`http://dev1.dominosindia.in:8086/locator-service/ve2/stores`)
        .then(res => dispatch({
            type: FETCH_ALL_OUTLETS,
            payload: res.data
        }))
        .catch(err => console.log("Error is: " + err));
}


// Fetching both times by using ONLY the id

export const searchBothTimesById = id => dispatch => {
    dispatch({
        type: SEARCH_ID_FOR_BOTH_TIMES,
        payload: {
            id: id
        }
    })
}

export const fetchBothTimes = id => dispatch => {
    axios.get(`http://dev1.dominosindia.in:8086/locator-service/vi1/event/geojson/store/${id}`)
        .then(res => dispatch({
            type: FETCH_BOTH_TIMES,
            payload: res.data
        }))
}



