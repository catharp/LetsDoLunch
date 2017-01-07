import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

// instantiate google maps objects to display directions
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
var map, placesService, previousDestination;

export default class Map_Component extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    let { query, origin, destination, isFetching } = this.props;

    if (isFetching) {
      // update listing photo from google maps' places library
      let query = {
        location: new google.maps.LatLng(destination.lat, destination.lng),
        radius: '1000',
        type: 'restaurant'
      }
      placesService.nearbySearch(query, (places, status) => {
        if (status !== 'OK') return;

        updatePhoto(places[0].photos[0].getUrl({maxWidth: 400, maxHeight: 400}));
      })

      // display directions from origin to destination on map
      request = {
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        travelMode: 'WALKING'
      };
      directionsService.route(request, (response, status) => {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
          let {distance, duration} = response.routes[0].legs[0];

          //update route info in listing details
          updateRouteInfo(distance.text, duration.text);
        }
      });
    }
  }

  render() {
    let { zoom, center, changeBounds, origin, changeOrigin, destination } = this.props;
    return (
      <GoogleMapLoader
        containerElement={<div className='map' />}
        googleMapElement={
          <GoogleMap
            ref={googleMap => {
              if (googleMap) {
                // on load, identify map element for directions renderer to target
                directionsDisplay.setMap(map = googleMap.props.map)
                placesService = new google.maps.places.PlacesService(map)
              }
            }}
            zoom={zoom}
            center={center}
            onBoundsChanged={() => {
              // update map state whenever a zoom or drag event occurs
              changeBounds({
                zoom: map.zoom,
                center: {lat: map.center.lat(), lng: map.center.lng()}
              })
            }}
            onClick={ // disable origin selecting when directions are already being displayed
              click => destination ? null : changeOrigin({lat: click.latLng.lat(), lng: click.latLng.lng()})}
          >
            { // disable map markers when directions are being displayed
              destination ?
                null :
                <Marker
                key={origin.lat + '' + origin.lng}
                defaultPosition={origin}
                />
            }
          </GoogleMap>
        }
      />
    );
  }
}
