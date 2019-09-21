import React from 'react';

const Note = (props) => {
    return (
        <div style={{
        color: 'white',
            background: 'grey',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translate(-50%, -50%)'
    }}>
<span>{props.username}</span>
    <br/>

    <span>
    {props.note}
    </span>
    </div>
);
};

export default Note;