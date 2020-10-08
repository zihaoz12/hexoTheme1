import React from 'react';
import "./header.scss";

import {Link} from 'react-router-dom';

const Header = ()=>{
    return(
        <div>
            <header>
                <div className="container">
                    <a className="homebutton" ><span><Link to="/"><i className="fas fa-home"></i></Link></span></a>
                    <nav>
                        <a><span><Link to="/login"><i className="fas fa-user-alt"></i></Link></span></a>
                        <a><span><Link to='/profile'><i className="fas fa-address-book"></i></Link></span></a>
                        <a><span><Link to="/about"><i className="fas fa-ban"></i></Link></span></a>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Header;