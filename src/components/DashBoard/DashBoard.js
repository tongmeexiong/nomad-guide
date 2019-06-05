import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Rating from 'react-rating';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

// import './DashBoard.css'


const styles = {
  img: {
    height: '200px',
    width: '300px'
  },
  card: {
    margin: '20px',
    // height: '400px',
    width: '300px'
  },
  locationName: {
    fontSize: '20px',
    textAlign: 'center',
    marginTop: '7px',
    marginBottom: '-40px'

  }
}

class Dashboard extends React.Component {

  // GET User's Reviews
  componentDidMount() {
    this.getUserReview()
  }
  getUserReview = () => {
    this.props.dispatch({ type: 'FETCH_USER_REVIEWS' })
  }

// Delete Review
  deleteHandler = (id) => {
    console.log('Delete Click', id);
    this.props.dispatch({ type: 'DELETE_REVIEW', payload: id })
  }

  // Update Review & Send to Update page 
  updateHandler = (id) => {
    console.log('Update Click', id);
    this.props.history.push(`/update/${id}`)
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
        <h1 id="welcome">
          Welcome to the Dashboard, {this.props.user.username}!
    </h1>
        <h2> Your reviews:</h2>
        <div>
          <Grid
            container
            direction="row"
            alignItems="center"
          >
          {this.props.userReview.map((items => {
            return (
              <Grid item xs={3} key={items.id} >

              <div>
                  <Card className={style.card}>
                  <CardActionArea>
                    <CardMedia onClick={() => this.imageClickHandler(items.travel_page_id)}>
                        <img src={items.image} alt="travel" className={style.img}/>

                    </CardMedia>
                    <CardContent className="cardBody">

                      <Typography gutterBottom variant="h5" component="h2">
                      </Typography>

                    </CardContent>
                  </CardActionArea>

                  <CardActions className="cardActions">
                    <Typography variant="body2" color="textPrimary" component="p" className="cardTitle">
                      <div>
                        {items.city}, {items.country}
                      </div>
                      Review Comment: {items.experience_comment}
                      <div>
                        {/* <Collapse className="collapse"> */}
                        <Rating
                          initialRating={items.reconmend_rating}
                          start={0}
                          stop={5}
                          readonly
                        />
                        {/* </Collapse> */}
                      </div>
                    </Typography>
                  </CardActions>
                  <button onClick={() => this.deleteHandler(items.id)}>Delete</button>
                  <button onClick={() => this.updateHandler(items.travel_page_id)}>Update</button>

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
  userReview: state.userReviewReducer
});


export default withStyles(styles)(connect(mapStateToProps)(Dashboard));
