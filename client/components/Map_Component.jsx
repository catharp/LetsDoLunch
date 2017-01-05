import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();
var map;

export default class Map_Component extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    let { origin, destination, updateRouteInfo } = this.props;
    if (destination) {
      let request = {
        origin: new google.maps.LatLng(origin.lat, origin.lng),
        destination: new google.maps.LatLng(destination.lat, destination.lng),
        travelMode: 'WALKING'
      };
      directionsService.route(request, (response, status) => {
        if (status == 'OK') {
          directionsDisplay.setDirections(response);
          let {distance, duration} = response.routes[0].legs[0];
          updateRouteInfo(distance.text, duration.text);
        }
      });
    }
  }

  render() {
    let { zoom, center, changeBounds, origin, changeOrigin, destination } = this.props;
    return (
      <div>
        <GoogleMapLoader
          containerElement={<div className='map' />}
          googleMapElement={
            <GoogleMap
              ref={googleMap => {
                if (googleMap) {
                  directionsDisplay.setMap(map = googleMap.props.map)
                }
              }}
              zoom={zoom}
              center={center}
              onBoundsChanged={() => {
                changeBounds({
                  zoom: map.zoom,
                  center: {lat: map.center.lat(), lng: map.center.lng()}
                })
              }}
              onClick={click => destination ? null : changeOrigin({lat: click.latLng.lat(), lng: click.latLng.lng()})}
            >
              {destination ?
                null :
                <Marker
                key={origin.lat + '' + origin.lng}
                defaultPosition={origin}
                />
              }
            </GoogleMap>
          }
        />
      </div>
    );
  }
}
