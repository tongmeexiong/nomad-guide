import React from 'react';
import { connect } from 'react-redux'
import TravelSafeRating from '../TravelPageRating/SafeTravelRating'
import EnglishStarRatings from '../TravelPageRating/EnglishTravelRating'
import CostStarRatings from '../TravelPageRating/CostTravelRating'
import FriendStarRatings from '../TravelPageRating/FriendlyTravelRating'
import ReconmendStarRatings from '../TravelPageRating/ReconmendTravelPage'
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Star, StarBorder } from '@material-ui/icons';



const styles = {
    rating: {
        height: '30px',
        width: '300px',
        marginRight: '100px',
        marginTop: '-630px',
        fontSize: '14.7px'
    },
    image: {
        marginLeft: '50px',
        height: '500px',
        width: '900px',
        marginTop: '10px'
    },
  
}



class TravelPage extends React.Component {

    state={
        heartToggle: false
    }
    // Send Match ID to GET Route for specific information. Reviews and Travel Destinations.  
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TRAVEL_PAGE_REVIEWS', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_TRAVEL_PAGE_DETAILS', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_FAVORITE' })

    }

    toggleHeart = (id) =>{
        console.log('Heart', id);
        
        if(!this.state.heartToggle){
            this.setState({
                heartToggle: true
            })
            this.props.dispatch({ type: 'POST_FAVORITE', payload: {travel_page_id: id}})
        } else {
            this.setState({
                heartToggle: false
            })
            this.props.dispatch({ type: 'DELETE_FAVORITE', payload: id })

        }
    }

    displayHeart =(id)=>{
        if (this.state.heartToggle) {
            return <FavoriteIcon style={{ color: "#d50000" }} />;
        } else {
            return <FavoriteIcon />;
        }
    };
   
// checkHeart =(id)=>{
//     if (this.props.match.params.id === id){
//         this.setState({
//             heartToggle: true
//         })
//     } else {
//         this.setState({
//             heartToggle: false
//         })
//     }
// }
    // Set Travel ID into Reducer and go to Review Page 
    reviewPageHandler = (id) => {
        this.props.dispatch({ type: 'SET_TRAVEL_ID', payload: this.props.match.params.id })
        this.props.history.push(`/addreview/${id}`)
    }

    render() {
        const style = this.props.classes
        console.log('Checking', this.props.favorite.travel_page_id);

        return (
            <div>
                
                <div>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >

                    {this.props.travelDetail.map((detail => {
                        return (
                            <div  key={detail.id}>
                                <div>
                                    <img src={detail.image} alt="travel location" className={style.image} />
                                </div>
                                <div>
                                    <div>
                                        <h2> {detail.city}, {detail.country} <IconButton
                                            aria-label="Add to favorites"
                                            onClick={() => this.toggleHeart(detail.id)}
                                        >
                                            {this.displayHeart()}
                                        </IconButton> </h2>
                                    </div>
                                    <div>
                                    
                                    </div>
                                    </div>
                                    <div>
                                    <Button variant="contained" color="secondary" onClick={()=>this.reviewPageHandler(detail.id)}>Review</Button>
                               
                                </div>
                            </div>
                        )
                    }))}
                 
                </Grid>

                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-end"
                >
                    {this.props.travelReviews.map((items => {
                        return (
                            <div key={items.id}>

                                <Grid item xs={6} className={style.rating}>
                                    <h2>Saftey</h2>
                                    <TravelSafeRating rating={items} />
                                    {/* </Grid>
                                <Grid item xs={6}> */}
                                    <h2>English</h2>
                                    <EnglishStarRatings rating={items} />
                                    {/* </Grid>
                                <Grid item xs={6}> */}
                                    <h2>Cost</h2>
                                    <CostStarRatings rating={items} />
                                    {/* </Grid>
                                <Grid item xs={6}> */}
                                    <h2>Friendliness</h2>
                                    <FriendStarRatings rating={items} />
                                    {/* </Grid>
                                <Grid item xs={6}> */}
                                    <h2>Recommend</h2>
                                    <ReconmendStarRatings rating={items} />
                                </Grid>
                            </div>

                        )
                    }))}
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapReduState = (reduxState) => {
    return {
        travelReviews: reduxState.travelPageReviewReducer,
        travelDetail: reduxState.travelPageDetailReducer,
        favorite: reduxState.getFavoriteReducer
    }
}

export default withStyles(styles)(connect(mapReduState)(TravelPage));
