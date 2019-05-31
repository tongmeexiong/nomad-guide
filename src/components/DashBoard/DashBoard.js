import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import LogOutButton from '../LogOutButton/LogOutButton';

class Dashboard extends React.Component {

componentDidMount(){
  this.getUserReview()
}
  getUserReview = () =>{
    this.props.dispatch({type: 'FETCH_USER_REVIEWS'})
  }

  deleteHandler =()=>{
    console.log('Delete Click');
    
  }

  updateHandler =(items) =>{
    console.log('Update Click');
    this.props.history.push("/update")
    this.props.dispatch({type: 'UPDATE_REVIEW', payload: items})
    
  }

  render (){
    return(
      <div>
        <h1 id="welcome">
          Welcome to the Dashboard, {this.props.user.username}!
    </h1>
        <h2> Your reviews:</h2>
        <div>
          {this.props.userReview.map((items => {
            return (
              <div className="exploreCards" key={items.id} >
                <Card>
                  <CardActionArea>
                    <CardMedia>
                      <img src={items.image} alt="travel" />
                    
                    </CardMedia>
                    <CardContent className="cardBody">

                      <Typography gutterBottom variant="h5" component="h2">
                      </Typography>

                    </CardContent>
                  </CardActionArea>

                  <CardActions className="cardActions">
                    <Typography variant="body2" color="textPrimary" component="p" className="cardTitle">
                      {items.city}, {items.country}
                    </Typography>               
  </CardActions>
                  <button onClick = {()=>this.deleteHandler}>Delete</button>
                  <button onClick={()=>this.updateHandler(items)}>Update</button>

                </Card>
              </div>
            )
          }))}
        </div>
        {/* <LogOutButton className="log-in" /> */}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user,
  userReview: state.userReviewReducer
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Dashboard);
