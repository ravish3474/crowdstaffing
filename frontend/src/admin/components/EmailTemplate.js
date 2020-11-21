import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

import CompanyHeader from './CompanyHeader';
import CKEditor from "react-ckeditor-component";

const $ = window.$;
class EmailTemplate extends Component {
    componentDidMount() {
     
        $(document).ready(function() {
          
            window.CKEDITOR.replace( 'editor12' );
            $('.js-example-basic-single').select2();
        });
        
      }
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
            <h4 className="topHH">Email Template</h4>
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
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Email Template</a>
                           
                        </div>
                    </nav>
                    <div className="tab-content boes w-100" id="nav-tabContent"> 
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="p-2 pt-4">
                                <div className="">
                                   <form className="">
                                        <div className="titlsj">
                                            <h5>Message Details</h5>
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Template Type<sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="d-flex">
                                                    <div className="">
                                                      <input type="checkbox" name=""/>
                                                    </div>
                                                    <div className="ml-1">
                                                        <span >Search</span>
                                                    </div>
                                                </div>  
                                                <div className="">
                                                    <small>(Only Application type templates can be used to send emails to job applicants)</small>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="d-flex">
                                                    <div className="">
                                                      <input type="checkbox" name=""/>
                                                    </div>
                                                    <div className="ml-1">
                                                      <span >Application</span>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Template Name<sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-10">
                                               <input type="text" name="" className="form-control pamInput"/>
                                            </div>
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Your Email Id <sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-10">
                                               <input type="text" name="" className="form-control pamInput"/>
                                               <div className="">
                                                   <small>(This will be used as the 'reply to' email and all responses will be sent to this email id)</small>
                                               </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Telephone<sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-10">
                                               <input type="text" name="" className="form-control pamInput"/>
                                                <div className="">
                                                    <small>(Suggested format: Job | Job Title | Experience | Location | Salary)</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Email Body:<sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-10">
                                                <CKEditor activeClass="editor" content="" onChange="" />
                                            </div>
                                        </div>

                                        <div className="titlsj mt-4">
                                            <h5>Job Details</h5>
                                        </div>
                                        <div className="">
                                            <small>Kindly enter details of the job for which you are contacting the candidates. This information is mandatory.</small>
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                            
                                            </div>
                                            <div className="col-md-4">
                                                <div className="d-flex titlsj py-2">
                                                    <div className="">
                                                      <input type="checkbox" name=""/>
                                                    </div>
                                                    <div className="ml-1">
                                                      <span >Application</span>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Job Title:<sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-10">
                                                <input type="text" name="" className="form-control pamInput"/>
                                            </div>
                                        </div>

                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Job Title:<sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-5">
                                                <select  name="" className="form-control pamInput">
                                                    <option >Min Exp</option>
                                                  </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select  name="" className="form-control pamInput">
                                                    <option >Max Exp</option>
                                                  </select>
                                            </div>
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Locations:<sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-10">
                                                <select  name="" className="js-example-basic-single form-control pamInput">
                                                    <option selected disabled>Select Location</option>
                                                  </select>
                                            </div>
                                            
                                        </div>
                                        <div className="row mt-3 mx-0 form-group">
                                            <div className="col-md-2">
                                                <strong>Salary:<sup className="text-danger">*</sup></strong>
                                            </div>
                                            <div className="col-md-5">
                                                <select  name="" className="form-control pamInput">
                                                    <option >Min Salary</option>
                                                  </select>
                                            </div>
                                            <div className="col-md-5">
                                                <select  name="" className="form-control pamInput">
                                                    <option >Max Salary</option>
                                                  </select>
                                            </div>
                                        </div>

                                        <div className="col-md-10 ml-auto">

                                            <button className=" logBt">Preview</button>
                                            <button className="ml-2 logBt">Cancel</button>
                                        </div>
                                    </form>
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

export default EmailTemplate;