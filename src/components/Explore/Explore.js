import React from 'react';
import { connect } from 'react-redux'
import EuropeCard from './ExploreEurope'
import ExploreAsia from './ExploreAsia'
import ExploreCentral from './ExploreCentral'

class Explore extends React.Component {

  // GET info from Database 
  componentDidMount() {
    this.getExploreList()
  }

  // GET all travel location on page. 
  getExploreList = () => {
    this.props.dispatch({ type: 'FETCH_EXPLORE' })
    this.props.dispatch({ type: 'FETCH_EXPLORE_EUROPE' })
    this.props.dispatch({ type: 'FETCH_EXPLORE_CENTRAL' })
  }


  render() {
    return (
      <div>
        <div>
          <h1>Guide for the Modern Traveler</h1>
        </div>
        <div>
          <ExploreAsia />
        </div>
        <EuropeCard />
        <div>
          <ExploreCentral />
        </div>
      </div>
    )
  }
}

export default connect()(Explore);


