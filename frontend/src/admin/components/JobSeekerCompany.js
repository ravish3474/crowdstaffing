import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class JobSeekerCompany extends Component {
    // constructor(props){

    // }
    render() {
     
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Job Application Candidate Details</h4>
           
        
            <div className="bg-white mt-4 p-4">
                
                
                <div className="row">
                    
                    <div className="pt-2 col-md-7">
                        <div className="row mx-0">
                            <div className="col-md-6">
                                <h6> <span>Showing 1-11 of </span><span className="colBlu"> 28 Candidates</span></h6>
                            </div>
                            <div className="col-md-6">
                                <div className="text-right ">
                                    <div className="d-flex float-right mr-5">
                                    <label className="mt-2">Sort By :</label> 
                                        <div className="ml-1"><select className="form-control ">
                                            <option value="">Newest</option>
                                            <option value="">Old</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row m-0 mt-3 py-3 border-bottom">
                            <div className="col-md-2">
                                <div className="text-center">
                                    <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="mt-2 OOuN">
                                    <h5 className="mb-0">Rahim Malik</h5>
                                    <small className=""><span className="colGry">@ Company A</span></small>  <small className="colGry ml-2"><i class="fas fa-map-marker-alt"></i> Address</small><br/>
                                   

                                </div>
                            </div>
                        
                            <div className="col-md-2">
                                <div className="">
                                    <button className="btn btn-default mt-2 rounded-circle  border"><i class="far fa-heart"></i></button><br/>
                                    <small className="colGry"><i class="far fa-clock"></i> &nbsp; 3W ago</small>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0 mt-3 py-3 border-bottom">
                            <div className="col-md-2">
                                <div className="text-center">
                                    <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="mt-2 OOuN">
                                    <h5 className="mb-0">Rahim Malik</h5>
                                    <small className=""><span className="colGry">@ Company A</span></small>  <small className="colGry ml-2"><i class="fas fa-map-marker-alt"></i> Address</small><br/>
                                   

                                </div>
                            </div>
                        
                            <div className="col-md-2">
                                <div className="">
                                    <button className="btn btn-default mt-2 rounded-circle  border"><i class="far fa-heart"></i></button><br/>
                                    <small className="colGry"><i class="far fa-clock"></i> &nbsp; 3W ago</small>
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

export default JobSeekerCompany;