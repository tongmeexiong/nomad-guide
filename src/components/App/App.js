import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

//Component Pages
import Favorites from '../Favorites/Favorites';
import DashBoard from '../DashBoard/DashBoard'
import Explore from '../Explore/Explore';
import AddReview from '../AddReview/AddReview'
import TravelPage from '../TravelPage/TravelPage'
import UpdateReview from '../UpdateReview/UpdateReview'
import AddTravel from '../AddTravel/AddTravel'

import './App.css';


class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            
            {/* Favorites Page */}
            <ProtectedRoute
              exact
              path="/favorite"
              component={Favorites}
            />

            {/* Route to add Travel Location */}
            <ProtectedRoute
              exact
              path="/addtravelreview"
              component={AddTravel}
            />

            {/*  Route for Updating the page with Matching the ID*/}
            <ProtectedRoute
              exact
              path="/update/:id"
              component={UpdateReview}
            />

            {/* Add Review Page from Travel Page */}
            <ProtectedRoute
              exact
              path="/addreview/:id"
              component={AddReview}
            />            

            {/*  Travel Page Route with Match Id */}
            <Route
              path="/travelpage/:id"
              component={TravelPage}
            />

            {/*  Explore Page Route */}
            <Route
              exact
              path="/explore"
              component={Explore}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={DashBoard}
            />
            
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
