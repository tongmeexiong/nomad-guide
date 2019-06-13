import React from 'react';
import { connect } from 'react-redux';

// Material UI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Collapse from '@material-ui/core/Collapse';



const styles = theme => ({
  img: {
    height: '200px',
    width: '300px'
  },
  card: {
    margin: '20px',
    width: '300px'
  },
  locationName: {
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '0px',
    marginBottom: '7px',
    marginLeft: '20px'

  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(0deg)"
  },
})

class Favorites extends React.Component {

  state = {
    heartToggle: true,

  }

  // Delete Favorite List Item 
  toggleHeart = (id) => {
    this.props.dispatch({ type: 'DELETE_FAVORITE', payload: id })
  }

  displayHeart = () => {
    if (this.state.heartToggle) {
      return <FavoriteIcon style={{ color: "#d50000" }} />;
    } else {
      return <FavoriteIcon />;
    }
  };

  // Show favorite list on page
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_FAVORITE' })
  }

  // Send to travel page when image is clicked
  imageClickHandler = (id) => {
    console.log('Clicked Image', id);
    this.props.history.push(`/travelpage/${id}`)
  }


  render() {
    const style = this.props.classes

    return (
      <div>
        <h2> Your Favorites:</h2>
        <div>
          <Grid
            container
            direction="row"
            alignItems="center"
          >
            {this.props.favoriteList.map((items => {
              return (
                <Grid item xs={3} key={items.id} >
                  <div>
                    <Card className={style.card}>
                      <CardActionArea>
                        <CardMedia onClick={() => this.imageClickHandler(items.travel_page_id)}>
                          <img src={items.image} alt="travel" className={style.img} />
                        </CardMedia>
                        <CardContent className="cardBody">
                          <Typography gutterBottom variant="h5" component="h2">
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions className="cardActions">
                        <Typography variant="body2" color="textPrimary" component="p" className={style.locationName}>
                          <div>
                            {items.city}, {items.country}
                          </div>
                        </Typography>
                        <div>
                          <IconButton
                            aria-label="Add to favorites"
                            onClick={() => this.toggleHeart(items.travel_page_id)}
                          >
                            {this.displayHeart()}
                          </IconButton>
                        </div>
                      </CardActions>
                      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          <Typography variant="body2" color="textPrimary" component="p" className="cardTitle">
                            Review Comment: {items.experience_comment}
                            <div>
                            </div>
                          </Typography>
                        </CardContent>
                      </Collapse>
                    </Card>
                  </div>
                </Grid>
              )
            }))}
          </Grid>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user,
  favoriteList: state.getFavoriteReducer
});


export default withStyles(styles)(connect(mapStateToProps)(Favorites));
