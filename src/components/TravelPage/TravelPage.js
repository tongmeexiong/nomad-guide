import React from 'react';
import { connect } from 'react-redux'
import TravelSafeRating from '../TravelPageRating/SafeTravelRating'
import EnglishStarRatings from '../TravelPageRating/EnglishTravelRating'
import CostStarRatings from '../TravelPageRating/CostTravelRating'
import FriendStarRatings from '../TravelPageRating/FriendlyTravelRating'
import ReconmendStarRatings from '../TravelPageRating/ReconmendTravelPage'
import { Grid, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from '@material-ui/core/Avatar';



import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
    rating: {
        height: '30px',
        width: '300px',
        marginRight: '100px',
        marginTop: '-770px',
        fontSize: '14.7px',
        position: 'static'
    },
    image: {
        marginLeft: '50px',
        height: '500px',
        width: '900px',
        marginTop: '10px'
    },
    locationName: {
        marginLeft: '70px',
        marginTop: '5px'
    },
    appBar: {
        flexGrow: '1',
        marginLeft: '50px',
        backgroundColor: theme.palette.background.paper,
        width: '900px',
        color: 'black'
    },
    bigAvatar: {
        margin: '5px',
        marginTop: '-30px'

    },
    reviewComment: {
        marginLeft: '30px'
    },
    username: {
        marginLeft: '7px',
        marginTop: '-5px'

    },
    comment: {
        marginLeft: '100px'
    },
    button: {
        marginLeft: '50px'
    },
    workSpace: {
        marginTop: '-15px',
        textAlign: 'flex-start', 
        marginBottom: '-10px'
    },
   
});



function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}


class TravelPage extends React.Component {




    state = {
        heartToggle: false,
        value: 0
    }
    // Send Match ID to GET Route for specific information. Reviews and Travel Destinations.  
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_TRAVEL_PAGE_REVIEWS', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_TRAVEL_PAGE_DETAILS', payload: this.props.match.params.id })
        this.props.dispatch({ type: 'FETCH_FAVORITE' })
        this.props.dispatch({ type: 'FETCH_COMMENT', payload: this.props.match.params.id })

        window.scrollTo(0, 0)
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    toggleHeart = (id) => {
        console.log('Heart', id);

        if (!this.state.heartToggle) {
            this.setState({
                heartToggle: true
            })
            this.props.dispatch({ type: 'POST_FAVORITE', payload: { travel_page_id: id } })
        } else {
            this.setState({
                heartToggle: false
            })
            this.props.dispatch({ type: 'DELETE_FAVORITE', payload: id })

        }
    }

    displayHeart = (id) => {
        if (this.state.heartToggle) {
            return <FavoriteIcon style={{ color: "#d50000" }} />;
        } else {
            return <FavoriteIcon />;
        }
    };


    // Set Travel ID into Reducer and go to Review Page 
    reviewPageHandler = (id) => {
        this.props.dispatch({ type: 'SET_TRAVEL_ID', payload: this.props.match.params.id })
        this.props.history.push(`/addreview/${id}`)
    }

    render() {
        const style = this.props.classes
        console.log('Checking', this.props.favorite.travel_page_id);
        const { value } = this.state;


        return (
            <div>

                <div>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                                                {this.props.travelDetail.map((detail => {
                            return (
                                <div key={detail.id}>
                                    <div>
                                        <img src={detail.image} alt="travel location" className={style.image} />
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className={style.locationName}> {detail.city}, {detail.country} <IconButton
                                                aria-label="Add to favorites"
                                                onClick={() => this.toggleHeart(detail.id)}
                                            >
                                                {this.displayHeart()}
                                            </IconButton> </h2>
                                            <div>
                                                <AppBar className={style.appBar} position="static">
                                                    <Tabs value={value} onChange={this.handleChange}>
                                                        <Tab label="Reviews" />
                                                        <Tab label="Coworkning Spaces" />
                                                    </Tabs>
                                                </AppBar>
                                                {this.props.comment.map((comment => {
                                                    return (
                                                        <div className={style.reviewComment}>
                                                            {value === 0 && <TabContainer>

                                                                <div>
                                                                    <div className={style.comment}>
                                                                        {comment.experience_comment}
                                                                    </div>
                                                                    <div>
                                                                        <Avatar alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQznbX_RRa464XPVEEz2UlxBKdu6mt6tgvIkakuNS8OoccPxvN" className={style.bigAvatar} />
                                                                        {/* <div className={style.username}> {comment.username} </div> */}
                                                                    </div>

                                                                </div>

                                                            </TabContainer>}
                                                            {value === 1 && <TabContainer>
                                                                
                                                                <div>
                                                                    <div className={style.workSpace}>
                                                                        <h3> {comment.coworking_space_name}</h3>
                                                                    </div>
                                                                    <div>
                                                                        {comment.coworking_space_address},
                                                                        {comment.coworking_space_city},
                                                                        {comment.coworking_space_country},
                                                                        {comment.coworking_space_zip}

                                                                    </div>
                                                                    {/* <div>
                                                                        <Avatar alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQznbX_RRa464XPVEEz2UlxBKdu6mt6tgvIkakuNS8OoccPxvN" className={style.bigAvatar} />
                                                                    </div> */}

                                                                </div>
                                                                
                                                            </TabContainer>}
                                                        </div>)
                                                }))}

                                            </div>
                                            <Button className={style.button} variant="contained" color="secondary" onClick={() => this.reviewPageHandler(detail.id)}>Review</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }))}
                    </Grid>

                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-end"
                    >
                        {this.props.travelReviews.map((items => {
                            return (
                                <div key={items.id}>

                                    <Grid item xs={6} className={style.rating}>
                                        <h2>Saftey</h2>
                                        <TravelSafeRating rating={items} />
                                        {/* </Grid>
                                <Grid item xs={6}> */}
                                        <h2>English</h2>
                                        <EnglishStarRatings rating={items} />
                                        {/* </Grid>
                                <Grid item xs={6}> */}
                                        <h2>Cost</h2>
                                        <CostStarRatings rating={items} />
                                        {/* </Grid>
                                <Grid item xs={6}> */}
                                        <h2>Friendliness</h2>
                                        <FriendStarRatings rating={items} />
                                        {/* </Grid>
                                <Grid item xs={6}> */}
                                        <h2>Recommend</h2>
                                        <ReconmendStarRatings rating={items} />
                                    </Grid>
                                </div>

                            )
                        }))}
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapReduState = (reduxState) => {
    return {
        travelReviews: reduxState.travelPageReviewReducer,
        travelDetail: reduxState.travelPageDetailReducer,
        favorite: reduxState.getFavoriteReducer,
        comment: reduxState.commentReducer
    }
}

export default withStyles(styles)(connect(mapReduState)(TravelPage));
