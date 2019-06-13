import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';



import './Nav.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));



const Nav = (props) => (
  <div className="nav">
    <Link to="/explore">
      <h2 className="nav-title">NomadGuide</h2>
    </Link>
    <input type="text" placeholder="search"/>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
       
        {props.user.id ? 'Dashboard' : 'Login / Register'}
      </Link>
      <Link className="nav-link" to="/explore">
        Explore
          </Link>

      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/favorite">
            Favorites
      </Link>
          <Link className="nav-link" to="/addtravelreview">
            Add New Review
      </Link>
          <LogOutButton className="nav-link"/>
        </>
      )}

    </div>
  </div>
);


const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
