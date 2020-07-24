import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class Profile extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Profile</h5>
   
           <div className=" mt-4 HirD ">
               <form className=" UJUFom">
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Full Name"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Job Title</label>
                                <input type="text" className="form-control" name="" placeholder="UI/UX Designer"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="number" className="form-control" name="" placeholder="Enter Phone Number"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="" placeholder="Enter Email"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Website</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Website"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="row mx-0">
                                <div className="col-md-6 pl-0">
                                        <div className="form-group">
                                            <label>Current Salary</label>
                                            <select className="form-control" name="" >
                                                <option selected >30k-50k</option>
                                            </select>
                                        </div>
                                </div>
                                <div className="col-md-6 pl-0">
                                    <div className="form-group">
                                        <label>Expected Salary</label>
                                        <select className="form-control" name="" >
                                            <option selected >30k-50k</option>
                                        </select>
                                    </div>
                                </div>
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
                                <label>Education Levels</label>
                                <select className="form-control" name="" >
                                    <option selected >1 Year</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" className="form-control" name=""/>
                            </div>
                       </div>
                    </div>







                   <div className="form-group">
                       <label> Description</label>
                        <textarea className="form-control" name="" rows="5" placeholder="Job Description"></textarea>
                   </div>


                    <h5 className="my-3">
                        Social Network
                    </h5>

                   
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Facebook</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Facebook"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Twitter</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Twitter"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Linkedin</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Linkedin"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Google+</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Google+"/>
                            </div>
                       </div>
                    </div>

                    <h5 className="my-3">
                        Contact Information
                    </h5>


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
                       <label> Full Address</label>
                        <textarea className="form-control" name="" rows="5" placeholder="Address"></textarea>
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
                    <div className="text-center">
                    <button className="btn bnlurrt py-2 px-4 bordRAD0">SAVE CHANGES</button>
                    </div>
                
               </form>
           </div>
        
        </div>
    </div>

            </section>

   
    } 
   
}

export default Profile;