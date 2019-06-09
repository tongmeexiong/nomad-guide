import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons'



class ReconmendStarRatings extends React.Component {

    state = {
        reconmend_rating: 0
    }

    // Send Captured Rating Value to Rating Reducer 
    clickRatingHandler = (event) => {
        console.log('Click, reconmmend', event);
        this.props.dispatch({ type: 'SET_RECONMEND_RATING', payload: event })
    }

    render() {
        console.log('Rating', this.state);

        return (
            <div>
                <Rating
                    initialRating={this.state.reconmend_rating}
                    onChange={this.clickRatingHandler}
                    emptySymbol={<StarBorder />}
                    fullSymbol={<Star />}
                    start={0}
                    stop={5}
                />
            </div>
        )
    }
}


export default connect()(ReconmendStarRatings);
