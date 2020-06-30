import React, { Component } from 'react';
import $ from 'jquery';

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
                            <a href="#">
                                <i class="fas fa-briefcase"></i>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-briefcase"></i>
                                Send Messages
                            </a>
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
                            <a href="#">
                                <i class="fas fa-image"></i>
                               Role and Authentication
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-question"></i>
                                Send Notifications
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-paper-plane"></i>
                                Recent Jobs
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-unlock"></i>
                                Category Job Postings
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fas fa-sign-out-alt"></i>
                                Search
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i class="far fa-trash-alt"></i>
                               Generate Report
                            </a>
                        </li>
                    </ul>

                    
                </nav>
       
    }
    onBtnClick() {
        $('#sidebar').toggleClass('active');
    }
}
export default Sidebar;