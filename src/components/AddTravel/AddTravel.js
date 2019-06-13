import React from 'react';
import { connect } from 'react-redux'

// Ratings
import SafeStarRatings from '../StarRatings/SafeStarRatings'
import EnlgishStarRating from '../StarRatings/EnglishStarRating'
import CostStarRating from '../StarRatings/CostRating'
import FriendlyStarRatings from '../StarRatings/FriendlyStarRatings'
import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'

//Material-UI 
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Swal from 'sweetalert2';

const styles = {
    rating: {
        height: '30px',
        width: '300px',
        marginRight: '200px',
        marginLeft: '-500px',
        marginTop: '-350px',
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
    },
    inputFields: {
        marginLeft: '20px'
    },
    button: {
        marginLeft: '20px',
        marginTop: '-190px'
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
        experience_comment: ''

    }

    addTravelLocation = () => {
        console.log('Clicked Add Location');
        // Send Post Information to Database
        this.props.dispatch({
            type: 'POST_TRAVEL', payload: {
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
        Swal.fire(
            'Thank you!'
        )
        this.props.history.push("home")


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


    // Inputs to dispatch
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
    // End of Inputs to dispatch

    render() {
        console.log('state', this.state);
        const style = this.props.classes


        return (
            <div>
                <div>
                    <div className={style.inputFields}>
                        <h3> Review New Travel Destination</h3>
                        <TextField value={this.state.city} onChange={this.cityChangeHandler} type="text" placeholder="City" />
                        <TextField value={this.state.country} onChange={this.countryChangeHandler} type="text" placeholder="Country" />
                        <TextField value={this.state.image} onChange={this.imageHandler} type="text" placeholder="img url" />
                        <NativeSelect onChange={this.continentChangeHandler} >
                            <option>Continent</option>
                            <option>Central America </option>
                            <option>Asia </option>
                            <option>Europe </option>
                            <option>North America  </option>
                        </NativeSelect>
                    </div>
                    <div>
                        <div className={style.inputFields}>
                            <h3> Any CoWorking Spaces? </h3>
                            <TextField onChange={this.workSpaceName} type="text" placeholder="Name" />
                            <TextField onChange={this.workSpaceAddress} type="text" placeholder="Address" />
                            <TextField onChange={this.workSpaceCity} type="text" placeholder="City" />
                            <TextField onChange={this.workSpaceCountry} type="text" placeholder="Country" />
                            <TextField onChange={this.workSpaceZip} type="text" placeholder="Zip Code" />
                            <div>
                                <h3>Experience</h3>
                                <TextField
                                    onChange={this.workSpaceComment}
                                    id="filled-multiline-flexible"
                                    label="Review"
                                    multiline
                                    rowsMax="8"
                                    margin="normal"
                                    helperText="Experience"
                                    variant="filled"
                                />
                            </div>
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
                                <h2>Friendliness</h2>
                                <FriendlyStarRatings />
                                <h2>Recommend</h2>
                                <ReconmendStarRatings />
                            </Grid>
                        </Grid>
                        <div>
                            <Button className={style.button} variant="contained" color="secondary" onClick={this.addTravelLocation}>Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapReduxState = (reduxState) => {
    return {
        rating: reduxState.ratingReducer,
    }
}

export default withStyles(styles)(connect(mapReduxState)(AddTravel));

