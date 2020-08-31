import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

                            <Link to='/company-panel'>

                                <i class="fas fa-briefcase"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to='/company-panel/company-profile'>
                                <i class="fas fa-briefcase"></i>
                                Company Profile
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
                            <Link to='/company-panel/post-new-job'>
                                <i class="fas fa-image"></i>
                                Post New Job
                            </Link>
                        </li>
                        <li>
                            <Link to='/company-panel/manage-jobs'>
                                <i class="fas fa-question"></i>
                                Manage Jobs
                            </Link>
                        </li>
                        <li>
                            <Link to='/company-panel/shortlisted-resume'>
                                <i class="fas fa-paper-plane"></i>
                                Shortlisted Resumes
                            </Link>
                        </li>
                        <li>
                            <Link to='/company-panel/job-applications-list'>
                                <i class="fas fa-paper-plane"></i>
                               Job Applications
                            </Link>
                        </li>
                        <li>
                            <Link to='/company-panel/job-interviews'>
                                <i class="fas fa-paper-plane"></i>
                               Job Interviews
                            </Link>
                        </li>
                        <li>
                            <Link to='/company-panel/job-seeker'>
                                <i class="fas fa-paper-plane"></i>
                               Job Seeker
                            </Link>
                        </li>
                        <li>
                            <Link to='/company-panel/skills-list'>
                                <i class="fas fa-paper-plane"></i>
                                Skills 
                            </Link>
                        </li>
                        <li>
                            <Link to=''>
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
                        {/* <li>
                            <Link to=''>
                            <i class="far fa-trash-alt"></i>
                                Delete Profile
                            </Link>
                        </li> */}
                    </ul>

                    
                </nav>
       
    }
    onBtnClick() {
        $('#sidebar').toggleClass('active');
    }
}
export default Sidebar;