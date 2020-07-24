import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Splash from './components/Splash';
import Home from './components/Home';
import LoginFormat from './components/LoginFormat';
import Register from './components/Register';
import RecoverPassword from './components/RecoverPassword';
import OtpVerify from './components/OtpVerify';
import BusinessPage from './components/BusinessPage';
import Agencies from './components/Agencies';
import MainDashboard from './MainAdmin/components/MainDashboard';
import RecentJobs from './MainAdmin/components/RecentJobs';
import Search from './MainAdmin/components/Search';
import JobSeeker from './MainAdmin/components/JobSeeker';
import JobSeekerProfile from './MainAdmin/components/JobSeekerProfile';
import RecruiterManage from './MainAdmin/components/RecruiterManage';
import RecruiterProfile from './MainAdmin/components/RecruiterProfile';

import Employee from './admin/components/Dashboard';
import PostNewJob from './admin/components/PostNewJob';

import Employeer from './MainAdmin/components/MainDashboard';

import Dashboard from './admin/components/Dashboard';
import CompanyProfile from './admin/components/CompanyProfile';
import ManageJobs from './admin/components/ManageJobs';
import ShortlistedResumes from './admin/components/ShortlistedResumes';
import ChangePassword from './admin/components/ChangePassword';

import UserDashboard from './user-panel/components/UserDashboard';
import Profile from './user-panel/components/Profile';
import MyResume from './user-panel/components/MyResume';
import AppliedJobs from './user-panel/components/AppliedJobs';
import FavoriteJobs from './user-panel/components/FavoriteJobs';
import UserChangePassword from './user-panel/components/UserChangePassword';

function App() {
    return (
      <BrowserRouter>
      <Route path="/" exact={true} component={Splash} />
      <Route path="/Employee" component={Employee} />
      <Route path="/Employeer" component={Employeer} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={LoginFormat} />
      <Route path="/register" component={Register} />
      <Route path="/recover-password" component={RecoverPassword} />
      <Route path="/otp-verify" component={OtpVerify} />
      <Route path="/for-business" component={BusinessPage} />
      <Route path="/for-staffing-agencies" component={Agencies} />

      {/* Main Admin */}

      <Route path="/admin-panel" exact={true} component={ MainDashboard } />   
      <Route path="/admin-panel/jobseeker" exact={true} component={ JobSeeker } />  
      <Route path="/admin-panel/jobseeker/profile" exact={true} component={ JobSeekerProfile } />  
      <Route path="/admin-panel/recent-jobs" exact={true} component={ RecentJobs } />   
      <Route path="/admin-panel/search" exact={true} component={ Search } />   
        
      <Route path="/admin-panel/recruiter" exact={true} component={ RecruiterManage } />   
      <Route path="/admin-panel/recruiter/profile" exact={true} component={ RecruiterProfile } />   

      {/* Admin Pannel */}

      <Route path="/company-panel" exact={true} component={ Dashboard } />   
      <Route path="/company-panel/company-profile" exact={true} component={ CompanyProfile } />   
      <Route path="/company-panel/post-new-job" exact={true} component={ PostNewJob } />   
      <Route path="/company-panel/manage-jobs" exact={true} component={ ManageJobs } />   
      <Route path="/company-panel/shortlisted-resume" exact={true} component={ ShortlistedResumes } />   
      <Route path="/company-panel/change-password" component={ ChangePassword } />   

       {/* User Pannel */}

      <Route path="/user-panel" exact={true} component={ UserDashboard } />   
      <Route path="/user-panel/user-profile" exact={true} component={ Profile } />   
      <Route path="/user-panel/resume" exact={true} component={ MyResume } />   
      <Route path="/user-panel/applied-jobs" exact={true} component={ AppliedJobs } />   
      <Route path="/user-panel/Favorite-jobs" exact={true} component={ FavoriteJobs } />  
      <Route path="/user-panel/change-password" exact={true} component={ UserChangePassword } />  
      


      </BrowserRouter>
    );
}

export default App;