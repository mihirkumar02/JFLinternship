const initialState = {
    id: '',
    time:'',
    foundOutletByIdGeometry: {},
    foundOutletByIdDetails: {},
    foundOutletByIdProperties: {},
    nightProperties:{},
    dayProperties:{},
    nightGeometry: {},
    dayGeometry: {},
    bothTimeDetails:{},
    allOutlets: []
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SEARCH_OUTLET_BY_ID':
            return {
                ...state,
                id: action.payload.id,
                time: action.payload.time
            };
        case 'FETCH_OUTLET_BY_ID':
            return{
                ...state,
                foundOutletByIdGeometry: action.payload.feature.geometry.coordinates,
                foundOutletByIdDetails:  action.payload.storeDetails,
                foundOutletByIdProperties: action.payload.feature.properties
            };
        case 'FETCH_ALL_OUTLETS':
            return{
                ...state,
                allOutlets: action.payload
            };
        case 'SEARCH_ID_FOR_BOTH_TIMES':
            return{
                ...state,
                id: action.payload.id
            }
        case 'FETCH_BOTH_TIMES':
            return{
                ...state,
                nightProperties: action.payload.features.NIGHT.properties,
                dayProperties: action.payload.features.DAY.properties,
                nightGeometry: action.payload.features.NIGHT.geometry.coordinates,
                dayGeometry: action.payload.features.DAY.geometry.coordinates,
                bothTimeDetails: action.payload.storeDetails
            };
        default:
            return state;
    }
}