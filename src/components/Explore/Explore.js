import React from 'react';
import {connect} from 'react-redux'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class Explore extends React.Component{

  componentDidMount(){
    this.getExploreList()
  }

  getExploreList =()=>{
    this.props.dispatch({type: 'FETCH_EXPLORE'})
  }
  render(){
    return(
      <p> Explore</p>
    )
  }
}

export default connect()(Explore);
