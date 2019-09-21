import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import Header from "../Header/Header";
import Map from "../Map/Map";
import {authHeader} from "../_helpers";
import SearchBar from "../SearchBar/SearchBar";
import AddNote from "../AddNote/AddNote";

const {URL, URLSearchParams} = require('url');

const apiBaseUrl = "https://localhost:5001/api/notes";

class HomePage extends React.Component {
    state = {
        notes: [],
        filteredNotes: [],
        center: null,
        zoom: 11,
        errorMessage: '',
        currentLocation: null,
        initialDataLoad: false
    };


    constructor(props) {
        super(props);

        this.getBody = this.getBody.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.searchData = this.searchData.bind(this);
        this.fetchInitialData = this.fetchInitialData.bind(this);
        this.addNote = this.addNote.bind(this);

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

    addNote(text) {
        var currentUser = this.props.user;
        var note = {
            text: text,
            latitude: this.state.currentLocation.lat,
            longitude: this.state.currentLocation.lng
        };
       

        const requestOptions = {
            method: 'POST',
            headers: {...authHeader(), 'Content-Type': 'application/json'},
            body: JSON.stringify(note)
        };

        fetch(`${apiBaseUrl}`, requestOptions).then(result => {
            var createdNote = {
                userName: currentUser.userName,
                id: result,
                latitude: note.latitude,
                longitude: note.longitude,
                text: note.text,
                isMyNote: result === currentUser.id
            };
            var notes=this.state.notes.push(createdNote);
            this.setState({notes:notes});
        });
    }

    fetchInitialData(event) {
        if (this.state.initialDataLoad) {
            return;
        }
        console.log('inside fetch data', event);
        this.fetchData(apiBaseUrl);
    }

    searchData(username, searchTerm) {
        console.log('called searchData with ' + username + ' ' + searchTerm);

        var qryStr = `?username=${username}&searchTerm=${searchTerm}`;
        var url = `${apiBaseUrl}${qryStr}`;
        this.fetchData(url);
    }

    fetchData(url) {

        var currentUser = this.props.user;
        fetch(url, {headers: authHeader()})
            .then(res => res.json())
            .then(result => {
                console.log("got result, it is: ", result);
                var notes = [];
                result.forEach(function (item, index) {

                    item.notes.forEach(function (note, index) {
                        notes.push({
                            userName: item.userName,
                            id: note.id,
                            latitude: note.latitude,
                            longitude: note.longitude,
                            text: note.text,
                            isMyNote: item.id === currentUser.id
                        })
                    })
                });

                console.log('notes are ', notes);
                this.setState({notes: notes, initialDataLoad: true, filteredNotes: notes});

            });
    }


    getBody() {
        if (this.state.errorMessage && !this.state.center) {
            return <div>Error:{this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.center) {
            return (<div className="row">
                <div className="col-md-8 col-sm-12">
                    <Map notes={this.state.filteredNotes} center={this.state.center}
                         myLocation={this.state.currentLocation}
                         onMapIdle={this.fetchInitialData}/>
                </div>
                <div className="col-md-4 col-sm-12">
                    <SearchBar onSearch={this.searchData}/>
                    <hr/>
                    <div>
                        <AddNote onAdd={this.addNote}/>
                    </div>
                </div>

            </div>);
        }
        return <div>Loading!</div>;
    }

    render() {
        const {user, users} = this.props;


        return <div >
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