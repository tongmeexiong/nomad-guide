import React from 'react';
import { connect } from 'react-redux'

//Other Components
import SafeStarRatings from '../StarRatings/SafeStarRatings'
import EnlgishStarRating from '../StarRatings/EnglishStarRating'
import CostStarRating from '../StarRatings/CostRating'
import FriendlyStarRatings from '../StarRatings/FriendlyStarRatings'
import ReconmendStarRatings from '../StarRatings/ReconmendStarRating'

//Material-UI
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';


//CSS
import './AddReview.css'

const styles = {
    rating: {
        height: '30px',
        width: '300px',
        marginRight: '100px',
        marginLeft: '-800px',
        marginTop: '-780px',
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

class AddReview extends React.Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_ADD_REVIEW', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'SET_TRAVEL_ID', payload: this.props.match.params.id })
window.scrollTo(0,0)
    }

    state = {
        saftey_rating: 0,
        english_rating: 0,
        cost_rating: 0,
        friendly_rating: 0,
        reconmend_rating: 0,
        coworking_space_name: '',
        coworking_space_address: '',
        coworking_space_city: '',
        coworking_space_country: '',
        coworking_space_zip: 0,
        experience_zip: '',
        travel_page_id: 0
    }


    // POST reviews from Rating Reducer 
    submitPageHandler = () => {
        console.log('Clicked');
        
            
        this.props.dispatch({ type: 'POST_CURRENT_REVIEW', payload: this.props.ratingReview })
        Swal.fire(
            'Thank you for the Review!'
        )   
        this.props.history.push("/home")
    }

    // Sends value of WorkSpace Name to Rating Reducer
    workSpaceName = (event) => {
        console.log('Name', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_NAME', payload: event.target.value })
    }

    // Sends value of WorkSpace Address to Rating Reducer
    workSpaceAddress = (event) => {
        console.log('Address', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_ADDRESS', payload: event.target.value })
    }

    // Sends value of WorkSpace City to Rating Reducer
    workSpaceCity = (event) => {
        console.log('City', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_CITY', payload: event.target.value })
    }

    // Sends value of WorkSpace Country to Rating Reducer
    workSpaceCountry = (event) => {
        console.log('Country', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_COUNTRY', payload: event.target.value })
    }

    // Sends value of WorkSpace Zip to Rating Reducer
    workSpaceZip = (event) => {
        console.log('Zip ', event.target.value);
        this.props.dispatch({ type: 'SET_COWORKING_SPACE_ZIP', payload: event.target.value })
    }

    // Sends value of WorkSpace Comment to Rating Reducer
    workSpaceComment = (event) => {
        console.log('Comment', event.target.value);
        this.props.dispatch({ type: 'SET_EXPERIENCE_COMMENT', payload: event.target.value })
    }

    render() {
        const style = this.props.classes

        return (
            <div>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    className={style.inputs}
                >

                    <h1>Review This Travel Destination</h1>
                    {/* Display location being reviewed */}
                    {this.props.reviewDetail.map((detail => {
                        return (
                            <h2 key={detail.id}>{detail.city}, {detail.country}</h2>
                        )
                    }))}
              
                <div>
                    <h3> Any CoWorking Spaces? </h3>
                        <TextField onChange={this.workSpaceName} type="text" placeholder="Name" />
                        <TextField onChange={this.workSpaceAddress} type="text" placeholder="Address" />
                        <TextField onChange={this.workSpaceCity} type="text" placeholder="City" />
                        <TextField onChange={this.workSpaceCountry} type="text" placeholder="Country" />
                        <TextField onChange={this.workSpaceZip} type="text" placeholder="Zip Code" />
                </div>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    className={style.inputBox}
                >
                <div>
                    <h3>Experience</h3>
                    {/* <input onChange={this.workSpaceComment} className="experienceBox" type="text" /> */}
                        <TextField
                            id="filled-multiline-flexible"
                            label="Review"
                            multiline
                            rowsMax="4"
                            margin="normal"
                            helperText="Experience"
                            variant="filled"
                            onChange={this.workSpaceComment}
                        />
                    </div>
                    <div>
                        {/* Button will capture id for POSTING */}
                        <Button variant="contained" color="secondary" onClick={this.submitPageHandler}>Submit</Button>
                    </div>
                </Grid>

                    {/* Component of Review Ratings */}
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
            </div>
        )
    }
}


const mapReduxState = (reduxState) => {
    return {

        reviewDetail: reduxState.addReviewDetailReducer,
        ratingReview: reduxState.ratingReducer
    }
}

export default withStyles(styles)(connect(mapReduxState)(AddReview));
