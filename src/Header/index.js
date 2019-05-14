import React,{Component} from 'react';
import "./header.css";

class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <header>
                    <div className="container">
                        <a className="homebutton" href="#"><span><i className="fas fa-home"></i></span></a>
                    <nav>
                        <a><span><i className="fas fa-user-alt"></i></span></a>
                        <a><span><i className="fas fa-address-book"></i></span></a>
                        <a href="testing.html"><span><i className="fas fa-ban"></i></span></a>
                    </nav>
                    </div>
                </header>
            </div>
        )
    };
}

export default Header;