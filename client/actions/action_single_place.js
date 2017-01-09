
import fetch from 'isomorphic-fetch';

let listingIndex = 1;

export const rejectListing = (listing) => ({
  type: 'REJECT_PLACE',
  idx: listingIndex++,
  listing
});

export const toggleDetails = () => ({
  type: 'TOGGLE_DETAILS'
})

export const updateRouteInfo = (distance, duration) => ({
  type: 'UPDATE_ROUTE_INFO',
  routeInfo: {distance, duration}
})
