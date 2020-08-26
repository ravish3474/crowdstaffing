import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class ShortlistedCandidateDetails extends Component {
    // constructor(props){

    // }
    render() {
     
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Shortlisted Candidate Details</h4>
           
        
            <div className="bg-white mt-4 p-4 w60">
                
                <div className="">
                    <div className="row m-0 mt-3 py-3 border p-2">
                        <div className="col-md-1 px-0">
                            <div className="text-center">
                                <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="mt-2 OOuN">
                                <Link to="/company-panel/job-applications/candidate-details"><h5 className="mb-0">Rahim Malik</h5></Link>
                                <small className=""><span>App Designer</span><span className="text-info">@ Company A</span></small> <br/>
                                <small ><span>Salary:</span>  <span className="colGry">$1200</span></small>

                            </div>
                        </div>
                    
                        <div className="col-md-3">
                            <div className="text-center">
                                <button className="btn btn-primary w-100 mt-2">Download CV <span><i class="fas fa-download"></i></span></button><br/>
                                <button className="btn btn-primary w-100  mt-2">Interview Schedule</button>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h5>About Me</h5>

                        <div className=" border p-2">
                            <div className="row">
                                <div className="col-md-4 mt-3">
                                    <div className="d-flex">
                                        <div className="">
                                            <img src="" className="img-fluid"/>
                                        </div>
                                        <div className="ml-2">
                                            <span className="colGry">Name : </span>
                                            <h6>Melisaa doe</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="d-flex">
                                        <div className="">
                                            <img src="" className="img-fluid"/>
                                        </div>
                                        <div className="ml-2">
                                            <span className="colGry">Fax : </span>
                                            <h6>555-555</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="d-flex">
                                        <div className="">
                                            <img src="" className="img-fluid"/>
                                        </div>
                                        <div className="ml-2">
                                            <span className="colGry">Phone : </span>
                                            <h6>(122)-993</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="d-flex">
                                        <div className="">
                                            <img src="" className="img-fluid"/>
                                        </div>
                                        <div className="ml-2">
                                            <span className="colGry">Date Of Birth: </span>
                                            <h6>date</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="d-flex">
                                        <div className="">
                                            <img src="" className="img-fluid"/>
                                        </div>
                                        <div className="ml-2">
                                            <span className="colGry">Address : </span>
                                            <h6>Melisaa doe</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="d-flex">
                                        <div className="">
                                            <img src="" className="img-fluid"/>
                                        </div>
                                        <div className="ml-2">
                                            <span className="colGry">Sex : </span>
                                            <h6>Female</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className="d-flex">
                                        <div className="">
                                            <img src="" className="img-fluid"/>
                                        </div>
                                        <div className="ml-2">
                                            <span className="colGry">Email : </span>
                                            <h6>Melisaa@gmail</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="py-4 border-bottom">
                            <small className="colGry">sdadad sd adfsmdfkldmsf dsndf fksdnkfjsdk f s</small>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h5>Education</h5>
                        <span className="p-2 border rounded-circle">
                                <span><i class="fas fa-graduation-cap"></i></span>
                            </span>
                        <div className="py-2 border-left posi ml-3">
                           
                            <div className="px-5 py-2  position-relative">
                                <span className="posCircle text-primary"><i class="far fa-circle"></i></span>
                                <small className="colGry">2019 - Pres</small>
                                <h6 className="text-primary">Masters in Software Engineering</h6>
                                <small>-Engineering University</small><br/>
                                <small className="colGry">dsaa dsajkak ahd ak dajkd asd </small>
                            </div>
                            <div className="px-5 py-2 position-relative">
                                <span className="posCircle text-primary"><i class="far fa-circle"></i></span>
                                <small className="colGry">2019 - Pres</small>
                                <h6 className="text-primary">Masters in Software Engineering</h6>
                                <small>-Engineering University</small><br/>
                                <small className="colGry">dsaa dsajkak ahd ak dajkd asd </small>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h5>Work & Experience</h5>
                        <span className="p-2 border rounded-circle">
                                <span><i class="fas fa-briefcase"></i></span>
                            </span>
                        <div className="py-2 border-left posi ml-3">
                           
                            <div className="px-5 py-2  position-relative">
                                <span className="posCircle text-primary"><i class="far fa-circle"></i></span>
                                <small className="colGry">2019 - Pres</small>
                                <h6 className="text-primary">Masters in Software Engineering</h6>
                                <small>-Engineering University</small><br/>
                                <small className="colGry">dsaa dsajkak ahd ak dajkd asd </small>
                            </div>
                            <div className="px-5 py-2 position-relative">
                                <span className="posCircle text-primary"><i class="far fa-circle"></i></span>
                                <small className="colGry">2019 - Pres</small>
                                <h6 className="text-primary">Masters in Software Engineering</h6>
                                <small>-Engineering University</small><br/>
                                <small className="colGry">dsaa dsajkak ahd ak dajkd asd </small>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h5>Professional Skills</h5>

                        <div className="my-2 BrodLft ml-2">
                            <span className="colGry">Descriptions sdad ad ad ad a</span>
                        </div>
                        <div className="p-3 row mx-0 mt-">
                            <div className="col-md-6">
                                <div className="">
                                    <div class="skill">
                                        <h6>HTML5</h6>
                                        <div class="skill-bar skill1 wow slideInLeft animated" style={{width:"90%"}}>
                                            <span class="skill-count1">95%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="">
                                    <div class="skill">
                                        <h6>HTML5</h6>
                                        <div class="skill-bar skill1 wow slideInLeft animated" style={{width:"30%"}}>
                                            <span class="skill-count1">30%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="mt-4">
                        <h5>Awards</h5>
                        <span className="p-2 border rounded-circle">
                                <span><i class="fas fa-trophy"></i></span>
                            </span>
                        <div className="py-2 border-left posi ml-3">
                           
                            <div className="px-5 py-2  position-relative">
                                <span className="posCircle text-primary"><i class="far fa-circle"></i></span>
                                <small className="colGry">2019 - Pres</small>
                                <h6 className="text-primary">Masters in Software Engineering</h6>
                                <small>-Engineering University</small><br/>
                                <small className="colGry">dsaa dsajkak ahd ak dajkd asd </small>
                            </div>
                            <div className="px-5 py-2 position-relative">
                                <span className="posCircle text-primary"><i class="far fa-circle"></i></span>
                                <small className="colGry">2019 - Pres</small>
                                <h6 className="text-primary">Masters in Software Engineering</h6>
                                <small>-Engineering University</small><br/>
                                <small className="colGry">dsaa dsajkak ahd ak dajkd asd </small>
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

export default ShortlistedCandidateDetails;