import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="row">
            <div className="col-md-10 col-sm-8">Hi {props.firstName}!</div>
            <div className="col-md-2 col-sm-4"><p>
                <Link to="/login">Logout</Link>
            </p></div>
        </div>
    );
};

export default Header;