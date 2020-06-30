import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class PostNewJob extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Post New Job</h5>
           
           <div className="mt-3">
               <div className="">
                   <div className="row">
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle PBJ text_Al">
                                        <span><i class="fas fa-briefcase"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="mt-3">
                                        <span>2 Jobs Posted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle Pnk text_Al">
                                        <span><i class="far fa-copy"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className=" mt-3">
                                        <span>3 Applications</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle Ble text_Al">
                                        <span><i class="fas fa-briefcase"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className=" mt-3">
                                        <span>1 Active Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                   </div>
               </div>
           </div>

           
           <div className=" mt-4 HirD ">
               <form className=" UJUFom">
                   <div className="form-group">
                       <label>Job Title</label>
                        <input type="text" className="form-control" name="" placeholder="UI/UX Designer"/>
                   </div>
                   <div className="form-group">
                       <label>Job Description</label>
                        <textare className="form-control" name="" rows="5" placeholder="Job Description"></textare>
                   </div>
                   <div className="form-group">
                       <label>Application Deadline Date</label>
                        <input type="date" className="form-control" name="" placeholder="UI/UX Designer"/>
                   </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Email"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Username"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Job Type</label>
                                <select className="form-control" name="" >
                                    <option selected >Basic</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Specialisms</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                       </div>
                    </div>


                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Offerd Salary</label>
                                <select className="form-control" name="" >
                                    <option selected >30k-50k</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Career Level</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>40k-50k</option>
                                </select>
                            </div>
                       </div>
                    </div>


                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Experience</label>
                                <select className="form-control" name="" >
                                    <option selected >1 Year</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Gender</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Select</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                </select>
                            </div>
                       </div>
                    </div>


                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Industry</label>
                                <select className="form-control" name="" >
                                    <option selected >Basic</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Qualification</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Qualification</option>
                                </select>
                            </div>
                       </div>
                    </div>
                    <h5 className="my-3">Address / Location</h5>

                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Country</label>
                                <select className="form-control" name="" >
                                    <option selected >Basic</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>City</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                       </div>
                    </div>
                    <div className="form-group">
                       <label>Full Address</label>
                        <textare className="form-control" name="" rows="5" placeholder="Address"></textare>
                   </div>


                    <div className="row mx-0">
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>Latitude</label>
                                <select className="form-control" name="" >
                                    <option selected >Basic</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>Longitude</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                       </div>
                       
                    </div>
                    <dic className="text-center">
                    <button className="btn bnlurrt py-2 px-4 bordRAD0">Submit</button>
                    </dic>
                
               </form>
           </div>
        
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default PostNewJob;