import React from 'react';
import { connect } from 'react-redux'

import { Button } from '@material-ui/core'
import Rating from 'react-rating';




class UpdateReview extends React.Component {

   

    state ={
        comment: "hello",
        saftey_rating: this.props.updateReview.safety_rating,
        english_rating: this.props.updateReview.english_rating,
        cost_rating: 0,
        friendly_rating: 0,
        reconmend_rating: 0
    }

    componentDidMount() {
        this.getExploreListReviews()
        this.props.dispatch({ type: 'GET_UPDATE_TRAVEL_REVIEW', payload: this.props.match.params.id })
    }

    getExploreListReviews = () => {
        this.props.dispatch({ type: 'FETCH_REVIEW', payload: this.props.exploreId })
    }

   

    submitPageHandler = () => {
        alert('Thank you for the review!')
    }

    travelPickHandler = (id) => {
        console.log('Option ID', id);

    }

    clickSafeRatingHandler =(event) =>{
        console.log('Safe Clickerrrrr', event);
        this.setState({
            saftey_rating: event
        })
    }

     clickEnglishRatingHandler =(event) =>{
        console.log('Safe Clickerrrrr', event);
        this.setState({
            english_rating: event
        })
    }

    clickCostRatingHandler = (event) => {
        console.log('Safe Clickerrrrr', event);
        this.setState({
            cost_rating: event
        })
    }

     clickFriendlyRatingHandler =(event) =>{
        console.log('Safe Clickerrrrr', event);
        this.setState({
            friendly_rating: event
        })
    }

    clickReconmendRatingHandler = (event) => {
        console.log('Safe Clickerrrrr', event);
        this.setState({
            reconmend_rating: event
        })
    }

    render() {
        console.log('ID Update', this.props.match.params.id);
        console.log('State', this.state);
        console.log('tester', this.props.updateReview);
        
        


        return (
            <div>
                {this.props.updateReview.map((items => {
                    return (
                        <div key={items.id}>
                            <h1>Edit Your Review </h1>
                            <h2>{items.city}, {items.country}</h2>
                            {/* <select onChange={this.selectHandler}>
                                <option>{items.city},{items.country}</option>
                            </select> */}
                            <div>
                                <h3> ADD CoWorking Spaces? </h3>
                                <input type="text" placeholder="CoWorking Space Name" />
                                <input type="text" placeholder="CoWorking Space Address" />
                                <input type="text" placeholder="City" />
                                <input type="text" placeholder="Country" />
                                <input type="text" placeholder="Zip Code" />
                            </div>
                            <div>
                                <input className="experienceBox" type="text" placeholder="Experience" 
                                   />
                            </div>
                            <div>
                                <h2>Safety</h2>
                                <Rating
                                    initialRating={this.state.saftey_rating}
                                    onChange={this.clickSafeRatingHandler}
                                    start={0}
                                    stop={5}
                                />
                                <h2>English</h2>
                                <Rating
                                    initialRating={items.english_rating}
                                    onChange={this.clickEnglishRatingHandler}
                                    start={0}
                                    stop={5}
                                />
                                <h2>Cost</h2>
                                <Rating
                                    initialRating={items.cost_rating}
                                    onChange={this.clickCostRatingHandler}
                                    start={0}
                                    stop={5}
                                />
                                <h2>Friendliness</h2>
                                <Rating
                                    initialRating={items.friendly_rating}
                                    onChange={this.clickFriendlyRatingHandler}
                                    start={0}
                                    stop={5}
                                />
                                <h2>Reconmend</h2>
                                <Rating
                                    initialRating={items.reconmend_rating}
                                    onChange={this.clickReconmendRatingHandler}
                                    start={0}
                                    stop={5}
                                />
                            </div>
                            <div>
                                <Button variant="contained" color="secondary" onClick={this.submitPageHandler}>Submit</Button>
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
        updateReview: reduxState.updateReviewGetReducer
    }
}

export default connect(mapReduState)(UpdateReview);
