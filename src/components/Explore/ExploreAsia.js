import React from 'react';
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Rating from 'react-rating';
import { Star, StarBorder } from '@material-ui/icons';
import { withRouter } from "react-router";


const styles = {
    img: {
        height: '200px',
        width: '300px'
    },
    card: {
        margin: '20px',
        width: '300px'
    },
    locationName: {
        fontSize: '20px',
        textAlign: 'center',
        marginTop: '7px',
        marginBottom: '-40px'
    },
    title: {
        marginLeft: '15px'
    }
}


class Explore extends React.Component {

    // Click image and send to Travel Page
    imageClickHandler = (id) => {
        console.log('Clicked Image', id);
        this.props.history.push(`/travelpage/${id}`)
    }

    render() {

        const style = this.props.classes
        return (
            <>
                <div>
                    <h1 className={style.title}>South East Asia</h1>
                </div>
                <>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                    >

                        {this.props.explore.map((items => {
                            return (
                                <Grid item xs={3}>
                                    <div className="exploreCards" key={items.id} >
                                        <Card className={style.card}>
                                            <CardActionArea>
                                                <CardMedia onClick={() => this.imageClickHandler(items.id)}>
                                                    <img src={items.image} alt="travel" className={style.img} />
                                                    <Typography variant="body2" color="textPrimary" component="p" className={style.locationName}>
                                                        {items.city}, {items.country}
                                                    </Typography>
                                                </CardMedia>
                                                <CardContent className="cardBody">
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions className="cardActions">
                                                Reconmmend:<Rating initialRating={items.avg}
                                                    start={0}
                                                    stop={5}
                                                    readonly className={style.rating}
                                                    emptySymbol={<StarBorder />}
                                                    fullSymbol={<Star />}
                                                /
                                                >
                                            </CardActions>
                                        </Card>
                                    </div>
                                </Grid>
                            )
                        }))}
                    </Grid>
                </>
            </>
        )
    }
}


const mapReduxState = (reduxState) => {
    return {
        explore: reduxState.exploreReducer
    }
}

export default withStyles(styles)(connect(mapReduxState)(withRouter(Explore)));


