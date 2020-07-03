import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';

class MainDashboard extends Component {
    render() {
        return <section>
                    <div class="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Dashboard</h5>
                        
                            <div className="mt-3 p-4 colBlk bg-white bordRad_2">
                                <div className="">
                                    <h5 className="my-3 ">Job Seeker</h5>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <small>Total Job Seeker</small>
                                                <h3 className="colBlu">12</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center">
                                            <small>Pending</small>
                                                <h3 className="colBlu">12</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center">
                                                <small>Rejected</small>
                                                <h3 className="text-danger">12</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="text-center">
                                                <Link to="/jobseeker" className="btn btn-default border">Manage</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="">
                                    <h5 className="my-3 ">Job Recruiter</h5>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="text-center">
                                                <small>Total Recruiter</small>
                                                <h3 className="colBlu">12</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center">
                                                <small>Pending</small>
                                                <h3 className="colBlu">12</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="text-center">
                                                <small>Rejected</small>
                                                <h3 className="text-danger">12</h3>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="text-center">
                                                <Link to="/recruiter" className="btn btn-default border">Manage</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-5">
                                    <div className="bg-white bordRad_2 p-3">
                                        <div className="dsp_p">
                                            <span><h5>Top Company</h5></span>
                                            <small><a className="colBlu">See All</a></small>
                                        </div>
                                       
                                        <div className="dsp_p mt-2">
                                            <small>Microsoft</small>
                                            <small><a className="">233</a></small>
                                        </div>
                                        <div className="dsp_p">
                                            <small>TCS</small>
                                            <small><a className="">232</a></small>
                                        </div>
                                        <div className="dsp_p">
                                            <small>Apple</small>
                                            <small><a className="">23</a></small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="bg-white bordRad_2 p-3">
                                        <div className="dsp_p">
                                            <span><h5>Top Consulting  / <span className="colGry">Recruiter</span></h5></span>
                                            <small><a className="colBlu">Jobs</a></small>
                                        </div>
                                       
                                        <div className="dsp_p mt-2">
                                            <small>Group A</small>
                                            <small><a className="">233</a></small>
                                        </div>
                                        <div className="dsp_p">
                                            <small>Jobs Vise</small>
                                            <small><a className="">232</a></small>
                                        </div>
                                        <div className="dsp_p">
                                            <small>Carrier My</small>
                                            <small><a className="">23</a></small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="text-center bg-white bordRad_2 p-3 OOuN">
                                        <h5 className="mb-0">Visitors</h5>
                                            <small className="colGry">avrg</small>
                                        <h3 className="colBlu mb-0">18,00</h3>
                                        <small className="colBlu">per day</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            </section>

   
    } 
   
}

export default MainDashboard;