import React from 'react';
import { connect } from 'react-redux'
import Rating from 'react-rating';


class StarRatings extends React.Component {

    state = {
        rating: 0
    }

    // this.handleClick = this.handleClick.bind(this);
    //   }

    // handleClick(event) {
    //     this.setState({ value: undefined });
    // }

    clickRatingHandler = (event) =>{
        console.log('Click', event);
        this.setState({
            rating: event
        })
    }

    render() {
        console.log('Rating', this.state);
        
        return (
            <div>
                <Rating onChange={this.clickRatingHandler}
                    start={0}
                    stop={5}
                />
            </div>
        )
    }
}

export default connect()(StarRatings);
