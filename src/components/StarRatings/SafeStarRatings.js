import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
// import { Star, StarBorder } from '@material-ui/icons'



class SafeStarRatings extends React.Component {

    state = {
        saftey_rating: 0
    }

        // Send Captured Rating Value to Rating Reducer 
    clickRatingHandler = (event) => {
        console.log('Click Safe', event);
        this.props.dispatch({ type: 'SET_SAFTEY_RATING', payload: event})
        }

    render() {
        console.log('Rating', this.state);

        return (
            <div>

                <Rating
                    initialRating={this.state.saftey_rating}
                    onChange={this.clickRatingHandler}
                    start={0}
                    stop={5}
                />
            </div>
        )
    }
}


export default connect()(SafeStarRatings);
