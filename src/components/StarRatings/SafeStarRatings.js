import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'


const styles = {
    rating: {
        height: '30px',
        width: '300px',
        marginRight: '100px',
        marginTop: '-630px',
        fontSize: '14.7px'
    },
    star: {
        Color: 'gold'
    },

}



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
let style = this.props.classes
        return (
            <div >

                <Rating
                    initialRating={this.state.saftey_rating}
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


export default withStyles(styles)(connect()(SafeStarRatings));
