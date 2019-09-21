import React from 'react';

const CurrentLocationMarker=(props)=>{
    return (
        <div style={{
            color: 'white',
            background: 'red',
            padding: '5px 5px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translate(-50%, -50%)'
        }}>
            {'Current Location'}
        </div>
    );
};

export default CurrentLocationMarker;