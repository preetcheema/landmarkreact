import React from 'react';
import GoogleMapReact from 'google-map-react';
import CurrentLocationMarker from "../CurrentLocationMarker/CurrentLocationMarker";
import Note from "../Note/Note";



class Map extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props);
        //   return <div>This is Maps component</div>;
        return <div style={{height: '100vh', width: '100%'}}>
            <GoogleMapReact
                onChange={this.props.onMapIdle}
                bootstrapURLKeys={{key: 'AIzaSyDNVxoL3ZpNmi3573XxCKtQ4PWREW1JQ3I'}}
                defaultCenter={this.props.center}
                defaultZoom={11}
            >
                <CurrentLocationMarker lat={this.props.myLocation.lat} lng={this.props.myLocation.lng}/>
                {

                    this.props.notes.map((item, index) => {
                        return <Note key={item.id} lat={item.latitude} lng={item.longitude} note={item.text} username={item.userName} isMyNote={item.isMyNote}/>
                    })
                }

                
            </GoogleMapReact>
        </div>
    }
}

export default Map;