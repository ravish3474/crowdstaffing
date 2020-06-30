import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class ChangePassword extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Change Password</h5>
           
           <div className=" mt-4 bckloGry ">
            
               <div className="mt-4 w-50 mr-auto">
                    <form className="UJUFom">
                        <div className="form-group">  
                            <label>Current Password</label>
                            <input type="" className="form-control" placeholder="Current Password"/>
                        </div>
                        <div className="form-group">  
                            <label>New Password</label>
                            <input type="" className="form-control" placeholder="New Password"/>
                        </div>
                        <div className="form-group">  
                            <label>Confirm Password</label>
                            <input type="" className="form-control" placeholder="Confirm Password"/>
                        </div>
                        
                        <button className="ml-2 btn btn-success py-2 px-4">Upload CV </button>
                       
                    </form>
               </div>
           </div>
        
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default ChangePassword;