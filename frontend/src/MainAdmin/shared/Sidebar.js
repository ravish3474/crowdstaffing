import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return  <nav id="sidebar">
                    <div class="sidebar-header">
                        <h3>SYOLO</h3>
                        <strong>S</strong>
                    </div>
                    <button type="button" id="sidebarCollapse" class="btn btn-info" onClick={ this.onBtnClick }>
                        <i class="fas fa-align-left"></i>
                        <span></span>
                    </button>
                    <ul class="list-unstyled components">
                        <li class="active">
                            {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <i class="fas fa-home"></i>
                                Home
                            </a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
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
                                <i class="fas fa-briefcase"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i class="fas fa-briefcase"></i>
                                Send Messages
                            </Link>
                            {/* <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                                <i class="fas fa-copy"></i>
                                Pages
                            </a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
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
                                <i class="fas fa-image"></i>
                               Role and Authentication
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i class="fas fa-question"></i>
                                Send Notifications
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i class="fas fa-paper-plane"></i>
                                Recent Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i class="fas fa-unlock"></i>
                                Category Job Postings
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i class="fas fa-sign-out-alt"></i>
                                Search
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i class="far fa-trash-alt"></i>
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