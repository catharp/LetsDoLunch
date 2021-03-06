import React, { Component } from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-bootstrap-star-rating';
import { Glyphicon, Image } from 'react-bootstrap';
import RejectButton from './Recommend_subcomponents/rejectPlaceButton.jsx';
import AcceptButton from './Recommend_subcomponents/acceptPlaceButton.jsx';
import CurrentListing from './Recommend_subcomponents/listingInfo.jsx';
import ListingDetail from './Recommend_subcomponents/listingDetail.jsx';
import Map from '../containers/Map_Container.jsx';


export default class Recommend extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let { changeDestination } = this.props;
    let { latitude, longitude } = this.props.singleListing.location.coordinate;
    changeDestination({lat: latitude, lng: longitude});
  }

  componentDidUpdate() {
    let { changeDestination } = this.props;
    let { latitude, longitude } = this.props.singleListing.location.coordinate;
    changeDestination({lat: latitude, lng: longitude});
  }

  render() {
    let { singleListing, rejectPlace, showDetail, detailVisible, changeDestination} = this.props;
    return (
      <div>
        <div className='col-md-7'>
          <Map />
        </div>
        <div className='col-md-5 single-rec'>
          <CurrentListing onClick={() => showDetail()} {...singleListing} />
          { detailVisible ? null : <h5 onClick={() => showDetail()}>more info</h5> }
          { detailVisible ? <ListingDetail {...singleListing} /> : null }
          <div>
            <RejectButton onClick={() => rejectPlace(singleListing)} />
            <AcceptButton onClick={() => alert('Enjoy your lunch!')} />
          </div>
        </div>
      </div>
    )
  }
}
