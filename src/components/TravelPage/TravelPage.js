import React from 'react';
import { connect } from 'react-redux'


class TravelPage extends React.Component {

    componentDidMount() {
        this.getExploreList()
    }

    getExploreList = () => {
        this.props.dispatch({ type: 'FETCH_EXPLORE' })
    }


    render() {

        return (
            <div>
                <h1>Travel Page</h1>
                {this.props.explore.map((items => {
                    if (items.id === this.props.exploreId.id){
                        return (
                            <img src={items.image} />
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
        exploreId: reduxState.idReducer

    }
}

export default connect(mapReduState)(TravelPage);
