import React from 'react';
import { connect } from 'react-redux'
import './TravelPage.css'


class TravelPage extends React.Component {

    // state = {
    //     id:
    // }

    componentDidMount() {
        this.getExploreListReviews()

    }

    getExploreListReviews = () => {
        this.props.dispatch({ type: 'FETCH_REVIEW', payload: this.props.exploreId })
    }

//     Child = ({ match })=>{
//     return (
//         <div>
//             <h3>ID: {match.params.id}</h3>
//         </div>
//     );
// }

    render() {
        console.log('Travel Page State', this.state.id);
        // console.log('Match', match.params.id);

        return (
            <div>
                <h1>Travel Page</h1>
                {this.props.explore.map((items => {
                    if (items.id === this.props.exploreId.id ) {
                        return (
                            <div>
                                <div>
                                    <img src={items.image} />
                                </div>
                                <div>
                                    <h2> {items.city}, {items.country} </h2>
                                </div>
                            </div>
                        )
                    }

                }))}
            </div>
        )
    }
}

const mapReduState = (reduxState) => {
    return {
        explore: reduxState.exploreReducer,
        exploreId: reduxState.idReducer,
        reviews: reduxState.reviewReducer
    }
}

export default connect(mapReduState)(TravelPage);
