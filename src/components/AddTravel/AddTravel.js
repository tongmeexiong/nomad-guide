import React from 'react';
import { connect } from 'react-redux'
// import SafeStarRatings from '../StarRatings/SafeStarRatings'
// import EnlgishStarRating from '../StarRatings/EnglishStarRating'
// import CostStarRating from '../StarRatings/CostRating'
// import FriendlyStarRatings from '../StarRatings/FriendlyStarRatings'
// import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'
// import { Button } from '@material-ui/core'



class AddTravel extends React.Component {

    state = {
        inputEditable: true,
        city: '',
        country: '',
        continent: '',
        image: ''
    }
    componentDidMount() {
        this.getExploreListReviews()

    }

    getExploreListReviews = () => {
        this.props.dispatch({ type: 'FETCH_REVIEW', payload: this.props.exploreId })
    }

    selectHandler = () => {
        this.setState({
            inputEditable: !this.state.inputEditable
        })
    }

    submitPageHandler = () => {
        this.props.dispatch({
            type: 'POST_TRAVEL',
            payload: {
                city: this.state.city,
                country: this.state.country,
                continent: this.state.continent,
                
            }
        })
        this.props.dispatch({ type: 'POST_CURRENT_REVIEW', payload: this.props.ratingReview })
        alert('Thank you for the review!')

    }


    addTravelLocation = () => {
        console.log('Clicked Add Location');
        // this.props.dispatch({
        //     type: 'POST_TRAVEL',
        //     payload: {
        //         city: this.state.city,
        //         country: this.state.country,
        //         continent: this.state.continent
        //     }
        // })
        // this.props.dispatch({ type: 'POST_CURRENT_REVIEW', payload: this.props.ratingReview })
        this.props.dispatch({
            type: 'POST_TRAVEL',
            payload: {
                city: this.state.city,
                country: this.state.country,
                continent: this.state.continent,
                image: this.state.image
            }
        })
                alert('Thank you for the review!')
        this.props.history.push("/addreview")
    }

    cityChangeHandler = (event) => {
        console.log('City', event.target.value);
        this.setState({
            city: event.target.value
        })

    }

    countryChangeHandler = (event) => {
        console.log('country', event.target.value);
        this.setState({
            country: event.target.value
        })

    }

    continentChangeHandler = (event) => {
        console.log('continent', event.target.value);
        this.setState({
            continent: event.target.value
        })

    }

    imageHandler =(event) =>{
        console.log('Image', event.target.value);
        this.setState({
            image: event.target.value
        })
    }

    render() {
        console.log('Review Page', this.state);

        return (
            <div>
                <div> 
                    <h3> Review New Travel Destination</h3>
                    <input onChange={this.cityChangeHandler} type="text" placeholder="City" disabled={!this.state.inputEditable} />
                    <input onChange={this.countryChangeHandler} type="text" placeholder="Country" disabled={!this.state.inputEditable} />
                    <input onChange={this.imageHandler} type="text" placeholder="img url" />
                    <select onChange={this.continentChangeHandler} disabled={!this.state.inputEditable}>
                        <option>Continent</option>
                        <option>North America </option>
                        <option>Asia </option>
                    </select>
                    <button onClick={this.addTravelLocation} >Add Travel</button>
                </div>
                {/* <div>
                    <h3> Any CoWorking Spaces? </h3>
                    <input type="text" placeholder="CoWorking Space Name" />
                    <input type="text" placeholder="CoWorking Space Address" />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Country" />
                    <input type="text" placeholder="Zip Code" />
                </div>
                <div>
                    <input className="experienceBox" type="text" placeholder="Experience" />
                </div>

                <div>
                    <h2>Safety</h2>
                    <SafeStarRatings />
                    <h2>English</h2>
                    <EnlgishStarRating />
                    <h2>Cost</h2>
                    <CostStarRating />
                    <h2>Frendly</h2>
                    <FriendlyStarRatings />

                    <h2>Recommend</h2>
                    <ReconmendStarRatings />
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={this.submitPageHandler}>Submit</Button>
                </div> */}
            
            </div>
        )
    }
}


const mapReduState = (reduxState) => {
    return {
        explore: reduxState.exploreReducer,
        exploreId: reduxState.idReducer,
        reviews: reduxState.reviewReducer,
        ratingReview: reduxState.ratingeReducer,

    }
}

export default connect(mapReduState)(AddTravel);
