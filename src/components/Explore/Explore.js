import React from 'react';
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Explore.css'

class Explore extends React.Component{

  componentDidMount(){
    this.getExploreList()
  }

  getExploreList =()=>{
    this.props.dispatch({type: 'FETCH_EXPLORE'})
  }

  imageClickHandler =(id)=>{
    console.log('Clicked Image', id);
    this.props.history.push("/travelpage")
    this.props.dispatch({type:'EXPLORE_ID_CLICK', payload: {id: id}})
  }
  
  render(){

    return(
      <div className="container">
    {this.props.explore.map((items=>{
      return(
        <div className="exploreCards" key={items.id} >
        <Card onClick={()=> this.imageClickHandler(items.id)}>
          <CardActionArea>
             <CardMedia>
              <img src={items.image} alt="travel" />
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
            <button>More Details</button>
          </CardActions>
        </Card>
        </div>
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

