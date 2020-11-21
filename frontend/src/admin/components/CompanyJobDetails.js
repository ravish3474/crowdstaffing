import React, { Component } from 'react';
import CompanyHeader from './CompanyHeader';
 
const $ = window.$;
class CompanyJobDetails extends Component {
    componentDidMount() {
        $(document).ready(function() {
            window.CKEDITOR.replace( 'editor1' );
            $('.js-example-basic-single').select2();
        });
        $(document).on("change","#internalLoctn",function(){
          if($(this).is(":checked")){
          $("#locInter").show();
        }
        else if($(this).is(":not(:checked)")){
            $("#locInter").hide();
        }
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
    render() {
    return (
    
        <section className="">
        <CompanyHeader/>
        <section className="paduj5">
             <section className="py-5">
                <div className="container shadow pt-3">
                    <div className=" ">
                        <div className="row ">
                        <div className="col-md-4">
                            <h4 className="topHH"> Job Description</h4>
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
            <div className="  mt-4">
                <div className="container">
                <div className="">
                    <div className="row mx-0">
                        <div className="col-md-8">
                        <div className="bg-white shadow p-4 UYhu">
                            <h4>Job Details</h4>
                            <div className="row mt-3 mx-0 form-group">
                                <div className="col-md-4">
                                    <strong>Job Title</strong>
                                </div>
                                <div className="col-md-8">
                                    <span>Hiring for Java full Stack Developer II Bangalore II Exp min 5 years</span>
                                </div>
                            </div>

                            <div className="row mt-3 mx-0 form-group">
                                <div className="col-md-4">
                                    <strong>Employment type</strong>
                                </div>
                                <div className="col-md-8">
                                    <span>Permanent</span>
                                </div>
                            </div>
                            <div className="row mt-3 mx-0 form-group">
                                <div className="col-md-4">
                                    <strong>Industry of the Employer</strong>
                                </div>
                                <div className="col-md-8">
                                    <span>IT - Software</span>
                                </div>
                            </div>
                            <div className="row mt-3 mx-0 form-group">
                                <div className="col-md-4">
                                    <strong>Department / Functional Area of the Job</strong>
                                </div>
                                <div className="col-md-8">
                                    <span>Media Planning / Buying, Application Programming / Maintenance</span>
                                </div>
                            </div>
                            <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Job Description</strong>
                            </div>
                            <div className="col-md-8">
                                <strong>
                                We are seeking experienced Full stack developer between 5- 10 years who have hands-on development experience in Java, J2EE, Web services, Frameworks, and UI Technologies. This position is for a technology expert who will be responsible for multiple applications.</strong>
                                <br/>
                                <br/>
                                <strong>Skills :</strong>
                                <span>Excellent communication, teamwork and interpersonal skills.
                                    Strong analytical capability and problem-solving skills.
                                    Bachelor of Science in Computer Science or relevant technical degree.
                                    More than 5 years of work experience in software development.
                                    OOPS, Database Knowledge (Sybase/ DB2)</span>
                                    <br/>
                                <br/>
                                <strong>Required Technical Skills : </strong>
                                <ul className="list-unstyled">
                                    <li>
                                        <span>Java / Core Java / Advanced Java</span>
                                    </li>
                                    <li>
                                        <span>Spring/ Hibernate/ Struts/ CDI</span>
                                    </li>
                                    <li>
                                        <span>EJB, Web services,</span>
                                    </li>
                                    <li>
                                        <span>Angular 4 above</span>
                                    </li>
                                    <li>
                                        <span>JSP, Servlets</span>
                                    </li>
                                    <li>
                                        <span>JavaScript toolkits</span>
                                    </li>
                                    <li>
                                        <span>Web/Application Servers</span>
                                    </li>
                                    <li>
                                        <span> OO and Relational Modeling skills</span>
                                    </li>
                                    <li>
                                        <span> Tomcat, Apache Webservers</span>
                                    </li>
                                    <li>
                                        <span>Desired Technical Skills:</span>
                                    </li>
                                    <li>
                                        <span> CSS, HTML5 a plus</span>
                                    </li>
                                    <li>
                                        <span>ExtJS, Jquery</span>
                                    </li>
                                    <li>
                                        <span> Location: Collabera Bangalore</span>
                                    </li>
                                    <li>
                                        <span>Max Budget: 12 LPA</span>
                                    </li>
                                    <li>
                                        <span>Joining: Immediate to 15 Days only</span>
                                    </li>
                                        
                                </ul>

                                <div className="mt-4">
                                    <strong>Interested can share updated resume at hr@syoloconsulting.com</strong>
                                </div>
                            </div>
                            </div>
                            <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Keywords / Skills</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Java,Hibernate,Struts,"Spring Framework","Core Java",Servlets,"Advanced Java",Angular</span>
                            </div>
                            </div>
                            <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Mandatory Skills</strong>
                            </div>
                            <div className="col-md-8">
                                <span>java, angular</span>
                            </div>
                            </div>
                            <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Total Experience</strong>
                            </div>
                            <div className="col-md-8">
                                <span>5 Yrs to 8 Yrs</span>
                            </div>
                            </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Salary Type</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Yearly</span>
                            </div>
                        </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Annual Salary Offered</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Rs 7 Lakh / Yr to Rs 12 Lakh / Yr</span>
                            </div>
                        </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Location of the Job</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Bangalore</span>
                            </div>
                        </div>

                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Job Type :</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Full time</span>
                            </div>
                        </div>

                        
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Shift Type :</strong>
                            </div>
                            <div className="col-md-8">
                                <span>- Not Mentioned -</span>
                            </div>
                        </div>

                        <h5 className="mt-3 mb-2">Desired Candidate Details</h5>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Industry</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Any</span>
                            </div>
                        </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Current Location:</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Any</span>
                            </div>
                        </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Annual Salary</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Any to Any</span>
                            </div>
                        </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Team Size Managed</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Any</span>
                            </div>
                        </div>

                        <h5 className="mt-3 mb-2">Company Details</h5>

                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Company Name</strong>
                            </div>
                            <div className="col-md-8">
                                <span>Margdarshakam India</span>
                            </div>
                        </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Company Description</strong>
                            </div>
                            <div className="col-md-8">
                                <div className="d-flex">
                                <div className="">
                                    <input type="checkbox" name=""/>
                                </div>
                                <div className="">
                                    <strong className="ml-1"> Hide Company Information from candidates</strong>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Telephone</strong>
                            </div>
                            <div className="col-md-8">
                            <input type="text" name="" className="form-control pamInput"/>
                            </div>
                        </div>

                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Email</strong><sup className="text-danger">*</sup>
                            </div>
                            <div className="col-md-8">
                            <input type="email" placeholder="email" name="" className="form-control pamInput"/>
                            <div className="d-flex">
                                <div className="">
                                <input type="checkbox" name=""/>
                                </div>
                                <div className="ml-1">
                                <strong > Hide Company Information from candidates</strong>
                                </div>
                            </div>  
                            </div>
                        </div>
                        <div className="row mt-3 mx-0 form-group">
                            <div className="col-md-4">
                                <strong>Applications on Email</strong>
                            </div>
                            <div className="col-md-8">
                            <select  name="" className="form-control pamInput">
                                <option >Receive All Applications Immediately</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex pl-2">
                            <div className="">
                            <input type="checkbox" name=""/>
                            </div>
                            <div className="">
                            <span className="ml-2"> I agree to the  <a href="">terms of use</a>.</span>
                            </div>
                        </div> 

                        <ul className="w-100 mt-4 pl-0 htomin">
                            <li className="">
                                <button className="ntns ml-0">Save Changes</button>
                            </li>
                            <li className="">
                                <button className="ntns">Republish</button>
                            </li>
                            <li className="">
                                <button className="ntns">Expire</button>
                            </li>
                            <li className="">
                                <button className="ntns">Cancel</button>
                            </li>

                        </ul>
                        </div>
                    </div>

                <div className="col-md-4">
                    <div className="">
                       

                        <div className="">
                          <div id="tabs" className="project-tab shadow">
                            <nav>
                                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">JD Preview</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Search Preview</a>
                                   
                                </div>
                            </nav>
                            <div className="tab-content mt-0" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                  <div className="p-2 sideBoa">
                                    <h5 className="mb-2">Hiring for Java full Stack Developer II Bangalore II Exp min 5 years</h5>
                                    <span className="text-info">Margdarshakam India </span>

                                    <div className="row">
                                        <div className="col-md-4 px-0">
                                          <div className="PoaSid">
                                            <span><i className="fas fa-briefcase"></i></span>
                                            <span className="ml-1">5 Yrs to 8 Yrs</span>
                                          </div>
                                        </div>
                                        <div className="col-md-4 px-0">
                                          <div className="PoaSid">
                                            <span><i className="fas fa-wallet"></i></span>
                                            <span className="ml-1">Rs 7 to 12 Lakh / Yr</span>
                                          </div>
                                        </div>
                                        <div className="col-md-4 px-0">
                                          <div className="PoaSid">
                                            <span><i className="fas fa-map-marker-alt"></i></span>
                                            <span className="ml-1">Bangalore</span>
                                          </div>
                                        </div>
                                    </div>

                                      <h6 >Job Description</h6>

                                      <div className="scrolaj">
                                        <span>We are seeking experienced Full stack developer between 5- 10 years who have hands-on development experience in Java, J2EE, Web services, Frameworks, and UI Technologies. This position is for a technology expert who will be responsible for multiple applications.
                                            Skills :Excellent communication, teamwork and interpersonal skills.Strong analytical capability and problem-solving skills.Bachelor of Science in Computer Science or relevant technical degree.More than 5 years of work experience in software development.OOPS, Database Knowledge (Sybase/ DB2)Required Technical Skills : Java / Core Java / Advanced JavaSpring/ Hibernate/ Struts/ CDIEJB, Web services,Angular 4 aboveJSP, ServletsJavaScript toolkitsWeb/Application Se</span>
                                      </div>
                                      
                                      <h6 >Department</h6>
                                        <span>Media Planning / Buying, Application Programming / Maintenance</span>
                                      
                                      <h6>Industry</h6>  

                                        <span>IT - Software</span>
                                        <h6>Skills</h6>
                                        <span>Java,Hibernate,Struts,"Spring Framework","Core Java",Servlets,"Advanced Java",Angular</span>
                                  </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="p-2 sideBoa poki">
                                      <h5 className="mb-2">Hiring for Java full Stack Developer II Bangalore II Exp min 5 years</h5>
                                    <div className="dpsi">
                                      <span className="text-info">Margdarshakam India </span>
                                      <span>Posted on : 20/Oct/2020</span>
                                    </div>

                                    <ul className="mt-2 pl-4 dfle">
                                        <li className="">
                                          <span>5 Yrs to 8 Yrs</span>
                                        </li>
                                        <li className=" ml-5">
                                          <span>Bangalore</span>
                                        </li>
                                    </ul>

                                    <div className="scrolaj">
                                        <span>We are seeking experienced Full stack developer between 5- 10 years who have hands-on development experience in Java, J2EE, Web services, Frameworks, and UI Technologies. This position is for a technology expert who will be responsible for multiple applications.
                                            Skills :Excellent communication, teamwork and interpersonal skills.Strong analytical capability and problem-solving skills.Bachelor of Science in Computer Science or relevant technical degree.More than 5 years of work experience in software development.OOPS, Database Knowledge (Sybase/ DB2)Required Technical Skills : Java / Core Java / Advanced JavaSpring/ Hibernate/ Struts/ CDIEJB, Web services,Angular 4 aboveJSP, ServletsJavaScript toolkitsWeb/Application Se</span>
                                      </div>
                                      <div className="position-relative">
                                        <div className="pSkils">
                                          <div className="">
                                            <span><strong>Skills :</strong>
                                              <small className="ml-1">Java,Hibernate,Struts,"Spring Framework","Core Java",Servlets,"Advanced Java",Angular</small>
                                            </span>
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
   	</div>
             </section>   
         </section> 
     </section>
           
    );
    }
}

export default CompanyJobDetails;