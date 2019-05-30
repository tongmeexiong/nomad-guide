import React from 'react';
import { connect } from 'react-redux'
import SafeStarRatings from '../StarRatings/SafeStarRatings'
import EnlgishStarRating from '../StarRatings/EnglishStarRating'
import CostStarRating from '../StarRatings/CostRating'
import FriendlyStarRatings from'../StarRatings/FriendlyStarRatings'
import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'
import './AddReview.css'


class AddReview extends React.Component {

    componentDidMount() {
        this.getExploreListReviews()

    }

    getExploreListReviews = () => {
        this.props.dispatch({ type: 'FETCH_REVIEW', payload: this.props.exploreId })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>What's Your Review?</h1>
                    <h3>Review This Travel Destination</h3>
                    <select>
                        <option>Location: City, Country </option>

                        {this.props.reviews.map((review => {
                            return (
                                <option>{review.city}, {review.country}  </option>
                            )
                        }))}
                    </select>

                </div>
                <div>
                    <h3>Or </h3>
                    <h3> Add a New Travel Destination</h3>
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Country" />
                    <select>
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
                    <button> Submit</button>
                </div>
                <div>
                    <h2>Safety</h2>
                    <SafeStarRatings />
                    <h2>English</h2>
                    <EnlgishStarRating />
                    <h2>Cost</h2>
                    <CostStarRating/>
                    <h2>Frendly</h2>
                    <FriendlyStarRatings/>

                    <h2>Reconmendation</h2>
                    <ReconmendStarRatings/>
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
