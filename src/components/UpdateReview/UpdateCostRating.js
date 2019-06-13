import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons';




class UpdateCostStarRatings extends React.Component {


    clickRatingHandler = (event) => {
        console.log('Click', event);
        this.props.dispatch({ type: 'SET_COST_RATING', payload: event })
    }

    render() {

        return (
            <div>
                <Rating
                    initialRating={this.props.rating.cost_rating}
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


export default connect()(UpdateCostStarRatings);
