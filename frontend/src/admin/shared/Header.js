import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Link, Redirect} from 'react-router-dom'
import '../css/Admin.css';
class Header extends Component {
    constructor(props){
        super(props);
        const compToken= localStorage.getItem('company_token');
        let loggedIn= true;
        if(compToken==null){
            loggedIn=false;
        }
        this.state={
            loggedIn
        }
        this.onClickLogout= this.onClickLogout.bind(this);
    }
    componentDidMount(){
            if(this.state.loggedIn){
                // axio.get();
            }
    }
    onClickLogout(e){
       
        this.setState({
            loggedIn:false
        })
    }
    render() {
        if(this.state.loggedIn==false){
            return <Redirect to="/company-login"/>
        }
        
        return <nav className="navbar_b">
        <div className="container-fluid">
        {/* <input type="submit" value="Log Out" onClick={this.onClickLogout}/> */}
            {/* <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-align-justify"></i>
            </button> */}

            {/* <div className="text-right d-flex" id="">
                <ul className="list-unstyled m-0 p-0 ml-auto d-flex" >
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="far fa-bell"></i>
                        <small className="text-danger bLicn"><i className="fas fa-circle"></i></small>
                        </a>
                        
                    </li> 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle dropdown33" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <img src={require("../../assets/images/client1.png")} className="img-fluid PPInk" />
                        </a>
                        <div className="dropdown-menu Driop_mn" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="javascript:void(0)" onClick={this.onClickLogout}>Logout</a>
                            
                        </div>
                    </li>
                </ul>
            </div> */}
        </div>
    </nav>
    }
}

export default Header;