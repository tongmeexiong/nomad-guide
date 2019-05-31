import React from 'react';
import { connect } from 'react-redux'
import SafeStarRatings from '../StarRatings/SafeStarRatings'
import EnlgishStarRating from '../StarRatings/EnglishStarRating'
import CostStarRating from '../StarRatings/CostRating'
import FriendlyStarRatings from '../StarRatings/FriendlyStarRatings'
import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'
import {  Button } from '@material-ui/core'

import './AddReview.css'


class AddReview extends React.Component {

    state = {
        inputEditable: true
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

    submitPageHandler =()=>{
        alert('Thank you for the review!')
    }

    travelPickHandler =(id)=>{
        console.log('Option ID', id);
        
    }

    render() {
        console.log('Review Page', this.state);
        
        return (
            <div>
                    <h1>What's Your Review?</h1>
                    <h3>Review This Travel Destination</h3>
                    <select onChange={this.selectHandler}>
                        <option>Location: City, Country </option>

                        {this.props.reviews.map((review => {
                            return (
                                <option onClick={this.travelPickHandler(review.travel_page_id)} >{review.city}, {review.country}  </option>
                            )
                        }))}
                    </select> 

                <div>
                    <h3>Or </h3>
                    <h3> Add a New Travel Destination</h3>
                        <input type="text" placeholder="City" disabled={!this.state.inputEditable} />
                        <input type="text" placeholder="Country" disabled={!this.state.inputEditable} />
                    <select disabled={!this.state.inputEditable}>
                        <option>Continent</option>
                        <option>North America </option>
                        <option>Asia </option>
                    </select>
                    </div> 
                <div>
                    <h3> Any CoWorking Spaces? </h3>
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
                </div>
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

export default connect(mapReduState)(AddReview);
