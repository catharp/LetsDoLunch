
import fetch from 'isomorphic-fetch';

let listingIndex = 1;

export const rejectPlace = (listing) => ({
  type: 'REJECT_PLACE',
  idx: listingIndex++,
  listing
});

export const toggleDetails = () => ({
  type: 'TOGGLE_DETAILS'
})
