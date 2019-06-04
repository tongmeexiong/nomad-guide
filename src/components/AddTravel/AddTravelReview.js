import React from 'react';
import { connect } from 'react-redux'

//Other Components
import SafeStarRatings from '../StarRatings/SafeStarRatings'
import EnlgishStarRating from '../StarRatings/EnglishStarRating'
import CostStarRating from '../StarRatings/CostRating'
import FriendlyStarRatings from '../StarRatings/FriendlyStarRatings'
import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'



class AddReview extends React.Component {

    state = {
        saftey_rating: 0,
        english_rating: 0,
        cost_rating: 0,
        friendly_rating: 0,
        reconmend_rating: 0,
        coworking_space_name: '',
        coworking_space_address: '',
        coworking_space_city: '',
        coworking_space_country: '',
        coworking_space_zip: 0,
        experience_zip: '',
        travel_page_id: 0
    }

    // Post review for page from new POST
    submitPageHandler = () => {
        alert('Thank you for your review!')
        this.props.dispatch({ type: 'POST_CURRENT_REVIEW', payload: this.props.ratingReview })
    }

    // Start of Capturing values of all inputs into Ratings Reducer 
    workSpaceName = (event) => {
        console.log('Name', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_NAME', payload: event.target.value })
    }
    workSpaceAddress = (event) => {
        console.log('Address', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_ADDRESS', payload: event.target.value })

    }
    workSpaceCity = (event) => {
        console.log('City', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_CITY', payload: event.target.value })

    }
    workSpaceCountry = (event) => {
        console.log('Country', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_COUNTRY', payload: event.target.value })

    }
    workSpaceZip = (event) => {
        console.log('Zip ', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_ZIP', payload: event.target.value })

    }
    workSpaceComment = (event) => {
        console.log('Comment', event.target.value);
        this.props.dispatch({ type: 'SET_EXPERIENCE_COMMENT', payload: event.target.value })

    }
     // End of Capturing values of all inputs into Ratings Reducer 


    render() {

        return (
            <div>
                <h1>Review This Travel Destination</h1>

                        <div>
                            <h3> Any CoWorking Spaces? </h3>
                            <input onChange={this.workSpaceName} type="text" placeholder="CoWorking Space Name" />
                            <input onChange={this.workSpaceAddress} type="text" placeholder="CoWorking Space Address" />
                            <input onChange={this.workSpaceCity} type="text" placeholder="City" />
                            <input onChange={this.workSpaceCountry} type="text" placeholder="Country" />
                            <input onChange={this.workSpaceZip} type="text" placeholder="Zip Code" />
                            <div>
                                <input onChange={this.workSpaceComment} className="experienceBox" type="text" placeholder="Experience" />
                            </div>

                            <div>
                                <h2>Safety</h2>
                                <SafeStarRatings />
                                <h2>English</h2>
                                <EnlgishStarRating />
                                <h2>Cost</h2>
                                <CostStarRating />
                                <h2>Frendly</h2>
                                <FriendlyStarRatings />
                                <h2>Recommend</h2>
                                <ReconmendStarRatings />
                            </div>
                            <div>
                                {/* <Button variant="contained" color="secondary" onClick={() => this.submitPageHandler(review.travel_page_id)}>Submit</Button> */}
                            </div>
                        </div>

            </div>
        )
    }
}


const mapReduState = (reduxState) => {
    return {
        postReview: reduxState.postReviewReducer
    }
}

export default connect(mapReduState)(AddReview);
