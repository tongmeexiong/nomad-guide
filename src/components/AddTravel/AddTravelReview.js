import React from 'react';
import { connect } from 'react-redux'
import SafeStarRatings from '../StarRatings/SafeStarRatings'
import EnlgishStarRating from '../StarRatings/EnglishStarRating'
import CostStarRating from '../StarRatings/CostRating'
import FriendlyStarRatings from '../StarRatings/FriendlyStarRatings'
import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'
import { Button } from '@material-ui/core'

import './AddReview.css'


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
    componentDidMount() {
        this.getExploreListReviews()

    }

    getExploreListReviews = () => {
        this.props.dispatch({ type: 'FETCH_REVIEW', payload: this.props.exploreId })

    }



    submitPageHandler = () => {
        alert('Thank you for your review!')
        this.props.dispatch({ type: 'POST_CURRENT_REVIEW', payload: this.props.ratingReview })

    }

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

    // addTravelLocation = () =>{
    //     console.log('Clicked Add Location');
    //     this.props.dispatch({type:'POST_TRAVEL',
    //     payload: {
    //         city: this.state.city,
    //         country: this.state.country,
    //         continent: this.state.continent
    //     }
    // })

    // }

    // cityChangeHandler =(event) =>{
    //     console.log('City', event.target.value);
    //     this.setState({
    //         city: event.target.value
    //     })

    // }

    // countryChangeHandler = (event) => {
    //     console.log('country', event.target.value);
    //     this.setState({
    //         country: event.target.value
    //     })

    // }

    // continentChangeHandler = (event) => {
    //     console.log('continent', event.target.value);
    //     this.setState({
    //         continent: event.target.value
    //     })

    // }

    render() {

        return (
            <div>
                <h1>Review This Travel Destination</h1>
                {this.props.travelDetail.map((detail => {
                    return (
                        <h2>{detail.city}, {detail.country}</h2>
                    )
                }))}
                {this.props.travelPage.map((review => {
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
                                <Button variant="contained" color="secondary" onClick={() => this.submitPageHandler(review.travel_page_id)}>Submit</Button>
                            </div>
                        </div>
                    )
                }))}

                {/* <div>
                    <h3> Any CoWorking Spaces? </h3>
                    <input onChange={this.workSpaceName} type="text" placeholder="CoWorking Space Name" />
                    <input onChange={this.workSpaceAddress} type="text" placeholder="CoWorking Space Address" />
                    <input onChange={this.workSpaceCity} type="text" placeholder="City" />
                    <input onChange={this.workSpaceCountry} type="text" placeholder="Country" />
                    <input onChange={this.workSpaceZip} type="text" placeholder="Zip Code" />
                </div>
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
                    <Button variant="contained" color="secondary" onClick={this.submitPageHandler}>Submit</Button>
                </div> */}
            </div>
        )
    }
}


const mapReduState = (reduxState) => {
    return {
        explore: reduxState.exploreReducer,
        exploreId: reduxState.idReducer,
        ratingReview: reduxState.ratingeReducer,
        reviews: reduxState.reviewReducer,
        travelPage: reduxState.travelPageReviewReducer,
        travelDetail: reduxState.travelPageDetailReducer
    }
}

export default connect(mapReduState)(AddReview);
