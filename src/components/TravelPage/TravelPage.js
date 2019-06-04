import React from 'react';
import { connect } from 'react-redux'
import TravelSafeRating from '../TravelPageRating/SafeTravelRating'
import EnglishStarRatings from '../TravelPageRating/EnglishTravelRating'
import CostStarRatings from '../TravelPageRating/CostTravelRating'
import FriendStarRatings from '../TravelPageRating/FriendlyTravelRating'
import ReconmendStarRatings from '../TravelPageRating/ReconmendTravelPage'
import { Grid, Button } from '@material-ui/core'




class TravelPage extends React.Component {

    // Send Match ID to GET Route for specific information. Reviews and Travel Destinations.  
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TRAVEL_PAGE_REVIEWS', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_TRAVEL_PAGE_DETAILS', payload: this.props.match.params.id })
    }

    // Set Travel ID into Reducer and go to Review Page 
    reviewPageHandler = () => {
        this.props.dispatch({ type: 'SET_TRAVEL_ID', payload: this.props.match.params.id })
        this.props.history.push("/addreview:id")
    }

    render() {

        return (
            <div>
                <h1>Travel Page</h1>
                {this.props.travelReviews.map((items => {
                    return (
                        <div key={items.id}>

                            <Grid
                                container
                                direction="column-reverse"
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs={6}>
                                    <h2>Saftey</h2>
                                    <TravelSafeRating rating={items} />
                                </Grid>
                                <Grid item xs={6}>
                                    <h2>English</h2>
                                    <EnglishStarRatings rating={items} />
                                </Grid>
                                <Grid item xs={6}>
                                    <h2>Cost</h2>
                                    <CostStarRatings rating={items} />
                                </Grid>
                                <Grid item xs={6}>
                                    <h2>Friendliness</h2>
                                    <FriendStarRatings rating={items} />
                                </Grid>
                                <Grid item xs={6}>
                                    <h2>Recommend</h2>
                                    <ReconmendStarRatings rating={items} />
                                </Grid>
                            </Grid>
                        </div>

                    )
                }))}

                {this.props.travelDetail.map((detail => {
                    return (
                        <div className="images" key={detail.id}>
                            <div>
                                <img src={detail.image} alt="travel location" />
                            </div>
                            <div>
                                <h2> {detail.city}, {detail.country} </h2>
                                <Button variant="contained" color="secondary" onClick={this.reviewPageHandler}>Review</Button>
                            </div>
                        </div>
                    )
                }))}
            </div>

        )
    }
}

const mapReduState = (reduxState) => {
    return {
        travelReviews: reduxState.travelPageReviewReducer,
        travelDetail: reduxState.travelPageDetailReducer,
    }
}

export default connect(mapReduState)(TravelPage);
