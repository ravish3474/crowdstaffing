import React, { Component } from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


class Features extends Component {
    render() {
    return (
    
        <section className="mainDiv">
            <section className=" colBackLightBlue">
                <Header/>
                <div className="container ptTT pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <h2>A <strong className="colBlu">modern recruiting</strong> platform with a built-in hiring
                                <strong className="colBlu"> marketplace</strong>
                                </h2>

                                <span>Earn cash rewards on every placement.</span>
                                <br></br>
                                <button className="btn bnlurrt py-2 px-3 bordRAD0">Get An Account</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                            <img src={require("../assets/images/intro.png")} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
            

            
            <section className="container py-5">
                <div className="my-3 text-center">
                    <h5>Built with <span className="colBlu">recruiter</span> and <span className="colBlu">staffing agency</span> success in mind.</h5>
                    <span></span>
                </div>
                <div className="row px-3 py-4">
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Hiring Marketplace</h5>
                            </div>
                            <p>Grow your business with instant access to the Crowdstaffing hiring marketplace where clients post open positions--and you can too, especially if you’d like extra support recruiting for hard-to-find roles. Showcase your capabilities to new clients and get support on your own roles whenever needed. </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Performance Tracking</h5>
                            </div>
                            <p>Access reports that track your recruiters’ activities, progress, and performance as well as your agency’s overall success.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Team and Requisition Management</h5>
                            </div>
                            <p>
SetSet up your agency profile, manage your brand, and invite team members. You can also set up teams, manage recruiter account access-levels, and track individual performance.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Recruitment Marketing</h5>
                            </div>
                            <p>Empower every recruiter to market and promote the jobs you’re working on with built-in social marketing features.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Applicant Tracking</h5>
                            </div>
                            <p>Track every candidate submission during the entire hiring lifecycle. Transparent workflows that reflect each employer’s hiring process give you visibility on every candidate’s progress and allow you to interact with stakeholders as needed throughout the hiring process.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Talent Pools</h5>
                            </div>
                            <p>Organize your candidate pools with tags, keep your teams up-to-date with notes, set follow-up reminders, and schedule interviews. Plus, our smart algorithms will notify you when your candidates match a new job opening in the hiring marketplace.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">	Employee Management</h5>
                            </div>
                            <p>
Crowdstaffing can help agencies that require full employee management, including candidate onboarding, offer management, Employer of Record services, payroll, and compliance.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Communication and Collaboration</h5>
                            </div>
                            <p>Manage all your correspondence with your recruiting team members, hiring managers and candidates from one central place with our messaging system. Followup with hiring managers on candidates, schedule interviews, take notes, tag stakeholders in comments and more.</p>
                        </div>
                    </div>
                    

                </div>
            </section>
            
            <section className="container py-5 ">
                <div className="row">
                    <div className="col-md-5 ">
                        <div className="card shadow">
                            <div className="p-4">
                                <h2 className="text-center mb-4 mt-3">Request Access</h2>

                                <form className="pt-2">
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" name="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Your Business Email" name="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" placeholder="Phone Number" name="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Company Name" name="" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Tell us what you do" name="" className="form-control" />
                                    </div>
                                    <div className="d-flex">
                                        <div>
                                            <input type="checkbox" name=""/>  
                                        </div> 
                                        
                                            <small className="ml-1">I confirm that I am representative of the organization who is legally authorized to sign the agreement on behalf of the organization.</small>
                                           
                                    </div>
                                    <button className="w-100 btn bnlurrt py-2 px-3 btn_tras"><h4 className="mb-0">Request Demo</h4></button>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 p-5">
                        <div className="">
                            <img src={require("../assets/images/intro.png")} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
           
    );
    }
}

export default Features;