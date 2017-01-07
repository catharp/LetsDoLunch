
const initialState = {
  isFetching: false,
  places: [],
  showDetails: false,
  singleListing: {
    categories: [[]], //this is to prevent the app from breaking on load
    //listingInfo component references singleListing.categories[0]
    //probably want a more robust solution later
    location: {
      coordinate: {
        latitude: 37.77493,
        longitude: -122.419415
      },
      display_address: []
    },
    routeInfo: {
      distance: '',
      duration: ''
    }
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_QUERY':
      return {...state, query: action.query, isFetching: true}

    case 'STOP_FETCHING':
      return {...state, isFetching: false}

    case 'UPDATE_PLACES':
      return {...state, places: action.places, singleListing: action.places[0]}

    case 'REJECT_PLACE':
      return {...state, singleListing: state.places[action.idx]}

    case 'TOGGLE_DETAILS':
      return {...state, showDetails: !state.showDetails}

    default:
      return state;
  }
}
