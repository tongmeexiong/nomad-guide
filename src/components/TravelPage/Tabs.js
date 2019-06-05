import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// function TabContainer({ children, dir }) {

//     return (
//         <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//             {children}
//         </Typography>
//     );
// }

// TabContainer.propTypes = {
//     children: PropTypes.node.isRequired,
//     dir: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles(theme => ({
//     root: {
//         backgroundColor: theme.palette.background.paper,
//         width: 250,
//     },
// }));

// function FullWidthTabs() {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [value, setValue] = React.useState(0);

//     function handleChange(event, newValue) {
//         setValue(newValue);
//     }

//     function handleChangeIndex(index) {
//         setValue(index);
        
//     }

class tabsComment extends React.Component {
    render(){

    return (

        <div >
            <AppBar position="static" color="default">
                <Tabs
                    // value={value}
                    // onChange={handleChange}
                    // indicatorColor="primary"
                    // textColor="primary"
                    // variant="fullWidth"
                >
                goodmorning
                    {/* <Tab label="Occupation" /> */}
                </Tabs>
            </AppBar>
            <SwipeableViews>
                <tab> Hello</tab>
                {/* <TabContainer >hello</TabContainer> */}
                {/* {this.props.review.experience_comment} */}
            </SwipeableViews>
        </div>
    );
}
}

export default connect()(tabsComment)