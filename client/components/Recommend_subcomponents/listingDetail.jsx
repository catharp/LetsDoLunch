import React from 'react';

const listingDetail = (listing) => {
  return (
    <div>
      <h4>Distance: {listing.distance}, {listing.duration} away</h4>
      <h4>Phone: {listing.display_phone}</h4>
      <h4>Address: {listing.location.display_address}</h4>
    </div>
  )
}


export default listingDetail;
