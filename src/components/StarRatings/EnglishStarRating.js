import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
// import { Star, StarBorder } from '@material-ui/icons'



class EnglishStarRatings extends React.Component {

    state = {
        english_rating: 0
    }


    clickRatingHandler = (event) => {
        console.log('Click', event);
        this.setState({
            english_rating: event
        })
        this.props.dispatch({ type: 'SET_ENGLISH_RATING', payload: event  })
    }

    render() {
        console.log('Rating', this.state);

        return (
            <div>
               
                <Rating
                    initialRating={this.state.english_rating}
                    onChange={this.clickRatingHandler}
                    // emptySymbol={<StarBorder />}
                    // fullSymbol={<Star />}
                    start={0}
                    stop={5}
                />
              

            </div>
        )
    }
}

const mapReduState = (reduxState) => {
    return {
        explore: reduxState.exploreReducer,
        exploreId: reduxState.idReducer,
        reviews: reduxState.reviewReducer,
        user: reduxState.user

    }
}

export default connect(mapReduState)(EnglishStarRatings);
