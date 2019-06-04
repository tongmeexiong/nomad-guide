import React from 'react';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import Rating from 'react-rating';
import UpdateSafeStarRatings from './UpdateSafeRating'
import UpdateEnglishStarRatings from './UpdateEnglishRating'
import UpdateCostStarRatings from './UpdateCostRating'
import UpdateFriendlyStarRatings from './UpdateFriendlyRating'
import UpdateReconmmendStarRatings from './UpdateReconmmendRating'




class UpdateReview extends React.Component {



 

    componentDidMount() {
        this.getExploreListReviews()
        this.props.dispatch({ type: 'GET_UPDATE_TRAVEL_REVIEW', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'SET_TRAVEL_ID', payload: this.props.match.params.id })
    }

    getExploreListReviews = () => {
        this.props.dispatch({ type: 'FETCH_REVIEW', payload: this.props.exploreId })
    }



    submitPageHandler = (id) => {
        console.log('Submit');
        this.props.dispatch({ type: 'PUT_REVIEW', payload: {id: id, rating: this.props.rating }})
        alert(' Thank you for the edit!')
        this.props.history.push("/home")
    }

  

    // clickSafeRatingHandler = (event) => {
    //     console.log('Safe Clickerrrrr', event);
    //     // this.props.dispatch({ type: 'SET_SAFTEY_RATING', payload: event })
    //     this.setState({
    //         saftey_rating: event
    //     })

    // }

    // clickEnglishRatingHandler = (event) => {
    //     console.log('English Clickerrrrr', event);
    //     this.props.dispatch({ type: 'SET_ENGLISH_RATING', payload: event })
    // }

    // clickCostRatingHandler = (event) => {
    //     console.log('Cost Clickerrrrr', event);
    //     this.props.dispatch({ type: 'SET_COST_RATING', payload: event })

    // }

    // clickFriendlyRatingHandler = (event) => {
    //     console.log('Friendly Clickerrrrr', event);
    //     this.props.dispatch({ type: 'SET_FRIENDLY_RATING', payload: event })

    // }

    // clickReconmendRatingHandler = (event) => {
    //     console.log('Reconmend Clickerrrrr', event);
    //     this.props.dispatch({ type: 'SET_RECONMEND_RATING', payload: event })

    // }


    experienceHandler = (event) => {
        console.log('experience', event.target.value);
        this.props.dispatch({ type: 'SET_EXPERIENCE_COMMENT', payload: event.target.value })

        
    }

    render() {
        console.log('ID Update', this.props.match.params.id);
        // console.log('tester', this.props.reduxState.ratingeReducer);
        


        return (
            <div>
                {this.props.updateReview.map((items => {
                    return (
                        <div key={items.id}>
                            <h1>Edit Your Review </h1>
                            <h2>{items.city}, {items.country}</h2>

                            <div>
                                <h3> ADD CoWorking Spaces? </h3>
                                <input type="text" placeholder="CoWorking Space Name" />
                                <input type="text" placeholder="CoWorking Space Address" />
                                <input type="text" placeholder="City" />
                                <input type="text" placeholder="Country" />
                                <input type="text" placeholder="Zip Code" />
                            </div>
                            <div>
                                <input onChange ={this.experienceHandler} className="experienceBox" type="text" placeholder="Experience"
                                />
                            </div>
                            <div>
                                <h2>Safety</h2>
                                <UpdateSafeStarRatings rating={items} />
                                    
                                <h2>English</h2>
                                <UpdateEnglishStarRatings rating={items}/>
                                <h2>Cost</h2>
                                <UpdateCostStarRatings rating={items}/>
                                <h2>Friendliness</h2>
                                <UpdateFriendlyStarRatings rating={items}/>
                                <h2>Reconmmend</h2>
                                <UpdateReconmmendStarRatings rating={items}/>
                            </div>
                            <div>
                                <Button variant="contained" color="secondary" onClick={() => this.submitPageHandler(items.travel_page_id)}>Submit</Button>
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
        explore: reduxState.exploreReducer,
        reviews: reduxState.reviewReducer,
        userReview: reduxState.updateReviewReducer,
        updateReview: reduxState.updateReviewGetReducer,
        rating: reduxState.ratingeReducer,
    }
}

export default connect(mapReduState)(UpdateReview);
