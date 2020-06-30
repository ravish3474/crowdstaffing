import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Header extends Component {
    render() {
        return <nav class="navbar_b">
        <div class="container-fluid">

           
            {/* <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-align-justify"></i>
            </button> */}

            <div class="text-right d-flex" id="">
                <ul class="list-unstyled m-0 p-0 ml-auto d-flex" >
                    {/* <li class="nav-item active">
                        <a class="nav-link" href="#">Page</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Page</a>
                    </li>*/}
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="far fa-bell"></i>
                        <small className="text-danger bLicn"><i class="fas fa-circle"></i></small>
                        </a>
                        
                    </li> 
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle dropdown33" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <img src={require("../../assets/images/client1.png")} className="img-fluid PPInk" />
                        </a>
                        <div class="dropdown-menu Driop_mn" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Logout</a>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    }
}

export default Header;