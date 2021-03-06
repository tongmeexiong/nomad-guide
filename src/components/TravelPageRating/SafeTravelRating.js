import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons'



class SafeStarRatings extends React.Component {


    render() {
        console.log('Travel Page Rating', this.props.rating.safety_rating);

        return (
            <div>
                <Rating
                    initialRating={this.props.rating.safety_rating}
                    emptySymbol={<StarBorder />}
                    fullSymbol={<Star />}
                    start={0}
                    stop={5}
                    readonly
                />
            </div>
        )
    }
}


export default connect()(SafeStarRatings);
