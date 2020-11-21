import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CompanyHeader extends Component {
    render() {
    return (
    
        <section className="backPurl ">
           <nav className="navbar navbar-expand-lg navbar-light paduj5">
                <Link to='/' className="navbar-brand W20">
                    <img src={require("../../assets/images/Xhirez-Logo-White.png")} className="img-fluid  w_40"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
      
                <div className="collapse navbar-collapse bg_white" id="navbarSupportedContent">
                    <ul className="navbar-nav company_nav company_dash mt-3">
                        <li className="nav-item ">
                            <Link to="/company-panel" className="nav-link active" href="#">Home </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown"> Find Candidates  </a>
                            <ul className="dropdown-menu dropMenu py-0">
                                <li><a className="dropdown-item" href="#"> Advance Search</a></li>
                                <li><a className="dropdown-item" href="#"> Manage Search</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">Jobs  </a>
                            <ul className="dropdown-menu dropMenu py-0">
                                <li><Link to="/company-panel/post-new-job" className="dropdown-item" >Post Jobs</Link></li>
                                <li><Link to="/company-panel/post-walkin-job" className="dropdown-item" > Post Walkin Jobs</Link></li>
                                <li><Link to="/company-panel/manage-jobs" className="dropdown-item" > Manage Jobs</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">Email/ SMS</a>
                            <ul className="dropdown-menu dropMenu py-0">
                                <li><Link to="/company-panel/email-template" className="dropdown-item" > New Enail Template</Link></li>
                                <li><Link to="/company-panel/manage-email" className="dropdown-item" > Manage Email Template</Link></li>
                                {/* <li><Link to="/company-panel/manage-jobs" className="dropdown-item" > Email Dashboard</Link></li> */}
                            </ul>
                        </li>
                    </ul>
                    <div className="ml-auto mt-3">
                        <ul className=" ">
                            <li className="nav-item dropdown ">
                                <a className="nav-link  dropdown-toggle usrImg" href="#" data-toggle="dropdown">
                                    <img src={require("../../assets/images/user-dummy.png")} className="img-fluid"></img>
                                </a>
                                <ul className="dropdown-menu dropMenu userDrop py-0">
                                <li><a className="dropdown-item" href="#"> My Contact Details</a></li>
                                    <li><Link to="" className="dropdown-item" > My Recent Jobs</Link></li>
                                    <li><Link to="" className="dropdown-item" > My Recent Searches</Link></li>
                                    <li><Link to="" className="dropdown-item" > Change Password</Link></li>
                                    <li><Link to="" className="dropdown-item" > Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    
                        
                    </div>
                    </div> 
                </nav>
        </section>
           
    );
    }
}

export default CompanyHeader;