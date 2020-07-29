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
                            <Link to='/user-panel'>
                                <i class="fas fa-briefcase"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to='/user-panel/user-profile'>
                                <i class="fas fa-briefcase"></i>
                                 Profile
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
                            <Link to='/user-panel/resume'>
                                <i class="fas fa-image"></i>
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link to='/user-panel/applied-jobs'>
                                <i class="fas fa-question"></i>
                                Applied Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to='/user-panel/cv-manager'>
                                <i class="fas fa-paper-plane"></i>
                                CV Manager
                            </Link>
                        </li>
                        <li>
                            <Link to='/user-panel/favorite-jobs'>
                            <i class="far fa-star"></i>
                                Favorite Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <i class="far fa-envelope"></i>
                                Messages
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <i class="far fa-list-alt"></i>
                                
                                Reviews
                            </Link>
                        </li>
                        
                        
                        <li>
                            <Link to='/user-panel/change-password'>
                                <i class="fas fa-unlock"></i>
                                Change Password
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                                <i class="fas fa-sign-out-alt"></i>
                                Logout
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
                            <i class="far fa-trash-alt"></i>
                                Delete Profile
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