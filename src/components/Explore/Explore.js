import React from 'react';
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Explore.css'

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
      <div className="exploreCard">
    {this.props.explore.map((items=>{
      return(
        
        <Card key={items.id} className="card">
          <CardActionArea>
            
             <CardMedia>
              <img src={items.image} alt="travel image" />
              <Typography variant="body2" color="textPrimary" component="p" className="cardTitle">
                {items.city}, {items.country}
              </Typography>
            </CardMedia>
            <CardContent className="cardBody">

              <Typography gutterBottom variant="h5" component="h2">
              </Typography>
              {/* <Typography variant="body2" color="textPrimary" component="p">
                {items.city}, {items.country}
              </Typography> */}
            </CardContent>
          </CardActionArea>


          <CardActions className="cardActions">
            Ratings: 
          </CardActions>
        </Card>

      )
    }))}
      </div>
    )
  }
}


const mapReduState = (reduxState) =>{
  return{
    explore: reduxState.exploreReducer
}
}

export default connect(mapReduState)(Explore);

// export default withStyles(styles)(HigherOrderComponent);

