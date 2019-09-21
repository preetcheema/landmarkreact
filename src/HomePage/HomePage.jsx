import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import Header from "../Header/Header";
import Map from "../Map/Map";

class HomePage extends React.Component {
    state = {
        notes: [],
        center: null,
        zoom: 11,
        errorMessage: '',
        currentLocation: null
    };

    constructor(props){
        super(props);

        this.getBody = this.getBody.bind(this);
        this.fetchData = this.fetchData.bind(this);

    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    currentLocation: {lat: position.coords.latitude, lng: position.coords.longitude},
                    center: {lat: position.coords.latitude, lng: position.coords.longitude}
                });
            },
            (error) => this.setState({errorMessage: error.message})
        );
    }

    fetchData(event) {
        console.log('inside fetch data', event);

        fetch("https://localhost:5001/api/notes",{headers:{ 'Access-Control-Allow-Origin': '*'}})
            .then(res=>res.json())
            .then(result=>{
                console.log("result is: ",result);

                this.setState({notes:result});
            });
    }
    
    getBody(){
        if (this.state.errorMessage && !this.state.center) {
            return <div>Error:{this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.center) {
            return (<div className="row">
                <div className="col-md-8 col-sm-12">
                    <Map notes={this.state.notes} center={this.state.center} myLocation={this.state.currentLocation} onMapIdle={this.fetchData}/>
                </div>
                <div className="col-md-4 col-sm-12">
                    Comments go here
                </div>
            </div>);
        }
        return <div>Loading!</div>;
    }

    render() {
        const {user, users} = this.props;
        
        
        
        return <div className="container">
            <Header firstName={user.firstName}/>
            {this.getBody()}
        </div>
    }
}

function mapState(state) {
    const {authentication} = state;
    const {user} = authentication;
    return {user};
}


const actionCreators = {
    // getUsers: userActions.getAll,
    // deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export {connectedHomePage as HomePage};