import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class UserDashboard extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h5>Dashboard</h5>
           
           <div className="mt-3">
               <div className="">
                   <div className="row">
                        <div className="col-md-3">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="far fa-paper-plane"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">5249</h4>
                                        <span className="">
                                            Applied
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="far fa-star"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">249</h4>
                                        <span className="">
                                            Favorite
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                        <div className="col-md-3">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="far fa-bell"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">549</h4>
                                        <span className="">
                                            Alerts
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="fas fa-tag"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">249</h4>
                                        <span className="">
                                            Latest Packages
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                   </div>
               </div>
           </div>

           <div className="row mt-4">
               <div className="col-md-8">
                    <div className="HirD bckloGry">
                        <div className="row mx-0">
                            <div className="col-md-6">
                                <h5>Recent Apply Jobs</h5>
                            </div>
                            <div className="col-md-6">
                                <Link to=''> <span className="text-success">Browse All Jobs</span></Link>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="row m-0 mt-3 py-3 border-bottom">
                                
                                <div className="col-md-6">
                                    <div className="mt-2 OOuN">
                                        <h6 className="mb-0">Rahim Malik</h6>
                                        <small className="colGry">App Designer</small><br/>
                                       

                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-center">
                                        <small className="colGry"><i class="fas fa-map-marker-alt"></i> Location</small>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-center mt-3">
                                        <span className="Pnk py-1 px-2 ml-2 rounded" title="Edit"><small><i class="fas fa-pencil-alt"></i></small></span>
                                        <span className="PBJ py-1 px-2 ml-2 rounded" title="Delete"><small><i class="far fa-trash-alt"></i></small></span>
                                    </div>
                                </div>
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

export default UserDashboard;