import React from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Explore.css'

class Explore extends React.Component {

  // GET info from Database 
  componentDidMount() {
    this.getExploreList()
  }

  getExploreList = () => {
    this.props.dispatch({ type: 'FETCH_EXPLORE' })
    // this.props.dispatch({ type: 'AVERAGE_RATING', payload: id })
  }

  // Click image and send to Travel Page
  imageClickHandler = (id) => {
    console.log('Clicked Image', id);
    this.props.history.push(`/travelpage/${id}`)
  }

  render() {

    console.log('explore', this.props.explore.id);

    return (
      <div className="container">
        {this.props.explore.map((items => {
          return (
            <div className="exploreCards" key={items.id} >
              <Card >
                <CardActionArea>
                  <CardMedia onClick={() => this.imageClickHandler(items.id)}>
                    <img src={items.image} alt="travel" />
                    <Typography variant="body2" color="textPrimary" component="p" className="cardTitle">
                      {items.city}, {items.country}
                    </Typography>
                  </CardMedia>
                  <CardContent className="cardBody">

                    <Typography gutterBottom variant="h5" component="h2">
                    </Typography>

                  </CardContent>
                </CardActionArea>

                <CardActions className="cardActions">
                  Reconmmend Ratings:
          </CardActions>
              </Card>
            </div>
          )
        }))}
      </div>
    )
  }
}


const mapReduState = (reduxState) => {
  return {
    explore: reduxState.exploreReducer

  }
}

export default connect(mapReduState)(Explore);


