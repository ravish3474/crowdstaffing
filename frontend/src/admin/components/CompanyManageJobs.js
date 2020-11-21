import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

import CompanyHeader from './CompanyHeader';



class CompanyManageJobs extends Component {
    render() {
    return (
    
        <section className="">
        <CompanyHeader/>
        <section className="paduj5">
             <section className="py-5">
             <div className="container-fluid shadow pt-3 ">
      <div className=" container">
        <div className="row ">
          <div className="col-md-4">
            <h4 className="topHH">Manage Jobs</h4>
          </div>
         
        </div>
      </div>
    </div>


    <div className="container-fluid mt-5">
        <div className="">
            <div className="row">
                <div id="tabs" className="project-tab w-100">
                    <nav className="boes">
                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Account Jobs</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Jobs Started</a>
                            
                        </div>
                    </nav>
                    <div className="tab-content boes w-100" id="nav-tabContent"> 
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="p-2 mt-4">
                                <div className="Piauj">
                                    <div className="posu">
                                        <input type="text" placeholder="Job title, Id or Ref no." name="" className="form-control"/>
                                    </div>
                                    <div className="posu">
                                        <select name="" className="form-control">
                                            <option selected>All Jobs</option>
                                        </select>
                                    </div>
                                    <div className="posu">
                                        <select name="" className="form-control">
                                            <option selected>Jobs Type</option>
                                        </select>
                                    </div>
                                    <div className="posu">
                                        <div className="d-flex">
                                            
                                                <input type="date" placeholder="Start Date" name="" className="pInpt form-control"/>
                                         
                                            <span className="mx-2">to</span>
                                            
                                                <input type="date" placeholder="End Date" name="" className="pInpt form-control"/>
                                          
                                        </div>
                                    </div>
                                    <div className="posu">
                                        <select name="" className="form-control">
                                            <option selected>Posted By:</option>
                                        </select>
                                    </div>
                                    <div className="ml-1 srchBtn">
                                        <span ><i className="fa fa-search" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Creation Date</th>
                                            <th>Job Details  </th>
                                            <th>Applicants</th>
                                            <th>Status</th>
                                            <th>Available Actions</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>20 Oct 2020</span> <br/>
                                                <small>by mihr_1</small><br/>
                                                <span><strong>Views: </strong><span>28</span></span>
                                            </td>
            
                                            <td>
                                                <Link to="/company-panel/job-description" ><h6 className="colBl  mb-0">Hiring for Java full Stack Developer II Bangalore II Exp min 5 years </h6></Link>
                                                <small>Bangalore</small>
                                                <div className="mt-3">
                                                    <a href="">View</a><span className="ml-1">Auto matches</span>
                                                </div>
                                            </td>
            
                                            <td>
                                                <a href="">4</a>
                                                <span className="ml-1">Shine</span>
                                            </td>
                                            <td>
                                                <span>Published</span><br/>
                                                <small className="ml-1">20 Oct 2020</small>
                                            </td>
                                            <td>
                                               <div className="">
                                                   <span><span><i class="fas fa-bookmark"></i></span><span className="ml-1">Republish</span></span>
                                                   <span className="ml-2"><span><i class="far fa-clipboard"></i></span><span className="ml-1">Copy</span></span>
                                                   <span className="ml-2"><span><i className="fa fa-share" aria-hidden="true"></i></span><span className="ml-1">Share</span></span>
                                                   <span className="ml-2">
                                                       
                                                    </span>
                                               </div>
                                            </td>
                                            <td>
                                                <div className="dropdown">
                                                    <span className="dropbtn"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                                    <div className="dropdown-content">
                                                        <a href="#">Expire</a>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span>20 Oct 2020</span> <br/>
                                                <small>by mihr_1</small><br/>
                                                <span><strong>Views: </strong><span>28</span></span>
                                            </td>
            
                                            <td>
                                            <Link to="/company-panel/job-description" ><h6 className="colBl  mb-0">Hiring for Java full Stack Developer II Bangalore II Exp min 5 years </h6></Link>
                                                <small>Bangalore</small>
                                                <div className="mt-3">
                                                    <a href="">View</a><span className="ml-1">Auto matches</span>
                                                </div>
                                            </td>
            
                                            <td>
                                                <a href="">4</a>
                                                <span className="ml-1">Shine</span>
                                            </td>
                                            <td>
                                                <span>Published</span><br/>
                                                <small className="ml-1">20 Oct 2020</small>
                                            </td>
                                            <td>
                                               <div className="">
                                                   <span><span><i class="fas fa-bookmark"></i></span><span className="ml-1">Republish</span></span>
                                                   <span className="ml-2"><span><i class="far fa-clipboard"></i></span><span className="ml-1">Copy</span></span>
                                                   <span className="ml-2"><span><i className="fa fa-share" aria-hidden="true"></i></span><span className="ml-1">Share</span></span>
                                                   <span className="ml-2">
                                                       
                                                    </span>
                                               </div>
                                            </td>
                                            <td>
                                                <div className="dropdown">
                                                    <span className="dropbtn"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></span>
                                                    <div className="dropdown-content">
                                                        <a href="#">Expire</a>
                                                        
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="p-2 mt-4">
                                <div className="Piauj">
                                    <div className="posu">
                                        <input type="text" placeholder="Job title, Id or Ref no." name="" className="form-control"/>
                                    </div>
                                    <div className="posu">
                                        <select name="" className="form-control">
                                            <option selected>All Jobs</option>
                                        </select>
                                    </div>
                                    <div className="posu">
                                        <select name="" className="form-control">
                                            <option selected>Jobs Type</option>
                                        </select>
                                    </div>
                                    <div className="posu">
                                        <div className="d-flex">
                                            
                                                <input type="date" placeholder="Start Date" name="" className="pInpt form-control"/>
                                         
                                            <span className="mx-2">to</span>
                                            
                                                <input type="date" placeholder="End Date" name="" className="pInpt form-control"/>
                                          
                                        </div>
                                    </div>
                                    <div className="posu">
                                        <select name="" className="form-control">
                                            <option selected>Posted By:</option>
                                        </select>
                                    </div>
                                    <div className="ml-1 srchBtn">
                                        <span ><i className="fa fa-search" aria-hidden="true"></i></span>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-4">
                                    <div className="text-center colGry">
                                        <h6>You have no jobs.</h6>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                
            </div>
        </div>
    </div>
             </section>   
         </section> 
     </section>
    );
    }
}

export default CompanyManageJobs;