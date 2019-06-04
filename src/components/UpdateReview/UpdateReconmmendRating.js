import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';



class UpdateReconmmendStarRatings extends React.Component {



    clickRatingHandler = (event) => {
        console.log('Click', event);

        this.props.dispatch({ type: 'SET_RECONMEND_RATING', payload: event })
    }

    render() {

        return (
            <div>

                <Rating
                    initialRating={this.props.rating.reconmend_rating}
                    onChange={this.clickRatingHandler}

                    start={0}
                    stop={5}

                />


            </div>
        )
    }
}


export default connect()(UpdateReconmmendStarRatings);
