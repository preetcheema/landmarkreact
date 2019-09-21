import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="row">
            <div className="col-md-8 col-sm-10">Hi {props.firstName}!</div>
            <div className="col-md-4 col-sm-2"><p>
                <Link to="/login">Logout</Link>
            </p></div>
        </div>
    );
};

export default Header;