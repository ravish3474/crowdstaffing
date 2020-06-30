import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class RecentJobs extends Component {
    render() {
        return <section>
                    <div class="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Recent Jobs</h5>
                               
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                

                                <div className="">
                                    <div className="row mt-3 shadow p-3 mx-0">
                                        <div className="col-md-1 px-0">
                                            <div className="border ">
                                                <img src={require("../../assets/images/client2.png")} className="img-fluid w-100 DSFG"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <span className="colBlu">Full Time</span>
                                                <h6 className="mb-0">Lori Ramos</h6>
                                                <span><span className="colGry">Posted 23 August by </span>&nbsp;
                                                <span className="colBlu"> Robert Half Finance & Accounting</span></span>
                                                <div className="row mx-0">
                                                    <div className="col-md-4">
                                                        <div className="">
                                                           
                                                            <small className="colGry"><i class="fas fa-map-marker-alt"></i> <span>England</span></small> 
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            
                                                            <small className="colGry"> <span>$12.00 hour</span></small> 
                                                        </div>
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

export default RecentJobs;