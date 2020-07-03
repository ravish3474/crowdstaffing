import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';

class JobSeeker extends Component {
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Job Seeker</h5>
                                <div className="dsaIcon w-50 m-auto">
                                    <input type="text" placeholder="" className="form-control "/> 
                                    <span className=" IconSE"><i className="fas fa-search"></i></span>
                                </div>
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                

                                <div className="">
                                    <div className="row mt-3 shadow p-3 mx-0">
                                        <div className="col-md-1">
                                            <div className="">
                                                <img src={require("../../assets/images/client2.png")} className="img-fluid w-100"/>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="">
                                                <h6 className="mb-0">Lori Ramos</h6>
                                                <small>UX/UI Designer</small>
                                                <div className="row mx-0">
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            <small className="fnt500">Location</small><br/>
                                                            <small className="colGry"><i className="fas fa-map-marker-alt"></i> <span>England</span></small> 
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            <small className="fnt500">Rate</small><br/>
                                                            <small className="colGry"> <span>$12.00 hour</span></small> 
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            <small className="fnt500">Job Success</small><br/>
                                                            <small className="colGry"> <span>95%</span></small> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="m-3 text-right">
                                                <Link to="/admin-panel/jobseeker/profile" className="btn btn-default border px-3 py-2">Edit Profile</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3 shadow p-3 mx-0">
                                        <div className="col-md-1">
                                            <div className="">
                                                <img src={require("../../assets/images/client2.png")} className="img-fluid w-100"/>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="">
                                                <h6 className="mb-0">Lori Ramos</h6>
                                                <small>UX/UI Designer</small>
                                                <div className="row mx-0">
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            <small className="fnt500">Location</small><br/>
                                                            <small className="colGry"><i className="fas fa-map-marker-alt"></i> <span>England</span></small> 
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            <small className="fnt500">Rate</small><br/>
                                                            <small className="colGry"> <span>$12.00 hour</span></small> 
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="">
                                                            <small className="fnt500">Job Success</small><br/>
                                                            <small className="colGry"> <span>95%</span></small> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="m-3 text-right">
                                                <Link to="/admin-panel/jobseeker/profile" className="btn btn-default border px-3 py-2">Edit Profile</Link>
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

export default JobSeeker;