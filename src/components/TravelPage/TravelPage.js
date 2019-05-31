import React from 'react';
import { connect } from 'react-redux'
import TravelSafeRating from '../TravelPageRating/SafeTravelRating'
import EnglishStarRatings from '../TravelPageRating/EnglishTravelRating'
import CostStarRatings from '../TravelPageRating/CostTravelRating'
import FriendStarRatings from '../TravelPageRating/FriendlyTravelRating'
import ReconmendStarRatings from '../TravelPageRating/ReconmendTravelPage'
import { Grid, Button } from '@material-ui/core'
import '../TravelPageRating/TravelReview.css'



class TravelPage extends React.Component {

   

    componentDidMount() {
        this.getExploreListReviews()

    }

    getExploreListReviews = () => {
        this.props.dispatch({ type: 'FETCH_REVIEW' })
    }



    reviewPageHandler =()=>{
        this.props.history.push("/addreview")

    }

    render() {
        // console.log('Travel Page State', this.state.id);
        // console.log('Match', match.params.id);

        return (
            <div>
                <h1>Travel Page</h1>
                {this.props.reviews.map((items => {
                    if (items.id === this.props.exploreId.id) {
                        return (
                            <div>
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
                                <div className="images">
                                    <div>
                                        <img src={items.image} />
                                    </div>
                                    <div>
                                        <h2> {items.city}, {items.country} </h2>
                                        <Button variant="contained" color="secondary" onClick={this.reviewPageHandler}>Review</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                }))}
            </div>
        )
    }
}

const mapReduState = (reduxState) => {
    return {
        explore: reduxState.exploreReducer,
        exploreId: reduxState.idReducer,
        reviews: reduxState.reviewReducer
    }
}

export default connect(mapReduState)(TravelPage);
