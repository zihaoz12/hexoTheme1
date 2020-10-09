import React from 'react';
import "./header.scss";

import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <div>
            <header>
                <div className="container">
                    <Link to="/"><i className="fas fa-home"></i></Link>
                    <nav>
                        <Link to="/login"><i className="fas fa-user-alt"></i></Link>
                        <Link to='/profile'><i className="fas fa-address-book"></i></Link>
                        <Link to="/about"><i className="fas fa-ban"></i></Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header;