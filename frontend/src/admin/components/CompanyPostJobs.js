import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import CKEditor from "react-ckeditor-component";
import CompanyHeader from './CompanyHeader';


const $ = window.$;
class CompanyPostJobs extends Component {
    
    render() {
    return (
    
        <section className="">
        <CompanyHeader/>
        <section className="paduj5">
             <section className="py-5">
             <div className=" shadow pt-3">
      <div className=" container">
        <div className="row ">
          <div className="col-md-4">
            <h4 className="topHH">Post Job</h4>
          </div>
          <div className="col-md-8">
            <div className="text-right">
                <button className="btnTo">Post a walk-in</button>
                <button className="btnTo ml-2">Manage Jobs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   	<div className="">
        <div className="">
           <div className="row py-5">
              <div className="col-md-7">
                <div className="m-auto w-75">

                  <div className="form__group field">
                    <select  className="form__field" type="text" placeholder="">
                      <option value="" selected disabled>Select from previous job</option>
                    </select>
                    
                  </div>
               
                </div>
              </div>
            </div>

            <div className="">
              <div className="row mx-0">
                <div className="col-md-8">
                    <div className="pppDSK">
                        <div className="row mx-0 shadow">
                          <div className="col-md-4 pihs active" >
                            <div className="">
                              <a href="">
                                Job Details
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 pihs">
                            <div className="">
                              <a href="">
                                Desired Candidate Details
                              </a>
                            </div>
                          </div>
                          <div className="col-md-4 pihs">
                            <div className="">
                              <a href="">
                                Job Scheduling
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 shadow bg-white p-3">
                            <p className="">Please select which type of job you want to post:</p>
                            <div className="matchds">
                                 <div className="d-flex">
                                    <div className="">
                                      <input type="radio" name="macth"/>
                                    </div>
                                    <div className="ml-2"> Smart Match <sup>*</sup></div>
                                  </div>
                            </div>
                        </div>

                        <div className="mt-3 shadow  p-4">
                            <div className="position-relative">
                              <div className="form__group field">
                                <input type="text" className="form__field" placeholder="Name" name="name" id='name' required />
                                <label for="name" className="form__label">Job Title</label>
                              </div>

                              <div className="form__group">
                                <label>Employment type</label>
                                <div className="row">
                                  <div className="col-md-3">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="radio" checked name="employ"/>
                                      </div>
                                      <div className="ml-2"> Permanent</div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="radio" name="employ"/>
                                      </div>
                                      <div className="ml-2"> Contractual</div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="radio" name="employ"/>
                                      </div>
                                      <div className="ml-2"> Internship</div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="radio" name="employ"/>
                                      </div>
                                      <div className="ml-2"> Work from home</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="form__group field">
                                <input type="number" className="form__field" value="1" min="1" placeholder="Name" id="vacancies" required />
                                <label for="vacancies" className="form__label">Number of Vacancies <sup className="text-danger">*</sup></label>
                              </div>
                              <div className="form__group field">
                                 <select type="number" className="form__field"id="industry" required >
                                    <option selected disabled>select</option>
                                  </select>
                                <label for="vacancies" className="form__label">Industry of the employer <sup className="text-danger">*</sup></label>
                              </div>
                              <div className="form__group field">
                                <select type="number" className="form__field"id="industry" required >
                                   <option selected disabled>select</option>
                                 </select>
                               <label for="vacancies" className="form__label">Department / Functional Area of the Job <sup className="text-danger">*</sup></label>
                             </div>
                             <div className="form__group field">
                             	<label for="vacancies" className="form__label mb-3">Job Description <sup className="text-danger">*</sup></label>
                                <div className="pt-3">
                                    {/* <textarea  name="editor1"></textarea> */}
                                    <CKEditor activeClass="editor" content="" onChange="" />
                                </div>
                               <div className=""><small>Min char 100 and Max char 5000.</small></div>
                             </div>

                             <div className="row mx-0">
                             	<div className="col-md-6 pl-0">
                             		<div className="form__group field">
		                                <select type="number" className="form__field"id="industry" required >
		                                   <option selected disabled>select</option>
		                                 </select>
		                               <label for="vacancies" className="form__label">Min Exp <sup className="text-danger">*</sup></label>
		                            </div>
                             	</div>
                             	<div className="col-md-6 pr-0">
                             		<div className="form__group field">
		                                <select type="number" className="form__field"id="industry" required >
		                                   <option selected disabled>select</option>
		                                 </select>
		                               <label for="vacancies" className="form__label">Max Exp <sup className="text-danger">*</sup></label>
		                            </div>
                             	</div>
                             </div>

                             <div className="form__group">
                                <label>Salary type</label>
                                <div className="row">
                                  <div className="col-md-3">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="radio" checked name="salary"/>
                                      </div>
                                      <div className="ml-2"> Yearly</div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="radio" name="salary"/>
                                      </div>
                                      <div className="ml-2"> Monthly</div>
                                    </div>
                                  </div>
                                 
                                </div>
                              </div>	

                              <div className="row mx-0">
                             	<div className="col-md-6 pl-0">
                             		<div className="form__group field">
		                                <select  className="form__field"id="industry" required >
		                                 
		                                 </select>
		                               <label for="vacancies" className="form__label">Min Salary <sup className="text-danger">*</sup></label>
		                            </div>
		                            <div className="d-flex">
                                      <div className="">
                                        <input type="checkbox"  name="employ"/>
                                      </div>
                                      <div className="ml-2"> <small> Hide Salary from Candidates</small></div>
                                    </div>
                             	</div>
                             	<div className="col-md-6 pr-0">
                             		<div className="form__group field">
		                                <select  className="form__field"id="industry" required >
		                                 
		                                 </select>
		                               <label for="vacancies" className="form__label">Max Salary <sup className="text-danger">*</sup></label>
		                            </div>
                             	</div>
                             </div>

                            <div className="">
	                            <div className="form__group field">
	                                <select  className="form__field"id="industry" required >
	                                   <option selected disabled>Select Job Location</option>
	                                 </select>
	                               <label for="vacancies" className="form__label">Location of the Job <sup className="text-danger">*</sup></label>
	                            </div>
	                            <div className="d-flex">
                                  <div className="">
                                    <input type="checkbox"  name="employ" id="internalLoctn"/>
                                  </div>
                                  <div className="ml-2"> <small> include international locations</small></div>
                                </div>
	                        </div>

	                        <div className="form__group field" id="locInter">
	                            <div className="">
	                                <select  className="js-example-basic-single form__field"id="industry" required >
	                                   <option selected disabled>Select International Location</option>
	                                   <option value="AL">s</option>
									
									  <option value="WY">ss</option>
	                                 </select>
	                             	
	                            </div>
	                            
	                        </div>	
	                     
                             <div className="form__group">
                                <label>Job type</label>
                                <div className="row">
                                  <div className="col-md-3">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="radio" checked name="jobtype"/>
                                      </div>
                                      <div className="ml-2"> Full time</div>
                                    </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="radio" name="jobtype"/>
                                      </div>
                                      <div className="ml-2"> Part time</div>
                                    </div>
                                  </div>
                                 
                                </div>
                              </div>


                              <div className="form__group">
                                <label>Shift type</label>
                                <div className="row">
                                  <div className="col-md-2">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="checkbox" checked name=""/>
                                      </div>
                                      <div className="ml-2"> Morning</div>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="checkbox" name=""/>
                                      </div>
                                      <div className="ml-2"> Noon</div>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="checkbox" name=""/>
                                      </div>
                                      <div className="ml-2"> Evening</div>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="checkbox" name=""/>
                                      </div>
                                      <div className="ml-2"> Night</div>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="checkbox" name=""/>
                                      </div>
                                      <div className="ml-2"> Split</div>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="d-flex">
                                      <div className="">
                                        <input type="checkbox" name=""/>
                                      </div>
                                      <div className="ml-2"> Rotating</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-2">
                                <h5 className="my-4">Company Details</h5>
                                <div className="row mx-0">
                                  <div className="col-md-6">
                                    <div className="s">
                                        <span>Company Name</span>
                                        <h6 className="mt-3">Margdarshakam India</h6>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="s">
                                      <label>Hiring For</label>
                                      <input type="text" placeholder="" name="" className="form-control pamInput"/>
                                    </div>
                                  </div>
                                </div>

                                <div className="">
                                  <div className="form__group field">
                                    <label for="vacancies" className="form__label mb-3">Company Description<sup className="text-danger">*</sup></label>
                                     <div className="pt-3"> 
                                     <CKEditor activeClass="editor" content="" onChange="" />
                                     </div>
                                    <div className=""><small>Min char 100 and Max char 5000.</small></div>
                                  </div>
                                </div>

                                <div className="d-flex mt-2">
                                  <div className="">
                                    <input type="checkbox"  name="employ" id="internalLoctn"/>
                                  </div>
                                  <div className="ml-2"> <small> Hide Company Detail and Name from candidates</small></div>
                                </div>

                                <div className="row mx-0">
                                  <div className="col-md-6">
                                    <div className="s">
                                      <label>Telephone </label>
                                      <input type="text" placeholder="" name="" className="form-control pamInput"/>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="s">
                                      <label>Email </label>
                                      <input type="text" placeholder="" name="" className="form-control pamInput"/>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="w-100 mt-4 row mx-0 htomin">
                                <div className="col-md-2 col-6">
                                  <button className="ntns">Next</button>
                                </div>
                                <div className="col-md-4 col-6">
                                  <button className="ntns">Save as draft</button>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="">
                        <div className="row mx-0 py-3 Calok">
                            <div className="col-md-2 pr-0">
                              <div className="">
                                <img src={require("../../assets/images/writing.png")} className="img-fluid " alt="" />
                               
                              </div>
                            </div>
                            <div className="col-md-10">
                              <div className="">
                               <h6> Do you have Additional Questions?</h6>
                                <p>Use our new Questionnaire feature and ask questions from job seekers before they apply. Explore</p>
                              </div>
                            </div>
                        </div>

                        <div className="mt-4">
                          <div id="tabs" className="project-tab shadow">
                            <nav>
                                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">JD Preview</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Search Preview</a>
                                   
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                  <div className="p-2">
                                    11
                                  </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="p-2 poki">
                                      
                                      <div className="pSkils">
                                          <div className="">
                                            <span>Skills</span>
                                          </div>
                                          <div className="">
                                            <a href="">Apply</a>
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
            </div>
        </div>
   	</div>    
             </section>   
         </section> 
     </section>
           
    );
    }
    componentDidMount() {
     
        $(document).ready(function() {
            // CKEDITOR.replace( 'editor1' );
            // CKEDITOR.replace( 'editor12' );
            $('.js-example-basic-single').select2();
        });
        
            $(window).load(function(){
                $(".col-3 input").val("");
                    
                $(".input-effect input").focusout(function(){
                    if($(this).val() != ""){
                        $(this).addclass("has-content");
                    }else{
                        $(this).removeclass("has-content");
                    }
                })
            });
      
      }
}

export default CompanyPostJobs;