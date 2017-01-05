
let listingIndex = 1;

export const rejectListing = (listing) => ({
  type: 'REJECT_PLACE',
  idx: listingIndex++,
  listing
});

export const toggleDetail = () => ({
  type: 'SHOW_DETAIL'
})

export const updateRouteInfo = (distance, duration) => ({
  type: 'UPDATE_ROUTE_INFO',
  routeInfo: {distance, duration}
})
