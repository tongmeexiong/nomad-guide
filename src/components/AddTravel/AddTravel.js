import React from 'react';
import { connect } from 'react-redux'


import SafeStarRatings from '../StarRatings/SafeStarRatings'
import EnlgishStarRating from '../StarRatings/EnglishStarRating'
import CostStarRating from '../StarRatings/CostRating'
import FriendlyStarRatings from '../StarRatings/FriendlyStarRatings'
import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'


const styles = {
    rating: {
        height: '30px',
        width: '300px',
        marginRight: '100px',
        marginLeft: '-800px',
        marginTop: '-300px',
        fontSize: '14.7px'
    },
    inputs: {
        marginLeft: '50px',
        height: '500px',
        width: '900px',
        marginTop: '-10px'
    },
    inputBox: {
        marginLeft: '50px',
        height: '500px',
        width: '900px',
        marginTop: '-220px'
    }
}


class AddTravel extends React.Component {

    state = {
        city: '',
        country: '',
        continent: '',
        image: '',
        coworking_space_name: '',
        coworking_space_address: '',
        coworking_space_city: '',
        coworking_space_country: '',
        coworking_space_zip: 0,
        experience_zip: '',
        experience_comment:''

    }


    addTravelLocation = () => {
        console.log('Clicked Add Location');
        // Send Post Information to Database
        this.props.dispatch({
            type: 'POST_TRAVEL',payload: { 
                city: this.state.city,
                country: this.state.country,
                continent: this.state.continent,
                image: this.state.image,
                experience_comment: this.props.rating.experience_comment,
                safety_rating: this.props.rating.safety_rating,
                english_rating: this.props.rating.english_rating,
                cost_rating: this.props.rating.cost_rating,
                friendly_rating: this.props.rating.friendly_rating,
                reconmend_rating: this.props.rating.reconmend_rating,
            },  
        })
        alert('Thank you for Adding a New Location!')
        this.props.history.push("home")

        // Send information to Reducer
        // this.props.dispatch({ type: 'SET_NEW_POST', payload: this.state })

        //Go to Review Page
        // this.props.history.push("/addnewreview")
    }

    preFillHandler = () =>{
        this.setState({
            city: 'Pangasinan',
            country: 'Philippines',
            continent: 'Asia',
            image: 'https://i.pinimg.com/originals/02/7d/de/027dde196f4c6dd564a83e68457d7658.jpg',
            coworking_space_name: '',
            coworking_space_address: '',
            coworking_space_city: '',
            coworking_space_country: '',
            coworking_space_zip: 0,
            experience_zip: '',
            experience_comment: 'Awesome place! Did not get much work done.'
        })
    }

    //Capture value of city input
    cityChangeHandler = (event) => {
        console.log('City', event.target.value);
        this.setState({
            city: event.target.value
        })
    }

    //Capture value of Country input
    countryChangeHandler = (event) => {
        console.log('country', event.target.value);
        this.setState({
            country: event.target.value
        })
    }

    //Capture value of Continent input
    continentChangeHandler = (event) => {
        console.log('continent', event.target.value);
        this.setState({
            continent: event.target.value
        })
    }

    //Capture value of Image input
    imageHandler = (event) => {
        console.log('Image', event.target.value);
        this.setState({
            image: event.target.value
        })
    }



    workSpaceName = (event) => {
        console.log('Name', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_NAME', payload: event.target.value })
    }
    workSpaceAddress = (event) => {
        console.log('Address', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_ADDRESS', payload: event.target.value })

    }
    workSpaceCity = (event) => {
        console.log('City', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_CITY', payload: event.target.value })

    }
    workSpaceCountry = (event) => {
        console.log('Country', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_COUNTRY', payload: event.target.value })

    }
    workSpaceZip = (event) => {
        console.log('Zip ', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_ZIP', payload: event.target.value })

    }
    workSpaceComment = (event) => {
        console.log('Comment', event.target.value);
        this.props.dispatch({ type: 'SET_EXPERIENCE_COMMENT', payload: event.target.value })

    }

    render() {
        console.log('Review Page', this.props.rating.safety_rating);
        console.log('state', this.state);
        const style = this.props.classes


        return (
            <div>
                <div>
                    <h3 onClick={this.preFillHandler}> Review New Travel Destination</h3>
                    <input value={this.state.city} onChange={this.cityChangeHandler} type="text" placeholder="City" />
                    <input value={this.state.country} onChange={this.countryChangeHandler} type="text" placeholder="Country" />
                    <input value={this.state.image} onChange={this.imageHandler} type="text" placeholder="img url" />
                    {/* <select onChange={this.continentChangeHandler} >
                        <option>Continent</option>
                        <option>North America </option>
                        <option>Asia </option>
                    </select> */}
                    {/* <button onClick={this.addTravelLocation} >Add Travel</button> */}
                </div>
                <div>
                    <div>
                        <h3> Any CoWorking Spaces? </h3>
                        <input  onChange={this.workSpaceName} type="text" placeholder="Name" />
                        <input onChange={this.workSpaceAddress} type="text" placeholder="Address" />
                        <input onChange={this.workSpaceCity} type="text" placeholder="City" />
                        <input  onChange={this.workSpaceCountry} type="text" placeholder="Country" />
                        <input onChange={this.workSpaceZip} type="text" placeholder="Zip Code" />
                        <div>
                            <h3>Experience</h3>

                            <input onChange={this.workSpaceComment} className="experienceBox" type="text" />
                        </div>
                        <Grid
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-end"
                        >
                        <Grid item xs={6} className={style.rating}>
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
                            </Grid>
                        </Grid>
                        <div>
                            <Button variant="contained" color="secondary" onClick={this.addTravelLocation}>Submit</Button>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

const mapReduState = (reduxState) => {
    return {
        rating: reduxState.ratingeReducer,
    }
}

export default withStyles(styles)(connect(mapReduState)(AddTravel));

