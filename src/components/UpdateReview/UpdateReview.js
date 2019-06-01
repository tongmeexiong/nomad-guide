import React from 'react';
import { connect } from 'react-redux'

import { Button } from '@material-ui/core'
import Rating from 'react-rating';


// import './AddReview.css'


class AddReview extends React.Component {

    // state = {
    //     inputEditable: true,
    //     city: this.props.userReview.city,
    //     country: this.props.userReview.country,
    //     saftey_rating: this.props.userReview.safety_rating,
    //     english_rating: this.props.userReview.english_rating,
    //     cost_rating: this.props.userReview.cost_rating,
    //     friendly_rating: this.props.userReview.friendly_rating,
    //     reconmend_rating: this.props.userReview.reconmend_rating
    // }

    state ={
        comment: "hello"
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

    render() {
        console.log('ID Update', this.props.match.params.id);
        console.log('State', this.state);
        


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
                                    initialRating={items.safety_rating}
                                    start={0}
                                    stop={5}
                                />
                                <h2>English</h2>
                                <Rating
                                    initialRating={items.english_rating}
                                    start={0}
                                    stop={5}
                                />
                                <h2>Cost</h2>
                                <Rating
                                    initialRating={items.cost_rating}
                                    start={0}
                                    stop={5}
                                />
                                <h2>Friendliness</h2>
                                <Rating
                                    initialRating={items.friendly_rating}
                                    start={0}
                                    stop={5}
                                />
                                <h2>Reconmend</h2>
                                <Rating
                                    initialRating={items.reconmend_rating}
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

export default connect(mapReduState)(AddReview);
