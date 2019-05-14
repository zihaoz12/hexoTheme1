import React, {Component} from "react";
import './footer.css';

class Footer extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <p>©Copyright 2019 by
                            <a href="#">
                                Hello world
                            </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;