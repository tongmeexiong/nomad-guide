import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons';


class CostStarRatings extends React.Component {

    state = {
        cost_rating: 0
    }

    // Send Captured Rating Value to Rating Reducer 
    clickRatingHandler = (event) => {
        console.log('Click Cost', event);
        this.props.dispatch({ type: 'SET_COST_RATING', payload: event })
    }

    render() {
        console.log('Rating', this.state);

        return (
            <div>
                <Rating
                    initialRating={this.state.cost_rating}
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

export default connect()(CostStarRatings);
