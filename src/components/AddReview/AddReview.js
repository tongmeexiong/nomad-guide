import React from 'react';
import { connect } from 'react-redux'
import './AddReview.css'


class AddReview extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>What's Your Review?</h1>
                    <h3>Review This Trvel Destination</h3>
                    <select>
                        <option>Location: City, Country</option>
                        <option>Minneapolis, Minnesota </option>
                        <option>Mangilao, Guam </option>
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
