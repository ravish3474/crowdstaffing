import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Login.css';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class LoginMainAdmin extends Component {
    
   
    render() {
        
        return <section>
                    <div className="wrapper1 fadeInDown">
                        <div id="formContent">
                           
                            <div className="fadeIn first">
                                <img src={require("../../assets/images/Xhirez-Logo.png")} className="img-fluid  w-50"></img>
                            <h1>Admin Panel</h1>
                            </div>

                            <form>
                                <input type="text" id="login" className="Chaks fadeIn second" name="login" placeholder="username"/>
                                <input type="text" id="password" className="Chaks fadeIn third" name="login" placeholder="password"/>
                                <input type="submit" className="fadeIn Chaks  fourth" value="Log In"/>
                            </form>

                           

                        </div>
                        </div>
            
            </section>  
    } 
   
}

export default LoginMainAdmin;