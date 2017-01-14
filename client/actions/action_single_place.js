import { REJECT_PLACE, UPDATE_LISTING, TOGGLE_DETAILS, FETCH_DETAILS, FINISH_DETAILS } from './actions';
import _ from 'lodash';

export const rejectListing = (listing) => ({
  type: REJECT_PLACE,
  listing
})

export const throttle_rejectListing = _.throttle(rejectListing, 10000, {trailing: false})

export const updateListing = (listing) => ({
  type: UPDATE_LISTING,
  listing
})

export const toggleDetails = () => ({
  type: TOGGLE_DETAILS
})

export const fetchVenueDetails = () => ({
  type: FETCH_DETAILS
})

export const finishVenueDetails = (bool) => ({
  type: FINISH_DETAILS,
  hasDetails: bool
})

export const addToBlacklist = (listing) => (
  dispatch => {
    let url = '/db/userblacklist';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => console.log('statusCode: ', data.status))
    .then(() => dispatch(throttle_rejectListing()));
  }
)

export const throttle_blacklist = _.throttle(addToBlacklist, 10000, {trailing: false})

export const addToWishlist = (listing) => (
  dispatch => {
    let url = '/db/userwishlist';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => console.log('statusCode: ', data.status))
    .then(() => dispatch(throttle_rejectListing()));
  }
)

export const throttle_wishlist = _.throttle(addToWishlist, 10000, {trailing: false})

export const addToVisited = (listing) => (
  dispatch => {
    let url = '/db/uservisited';
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(listing),
      headers: {'Content-type': 'application/json'},
      credentials: 'same-origin'
    })
    .then(data => console.log('statusCode: ', data.status))
  }
)


