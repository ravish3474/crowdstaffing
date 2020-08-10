import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return  <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>SYOLO</h3>
                        <strong>S</strong>
                    </div>
                    <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={ this.onBtnClick }>
                        <i className="fas fa-align-left"></i>
                        <span></span>
                    </button>
                    <ul className="list-unstyled components">
                        <li className="active">
                            {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fas fa-home"></i>
                                Home
                            </a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul> */}
                            <Link to="/admin-panel">
                                <i className="fas fa-briefcase"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fas fa-briefcase"></i>
                                Send Messages
                            </Link>
                            {/* <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fas fa-copy"></i>
                                Pages
                            </a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">Page 1</a>
                                </li>
                                <li>
                                    <a href="#">Page 2</a>
                                </li>
                                <li>
                                    <a href="#">Page 3</a>
                                </li>
                            </ul> */}
                        </li>
                        <li>
                            <Link to="#">
                                <i className="fas fa-image"></i>
                               Role and Authentication
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/send-notifications">
                                <i className="fas fa-question"></i>
                                Send Notifications
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/recent-jobs">
                                <i className="fas fa-paper-plane"></i>
                                Recent Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/add-job-category">
                                <i className="fas fa-unlock"></i>
                               Job Category
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/search">
                                <i className="fas fa-sign-out-alt"></i>
                                Search
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="far fa-trash-alt"></i>
                               Generate Report
                            </Link>
                        </li>
                    </ul>

                    
                </nav>
       
    }
    onBtnClick() {
        $('#sidebar').toggleClass('active');
    }
}
export default Sidebar;