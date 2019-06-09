import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons';



class updateSafeStarRatings extends React.Component {



    clickRatingHandler = (event) => {
        console.log('Click', event);
     
        this.props.dispatch({ type: 'SET_SAFTEY_RATING', payload: event })
    }

    render() {
        console.log('Rating', this.state);
        console.log('Safe Rating Prop', this.props.rating.saftey_rating);
            
        return (
            <div>
               
                <Rating
                    initialRating={this.props.rating.safety_rating}
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


export default connect()(updateSafeStarRatings);
