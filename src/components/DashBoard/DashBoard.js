import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Rating from 'react-rating';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



// Expand
import IconButton from "@material-ui/core/IconButton";
import { Grid, Button } from '@material-ui/core'
import { Star, StarBorder } from '@material-ui/icons'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';

// import './DashBoard.css'


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
    marginTop: '-50px',
    marginBottom: '-40px',
    textAlign: "center",
    marginLeft: "30px"

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
  rating: {
    marginLeft: '-5px'
  },
  buttonDelete : {
    margin: '10px',
    padding: '10px',
    marginLeft: '250px',
    margin: theme.spacing(1),
    '&:hover': {
      color: 'red',
    }
  },
  buttonEdit: {
        margin: '10px',
        marginTop:'-52px',
    margin: theme.spacing(1),
    '&:hover': {
      color: 'DeepSkyBlue ',
    }
  }
})


class Dashboard extends React.Component {


  state = {
    expanded: false

  }

  expandHandleClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }
  // GET User's Reviews
  componentDidMount() {
    this.getUserReview()
  }
  getUserReview = () => {
    this.props.dispatch({ type: 'FETCH_USER_REVIEWS' })
  }

  // Delete Review
  deleteHandler = (id) => {
 swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(() => {
          this.props.dispatch({ type: 'DELETE_REVIEW', payload: id })
        swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      swal.fire(
        'Deleted!',
      )
      
    })
    // console.log('Delete Click', id);
    // this.props.dispatch({ type: 'DELETE_REVIEW', payload: id })
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
                            <div>
                              <Typography variant="body2" color="textPrimary" component="p" >
                                Comment: "{items.experience_comment}"
                          </Typography>
                            </div>
                          </div>
                        </Typography>

                        <IconButton
                          className={clsx(style.expand, {
                            [style.expandOpen]: this.state.expanded,
                          })}
                          onClick={this.expandHandleClick}
                          aria-expanded={this.state.expanded}
                          aria-label="Show more"
                        >
                          <ExpandMoreIcon />
                        </IconButton>
                      </CardActions>

                      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                          Safety:
                            <div>
                            <Rating
                              initialRating={items.safety_rating}
                              start={0}
                              emptySymbol={<StarBorder />}
                              fullSymbol={<Star />}
                              stop={5}
                              readonly
                              className={style.rating}
                            />
                          </div>
                          English
                          <div>
                            <Rating
                              initialRating={items.english_rating}
                              start={0}
                              emptySymbol={<StarBorder />}
                              fullSymbol={<Star />}
                              stop={5}
                              readonly
                              className={style.rating}
                            />
                          </div>
                          Cost
                          <div>
                            <Rating
                              initialRating={items.cost_rating}
                              start={0}
                              emptySymbol={<StarBorder />}
                              fullSymbol={<Star />}
                              stop={5}
                              readonly
                              className={style.rating}
                            />
                          </div>
                          Friendliness
                          <div>
                            <Rating
                              initialRating={items.friendly_rating}
                              start={0}
                              emptySymbol={<StarBorder />}
                              fullSymbol={<Star />}
                              stop={5}
                              readonly
                              className={style.rating}
                            />
                          </div>
                          Recommend 
                          <div>
                            <Rating
                              initialRating={items.reconmend_rating}
                              start={0}
                              emptySymbol={<StarBorder />}
                              fullSymbol={<Star />}
                              stop={5}
                              readonly
                              className={style.rating}
                            />
                          </div>             
                        </CardContent>
                      </Collapse>
                      <div>
                      <div className={style.buttonDelete}>
                        <DeleteIcon onClick={() => this.deleteHandler(items.id)} className={style.iconHover} />
                        </div>
                        
                      <div className={style.buttonEdit}>
                          <EditIcon className={style.iconHoverEdit} onClick={() => this.updateHandler(items.travel_page_id)}/>
                      </div>
                      </div>
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
