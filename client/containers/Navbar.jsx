import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

import Lucky from '../containers/Lucky.jsx';

import { setQuery, receivePlaces, filterPlaces } from '../actions/action_get_places';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">

      <div className="col-md-1"><Lucky feelingLucky={this.props.feelingLucky}/></div>


        <ul>
          <li><a href="/dog">Dog</a></li>
          <li><a href="/recommend">Recommend</a></li>
          <li><a href="/search">Search</a></li>
        </ul>
      </nav>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  feelingLucky: () => {
    dispatch(setQuery('Gold Club'))
    browserHistory.push('/recommend')
  }
})

Navbar = connect(
  null,
  mapDispatchToProps
)(Navbar)

export default Navbar
