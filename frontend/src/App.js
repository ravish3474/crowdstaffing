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
import PostNewJob from './admin/components/PostNewJob';
import Employee from './admin/components/Dashboard';
import Employeer from './MainAdmin/components/MainDashboard';


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
      <Route path="/admin-panel/jobseeker" component={ JobSeeker } />  
      <Route path="/admin-panel/jobseeker/profile" component={ JobSeekerProfile } />  
      <Route path="/admin-panel/recent-jobs" component={ RecentJobs } />   
      <Route path="/admin-panel/search" component={ Search } />   
        
      <Route path="/admin-panel/recruiter" component={ RecruiterManage } />   
      <Route path="/admin-panel/recruiter/profile" component={ RecruiterProfile } />   
      {/* Admin Pannel */}

      <Route path="/user-panel" exact={true} component={ PostNewJob } />   
      </BrowserRouter>
    );
}

export default App;