import React from 'react';
import { connect } from 'react-redux'
import UpdateSafeStarRatings from './UpdateSafeRating'
import UpdateEnglishStarRatings from './UpdateEnglishRating'
import UpdateCostStarRatings from './UpdateCostRating'
import UpdateFriendlyStarRatings from './UpdateFriendlyRating'
import UpdateReconmmendStarRatings from './UpdateReconmmendRating'
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Swal from 'sweetalert2';



const styles = {
    rating: {
        height: '30px',
        width: '300px',
        marginRight: '100px',
        marginLeft: '-900px',
        marginTop: '-400px',
        fontSize: '14.7px'
    },
    inputs: {
        marginLeft: '100px',

        marginTop: '-10px'
    },
    inputFields: {
        marginLeft: '20px'
    },
}

class UpdateReview extends React.Component {

// Get information on update page 
    componentDidMount() {
        this.props.dispatch({ type: 'GET_UPDATE_TRAVEL_REVIEW', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'SET_TRAVEL_ID', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_REVIEW', payload: this.props.exploreId })
    }


    submitPageHandler = (id) => {
        console.log('Submit');
        this.props.dispatch({ type: 'PUT_REVIEW', payload: { id: id, rating: this.props.rating } })
        Swal.fire(
            'Thank you for the Edit!'
        )
        this.props.history.push("/home")
    }



    experienceHandler = (event) => {
        console.log('experience', event.target.value);
        this.props.dispatch({ type: 'SET_EXPERIENCE_COMMENT', payload: event.target.value })
    }


    render() {
        console.log('ID Update', this.props.match.params.id);
        const style = this.props.classes
 
        return (
            <div className={style.inputFields}>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    className={style.inputs}
                ></Grid>
                {this.props.updateReview.map((items => {
                    return (
                        <div key={items.id}>
                            <h1>Edit Your Review </h1>
                            <h2>{items.city}, {items.country}</h2>

                            <div>
                                <h3> ADD CoWorking Spaces? </h3>
                                <TextField type="text" placeholder="Name" />
                                <TextField type="text" placeholder="Address" />
                                <TextField type="text" placeholder="City" />
                                <TextField type="text" placeholder="Country" />
                                <TextField type="text" placeholder="Zip Code" />
                            </div>
                            <h3>Experience</h3>
                            <div>
                                <TextField id="filled-multiline-flexible"
                                    label="Review"
                                    multiline
                                    onChange={this.experienceHandler}
                                    rowsMax="4"
                                    margin="normal"
                                    helperText="Experience"
                                    variant="filled"
                                />
                            </div>
                            <div>
                                <Button variant="contained" color="secondary" onClick={() => this.submitPageHandler(items.travel_page_id)}>Submit</Button>
                            </div>
                            <div>
                                <Grid
                                    container
                                    direction="column"
                                    justify="flex-start"
                                    alignItems="flex-end"
                                >
                                    <Grid item xs={6} className={style.rating}>
                                        <h2>Safety</h2>
                                        <UpdateSafeStarRatings rating={items} />
                                        <h2>English</h2>
                                        <UpdateEnglishStarRatings rating={items} />
                                        <h2>Cost</h2>
                                        <UpdateCostStarRatings rating={items} />
                                        <h2>Friendliness</h2>
                                        <UpdateFriendlyStarRatings rating={items} />
                                        <h2>Recommend</h2>
                                        <UpdateReconmmendStarRatings rating={items} />
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    )
                }))}
            </div>
        )
    }
}


const mapReduxState = (reduxState) => {
    return {
        explore: reduxState.exploreReducer,
        reviews: reduxState.reviewReducer,
        userReview: reduxState.updateReviewReducer,
        updateReview: reduxState.updateReviewGetReducer,
        rating: reduxState.ratingReducer,
    }
}

export default withStyles(styles)(connect(mapReduxState)(UpdateReview));

