import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';



class UpdateEnglishStarRatings extends React.Component {



    clickRatingHandler = (event) => {
        console.log('Click', event);

        this.props.dispatch({ type: 'SET_ENGLISH_RATING', payload: event })
    }

    render() {
        console.log('Rating', this.state);
        console.log('Safe Rating Prop', this.props.rating.saftey_rating);

        return (
            <div>

                <Rating
                    initialRating={this.props.rating.english_rating}
                    onChange={this.clickRatingHandler}

                    start={0}
                    stop={5}

                />


            </div>
        )
    }
}


export default connect()(UpdateEnglishStarRatings);
