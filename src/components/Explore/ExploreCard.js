import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    card: {
        maxWidth: 300
        ,
    },
    media: {
        height: 200,
    },
});

function MediaCard() {
    const classes = useStyles();
    return (
        <div className="cards">
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        // image={this.props.items.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
            </Card>

        </div>
    );

}

export default connect()(MediaCard);