import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class RecruiterProfile extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Recruiter Profile</h5>
   
           <div className=" mt-4 HirD bg-white bordRad_2">
               <div className="d-flex my-4">
                    <div className="htdhi border">
                        <img src={require("../../assets/images/client2.png")} className="img-fluid w-100"/>
                    </div>
                   <div className="m-3">
                       <h6 className="mb-0">A D Holiday Ltd</h6>
                       <small className="colGry">Education Training</small><br/>
                       <small className="colGry"><i class="fas fa-map-marker-alt"></i> <span>England</span></small> 
                   </div> 
               </div>
               <form className=" UJUFom">
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Company Name"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="" placeholder="Email"/>
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
                                <label>Website</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Website"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Est. Since</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Est. Since"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                           
                               
                               
                            <div className="form-group">
                                <label>Team Size</label>
                                <select className="form-control" name="" >
                                    <option selected >30k-50k</option>
                                </select>
                            </div>
                               
                            
                       </div>
                    </div>

                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Categories</label>
                                <select className="form-control" name="" >
                                    <option selected >1 Year</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Allow In Search & Listing</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Select</option>
                                    
                                </select>
                            </div>
                       </div>
                    </div>

                    <div className="form-group">
                        <label> About Company</label>
                        <textarea className="form-control" name="" rows="5" placeholder="About Company"></textarea>
                   </div>

                    <h5 className="my-3"> Social Network </h5>

                   
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
                        <button className="btn ml-3 edlert py-2 px-4 bordRAD0">DELETE PROFILE</button>
                    </div>
                
               </form>
           </div>
        
        </div>
    </div>
</section>

   
    } 
   
}

export default RecruiterProfile;