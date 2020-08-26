import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class JobApplications extends Component {
    // constructor(props){

    // }
    render() {
     
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Job Applications</h4>
           
        
            <div className="bg-white mt-4 p-4">
                <h5>Candidates Profiles</h5>
                <div className="row mx-0 ">
                    <div className="col-md-4 mt-2">
                        <div className=" ">
                            <div className="pt-2">
                                <div className="row m-0 mt-3 py-3 border">
                                    <div className="col-md-3">
                                        <div className="text-center">
                                            <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="mt-2 OOuN">
                                            <Link to="/company-panel/job-applications/candidate-details"><h6 className="mb-0">Rahim Malik</h6></Link>
                                            <small className=""><span>App Designer</span><span className="text-info">@ Company A</span></small> <br/>
                                            <small ><span>Salary:</span>  <span className="colGry">$1200</span></small>

                                        </div>
                                    </div>
                                
                                    <div className="col-md-2">
                                        <div className="">
                                            <button className="btn btn-default mt-3"><i class="fas fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className=" ">
                            <div className="pt-2">
                                <div className="row m-0 mt-3 py-3 border">
                                    <div className="col-md-3">
                                        <div className="text-center">
                                            <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="mt-2 OOuN">
                                        <Link to="/company-panel/job-applications/candidate-details"><h6 className="mb-0">Rahim Malik</h6></Link>
                                            <small className=""><span>App Designer</span><span className="text-info">@ Company A</span></small> <br/>
                                            <small ><span>Salary:</span>  <span className="colGry">$1200</span></small>

                                        </div>
                                    </div>
                                
                                    <div className="col-md-2">
                                        <div className="">
                                            <button className="btn btn-default mt-3"><i class="fas fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className=" ">
                            <div className="pt-2">
                                <div className="row m-0 mt-3 py-3 border">
                                    <div className="col-md-3">
                                        <div className="text-center">
                                            <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="mt-2 OOuN">
                                        <Link to="/company-panel/job-applications/candidate-details"><h6 className="mb-0">Rahim Malik</h6></Link>
                                            <small className=""><span>App Designer</span><span className="text-info">@ Company A</span></small> <br/>
                                            <small ><span>Salary:</span>  <span className="colGry">$1200</span></small>

                                        </div>
                                    </div>
                                
                                    <div className="col-md-2">
                                        <div className="">
                                            <button className="btn btn-default mt-3"><i class="fas fa-trash-alt"></i></button>
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

export default JobApplications;