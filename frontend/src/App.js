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
      </BrowserRouter>
    );
}

export default App;