import React from 'react';

const listingDetail = (listing) => {
  return (
    <div>
      <h4 className="col-sm-6">Distance: {listing.distance}</h4>
      <h4 className="col-sm-6">Travel Time: {listing.duration}</h4>
      <br />
      <h4 className="col-sm-6">Phone: {listing.display_phone}</h4>
      <h4 className="col-sm-6">Address: {listing.location.display_address}</h4>
    </div>
  )
}


export default listingDetail;
