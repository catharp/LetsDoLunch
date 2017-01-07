
const initialState = {
  isFetching: false,
  places: [],
  showDetail: false,
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
    case 'FETCH_PLACES':
      return Object.assign({}, state, {isFetching: true})

    case 'RECEIVE_PLACES':
    console.log('action.places', action.places)
      return Object.assign({}, state, {
        isFetching: false,
        places: action.places,
        singleListing: action.places[0]
      })

//NOT USING until $ and time can be filtered
    case 'FILTER_PLACES':
      console.log('action.places / filter', action.places)
      return Object.assign({}, state, {
        isFetching: false,
        places: action.places,
        singleListing: action.places[0]
      })

    case 'REJECT_PLACE':
      return Object.assign({}, state, {
        singleListing: state.places[action.idx]
        //nothing happens when we run out of places...
      })

    case 'SHOW_DETAIL':
      return Object.assign({}, state, {showDetail: !state.showDetail})

    case 'UPDATE_PHOTO':
      return Object.assign({}, state, {singleListing: {...state.singleListing, image_url: action.photo}})

    case 'UPDATE_ROUTE_INFO':
      return Object.assign({}, state, {singleListing: {...state.singleListing, ...action.routeInfo}})

    default:
      return state;
  }
}
