
export const setQuery = function(query) {
  return {
    type: 'SET_QUERY',
    query
  }
}


export const receivePlaces = function(query, json) {
  console.log('in receive places!')
  return {
    type: 'RECEIVE_PLACES',
    query,
    places: json.businesses
  }
}


//NOT USING until $ and time can be filtered
export const filterPlaces = function(query, places) {
  console.log('in filter places!')
  return {
    type: 'FILTER_PLACES',
    query,
    places
  }
}
