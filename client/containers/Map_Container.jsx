import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeBounds, changeOrigin } from '../actions/map_action';
import { updateRouteInfo } from '../actions/action_single_place';
import Map_Component from '../components/Map_Component.jsx';

class Map_Container extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return <Map_Component {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return state.map
}

const mapDispatchToProps = (dispatch) => ({
  changeBounds: (newBounds) => {dispatch(changeBounds(newBounds))},
  changeOrigin: (newOrigin) => {dispatch(changeOrigin(newOrigin))},
  updateRouteInfo: (distance, duration) => {dispatch(updateRouteInfo(distance, duration))}
})

Map_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map_Container)

export default Map_Container
