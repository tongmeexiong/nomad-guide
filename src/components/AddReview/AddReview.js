import React from 'react';
import { connect } from 'react-redux'

//Other Components
import SafeStarRatings from '../StarRatings/SafeStarRatings'
import EnlgishStarRating from '../StarRatings/EnglishStarRating'
import CostStarRating from '../StarRatings/CostRating'
import FriendlyStarRatings from '../StarRatings/FriendlyStarRatings'
import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'

//Material-UI
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

//CSS
import './AddReview.css'

const styles = {
    rating: {
        height: '30px',
        width: '300px',
        marginRight: '100px',
        marginTop: '-630px',
        fontSize: '14.7px'
    }
}

class AddReview extends React.Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ADD_REVIEW', payload: this.props.match.params.id })
    }

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


    // POST reviews from Rating Reducer 
    submitPageHandler = () => {
        alert('Thank you for your review!')
        this.props.dispatch({ type: 'POST_CURRENT_REVIEW', payload: this.props.ratingReview })
    }

    // Sends value of WorkSpace Name to Rating Reducer
    workSpaceName = (event) => {
        console.log('Name', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_NAME', payload: event.target.value })
    }

    // Sends value of WorkSpace Address to Rating Reducer
    workSpaceAddress = (event) => {
        console.log('Address', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_ADDRESS', payload: event.target.value })
    }

    // Sends value of WorkSpace City to Rating Reducer
    workSpaceCity = (event) => {
        console.log('City', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_CITY', payload: event.target.value })
    }

    // Sends value of WorkSpace Country to Rating Reducer
    workSpaceCountry = (event) => {
        console.log('Country', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_COUNTRY', payload: event.target.value })
    }

    // Sends value of WorkSpace Zip to Rating Reducer
    workSpaceZip = (event) => {
        console.log('Zip ', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_ZIP', payload: event.target.value })
    }

    // Sends value of WorkSpace Comment to Rating Reducer
    workSpaceComment = (event) => {
        console.log('Comment', event.target.value);
        this.props.dispatch({ type: 'SET_EXPERIENCE_COMMENT', payload: event.target.value })
    }

    render() {
        const style = this.props.classes

        return (
            <div>
                <h1>Review This Travel Destination</h1>
                {/* Display location being reviewed */}
                {this.props.travelDetail.map((detail => {
                    return (
                        <h2 key={detail.id}>{detail.city}, {detail.country}</h2>
                    )
                }))}

                {this.props.travelDetail.map((review => {
                    return (
                        // <option onClick={this.travelPickHandler(review.travel_page_id)} >{review.city}, {review.country}  </option>
                        <div key={review.id}>
                            <h3> Any CoWorking Spaces? </h3>
                            <input onChange={this.workSpaceName} type="text" placeholder="CoWorking Space Name" />
                            <input onChange={this.workSpaceAddress} type="text" placeholder="CoWorking Space Address" />
                            <input onChange={this.workSpaceCity} type="text" placeholder="City" />
                            <input onChange={this.workSpaceCountry} type="text" placeholder="Country" />
                            <input onChange={this.workSpaceZip} type="text" placeholder="Zip Code" />
                            <div>
                                <input onChange={this.workSpaceComment} className="experienceBox" type="text" placeholder="Experience" />
                            </div>

                            {/* Component of Review Ratings */}
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
                                {/* Button will capture id for POSTING */}
                                <Button variant="contained" color="secondary" onClick={() => this.submitPageHandler(review.travel_page_id)}>Submit</Button>
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

        travelDetail: reduxState.travelPageDetailReducer,
        ratingReview: reduxState.ratingeReducer
    }
}

export default withStyles(styles)(connect(mapReduState)(AddReview));
