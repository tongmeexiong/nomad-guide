import React from 'react';
import { connect } from 'react-redux'

import { Button } from '@material-ui/core'
import Rating from 'react-rating';


// import './AddReview.css'


class AddReview extends React.Component {

    state = {
        inputEditable: true,
        city: this.props.userReview.city,
        country: this.props.userReview.country,
        saftey_rating: this.props.userReview.safety_rating,
        english_rating: this.props.userReview.english_rating,
        cost_rating: this.props.userReview.cost_rating,
        friendly_rating: this.props.userReview.friendly_rating,
        reconmend_rating: this.props.userReview.reconmend_rating
    }
    componentDidMount() {
        this.getExploreListReviews()

    }

    getExploreListReviews = () => {
        this.props.dispatch({ type: 'FETCH_REVIEW', payload: this.props.exploreId })
    }

    selectHandler = () => {
        this.setState({
            inputEditable: !this.state.inputEditable
        })
    }

    submitPageHandler = () => {
        alert('Thank you for the review!')
    }

    travelPickHandler = (id) => {
        console.log('Option ID', id);

    }

    render() {
        console.log('Update Review Page', this.state);

        return (
            <div>
                <h1>Edit Your Review </h1>
                <h3>Review This Travel Destination</h3>
                <select onChange={this.selectHandler}>
                    {/* <option>Location: City, Country </option> */}

                            <option>{this.state.city},{this.state.country}</option>
                </select>

                {/* <div>
                    <h3>Or </h3>
                    <h3> Add a New Travel Destination</h3>
                    <input type="text" placeholder="City" disabled={!this.state.inputEditable} />
                    <input type="text" placeholder="Country" disabled={!this.state.inputEditable} />
                    <select disabled={!this.state.inputEditable}>
                        <option>Continent</option>
                        <option>North America </option>
                        <option>Asia </option>
                    </select>
                </div> */}
                <div>
                    <h3> ADD CoWorking Spaces? </h3>
                    <input type="text" placeholder="CoWorking Space Name" />
                    <input type="text" placeholder="CoWorking Space Address" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Country" />
                    <input type="text" placeholder="Zip Code" />
                </div>
                <div>
                    <input className="experienceBox" type="text" placeholder="Experience" />
                </div>

                <div>
                    <h2>Safety</h2>
                    <Rating
                        initialRating={this.state.saftey_rating}                       
                        start={0}
                        stop={5}
                    />   
                    {/* <h2>English</h2>
                    <EnlgishStarRating />
                    <h2>Cost</h2>
                    <CostStarRating />
                    <h2>Frendly</h2>
                    <FriendlyStarRatings />

                    <h2>Recommend</h2>
                    <ReconmendStarRatings /> */}
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={this.submitPageHandler}>Submit</Button>
                </div>
            </div>
        )
    }
}


const mapReduState = (reduxState) => {
    return {
        explore: reduxState.exploreReducer,
        exploreId: reduxState.idReducer,
        reviews: reduxState.reviewReducer,
        userReview: reduxState.updateReviewReducer
    }
}

export default connect(mapReduState)(AddReview);
