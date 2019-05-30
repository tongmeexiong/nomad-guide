import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
// import { Star, StarBorder } from '@material-ui/icons'



class SafeStarRatings extends React.Component {

    state = {
        english_rating: 0
    }

    // this.handleClick = this.handleClick.bind(this);
    //   }

    // handleClick(event) {
    //     this.setState({ value: undefined });
    // }

    clickRatingHandler = (event) => {
        console.log('Click', event);
        this.setState({
            SafteyRating: event
        })
        this.props.dispatch({ type: 'SET_SAFTEY_RATING', payload: event})
        }
    
// sendToReducer =() =>{
//         this.props.dispatch({ type: 'SET_RATING', payload: this.state })
//     }




    render() {
        console.log('Rating', this.state);

        return (
            <div>
                {/* {this.props.reviews.map((rating=>{
                    <h3>{rating.safety_rating}</h3> */}
                {/* <div> */}
                <Rating
                    initialRating={this.state.SafteyRating}
                    onChange={this.clickRatingHandler}
                    // emptySymbol={<StarBorder />}
                    // fullSymbol={<Star />}
                    start={0}
                    stop={5}
                />
                {/* </div> */}
                {/* }))} */}

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

export default connect(mapReduState)(SafeStarRatings);
