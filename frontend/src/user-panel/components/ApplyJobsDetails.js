import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class ApplyJobsDetails extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Apply Jobs Details</h5>
   
           <div className=" mt-4 HirD ">
                <div className="row mx-0">
                    <div className="col-md-9">
                        <div className="">
                            <h5 className="mb-3">Job Description</h5>
                           
                            <small className="colGry">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</small>


                            <h5 className="mb-3 mt-4">Required Knowledge, Skills, and Abilities</h5>
                            <ul>
                                <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li>
                                <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li>
                                <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li>
                                <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li>
                            </ul>

                            <h5 className="mb-3">Education Qualification</h5>
                            <ul>
                                <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li>
                                <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li>
                                <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li>
                                <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li>
                            </ul>
                        </div>    

                        <button class="btn btn-info w-100">Apply Now</button>
                    </div> 
                    <div className="col-md-3">
                        <div className="">
                            <div className="border p-4">
                                <h4 className="mb-0">OverView</h4>
                                <hr/>
                                <div className="row mx-0 ">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Offered Salary</h6>
                                            <small className="colGry">$10K-$150K</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 mt-3">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Gender</h6>
                                            <small className="colGry">Male</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 mt-3">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Experience</h6>
                                            <small className="colGry">2 Years</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 mt-3">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Qualification</h6>
                                            <small className="colGry">MBA</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-4 mt-3">
                                <h4 className="mb-0">OverView</h4>
                                <hr/>

                                <div className="d-flex mb-2">
                                    <small className="colBlu"><i class="fas fa-map-marker-alt"></i></small>
                                    <small className="colGry ml-3">address</small>
                                </div>

                                <div className="d-flex mb-2">
                                    <small className="colBlu"><i class="fas fa-phone-alt"></i></small>
                                    <small className="colGry ml-3">155-152-4444</small>
                                </div>
                                <div className="d-flex mb-2">
                                    <small className="colBlu"><i class="fas fa-envelope"></i></small>
                                    <small className="colGry  ml-3">address@mail.com</small>
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

export default ApplyJobsDetails;