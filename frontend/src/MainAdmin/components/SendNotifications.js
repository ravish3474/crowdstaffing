import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class SendNotifications extends Component {
    
   
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Send Notifications to All</h5>
                               
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2 W50">
                                <form className="mt-4">
                                    <div className=" form-group">
                                        <label>Type Your Notification</label>
                                        <div className="">
                                            <textarea  name="" className="form-control" placeholder="Write your notification here" >
                                                </textarea>
                                             
                                        </div>
                                    </div>
                                    <div className=" form-group">
                                       
                                        <div className="">
                                            <select className="form-control" name="">
                                                <option selected disabled>Select</option>
                                                <option  value="">Candidate</option>
                                                <option  value="">Job Agency</option>
                                                <option  value="">Company</option>
                                            </select>
                                             
                                        </div>
                                    </div>    
                                   

                                    <div className="">
                                        <button className="btn btn-info">Submit</button>    
                                        <button className="ml-3 border btn btn-default" type="button">Cancel</button>
                                    </div>  
                                </form>
                            </div>

                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                <h5>Recent SendNotifications</h5>
                                <hr/>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="">
                                            <div className="border p-2 Pnk">
                                                <span> <span><i class="far fa-bell"></i></span><small className="ml-2">Your shopping cart is empty</small></span>
                                                <span className="PosuT pointer"><i class="far fa-window-close"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default SendNotifications;