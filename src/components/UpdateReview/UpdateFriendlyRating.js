import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';



class UpdateFriendlyStarRatings extends React.Component {



    clickRatingHandler = (event) => {
        console.log('Click', event);

        this.props.dispatch({ type: 'SET_FRIENDLY_RATING', payload: event })
    }

    render() {

        return (
            <div>

                <Rating
                    initialRating={this.props.rating.friendly_rating}
                    onChange={this.clickRatingHandler}

                    start={0}
                    stop={5}

                />


            </div>
        )
    }
}


export default connect()(UpdateFriendlyStarRatings);
