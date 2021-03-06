import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import axios from 'axios';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';

class MainDashboard extends Component {
    constructor(props){
        super(props);
        
        this.state={
            jobseeker:0,
            company_d:0,
            companies:[]
        }
        
    }
    componentDidMount(){
        axios.get('/jobSeeker/')
                    .then(response =>{
                        if(response.data.jobseeker.length >0){
                            // console.log("Array Count: "+response.data.jobseeker.length);
                            this.setState({
                                jobseeker:response.data.jobseeker.length
                            })
                        }
                    })
                    .catch(err => console.log("Error found: "+err));
        axios.get('/company/')
            .then(response =>{
                if(response.data.result.length >0){
                    // console.log("Array Count: "+response.data.jobseeker.length);
                    this.setState({
                        company_d:response.data.result.length,
                        companies:response.data.result.map(comp=>comp)
                    })
                }
            })
            .catch(err => console.log("Error found: "+err));
    }
    render() {
        return <section>
                    <div className="wrapper">
                
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
                                                <h3 className="colBlu">{this.state.jobseeker}</h3>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-3">
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
                                        </div> */}
                                        <div className="col-md-2">
                                            <div className="text-center">
                                                <Link to="/admin-panel/jobseeker" className="btn btn-default border">Manage</Link>
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
                                                <h3 className="colBlu">{this.state.company_d}</h3>
                                            </div>
                                        </div>
                                        {/* <div className="col-md-3">
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
                                        </div> */}
                                        <div className="col-md-2">
                                            <div className="text-center">
                                                <Link to="/admin-panel/recruiter" className="btn btn-default border">Manage</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">


                                
                                <div className="col-md-12">
                                
                                    <div className="bg-white bordRad_2 p-3">
                                        <label>Company List</label>
                                        <hr/>
                                        {
                                            this.state.companies.map(function(comapany){
                                                return <div className="dsp_p">
                                                            <span>{comapany.company_name}</span>
                                                            <small>
                                                                <Link to={'/admin-panel/recruiter/profile/'+comapany._id}>See Detial</Link>
                                                                
                                                            </small>
                                                        </div>
                                            })
                                        }
                                        
                                       
                                        {/* <div className="dsp_p mt-2">
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
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="col-md-5">
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
                                </div> */}
                            </div>
                        </div>
                    </div>
            
            </section>

   
    } 
   
}

export default MainDashboard;