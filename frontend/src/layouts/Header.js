import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return <nav className="navbar navbar-expand-lg navbar-light container">
                <Link to='/' className="navbar-brand W20">
                    <img src={require("../assets/images/Xhirez-Logo.png")} className="img-fluid  w-50"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
      
        <div className="collapse navbar-collapse bg_white" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto pl-3">
            <li className="nav-item ">
              <Link to="/home" className="nav-link active" href="#">Home </Link>
            </li>
            <li className="nav-item">
              <Link to="for-business" className="nav-link" href="#">For Business</Link>
            </li>
              <li className="nav-item">
              <Link to="for-staffing-agencies" className="nav-link" href="#">For Staffing Agencies</Link>
            </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Feature</a>
            </li>
      
          </ul>
          <div className="form-inline my-2 my-lg-0 fnt500">
           <Link to="login" className="colGry ">
              <img src={require("../assets/images/Login-Icon.png")} className="img-fluid"></img>
                <span className="ml-2">LOGIN</span>
            </Link> 
           <span className="mx-1">/</span>
           <Link to="register" className="colGry">
               <span className="ml-2">REGISTER</span>
            </Link>
             
          </div>
        </div>
      </nav>
    }
}

export default Header;