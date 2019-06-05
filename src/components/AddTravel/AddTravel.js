import React from 'react';
import { connect } from 'react-redux'



class AddTravel extends React.Component {

    state = {
        city: '',
        country: '',
        continent: '',
        image: ''
    }


    addTravelLocation = () => {
        console.log('Clicked Add Location');
        // Send Post Information to Database
        this.props.dispatch({
            type: 'POST_TRAVEL',
            payload: {
                city: this.state.city,
                country: this.state.country,
                continent: this.state.continent,
                image: this.state.image
            }
        })

        // Send information to Reducer
        this.props.dispatch({ type: 'SET_NEW_POST', payload: this.state })

        //Go to Review Page
        this.props.history.push("/addnewreview")
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

    render() {
        console.log('Review Page', this.state);

        return (
            <div>
                <div>
                    <h3> Review New Travel Destination</h3>
                    <input onChange={this.cityChangeHandler} type="text" placeholder="City" />
                    <input onChange={this.countryChangeHandler} type="text" placeholder="Country" />
                    <input onChange={this.imageHandler} type="text" placeholder="img url" />
                    <select onChange={this.continentChangeHandler} >
                        <option>Continent</option>
                        <option>North America </option>
                        <option>Asia </option>
                    </select>
                    <button onClick={this.addTravelLocation} >Add Travel</button>
                </div>
                
            </div>
        )
    }
}

export default connect()(AddTravel);
