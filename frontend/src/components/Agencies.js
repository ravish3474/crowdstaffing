import React, { Component } from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


class Agencies extends Component {
    render() {
    return (
    
        <section className="mainDiv">
            <section className=" colBackLightBlue">
                <Header/>
                <div className="container ptTT pb-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <h2>A new stream of<strong className="colBlu">opportunities</strong> at your
                                <strong className="colBlu"> fingertips</strong>
                                </h2>

                                <span>Connect your candidates to open positions in our hiring marketplace and earn rewards for every placement.</span>
                                <br></br>
                                <button className="btn bnlurrt py-2 px-3 bordRAD0">Request Demo</button>
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
                    <h5>Join a network where  <span className="colBlu">everyone prospers</span></h5>
                    <span>Crowdstaffing’s platform connects companies to recruitment professionals and candidates, creating economic opportunity for all members.</span>
                </div>
                <div className="row px-3 py-4">
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Expand Your Funnel</h5>
                            </div>
                            <p>Gain access to new job opportunities daily--with ZERO business development effort. Upon registration you have immediate access to the Crowdstaffing hiring marketplace. </p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Get Rewards for Performance</h5>
                            </div>
                            <p>Earn payments for every placement. The more you participate and the better you perform, the more job opportunities you will receive. Plus, you can earn exclusive access to certain client opportunities.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Monetize Your Candidate Pool</h5>
                            </div>
                            <p>Managing resumes, taking notes, and setting up appointments are standard in any applicant tracking system. But our tech goes a step further, bringing revenue opportunities directly to you and your recruiters. Our built-in AI automatically matches your candidates to new jobs and then notifies you so you can take further action.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Enjoy Carefree Placements</h5>
                            </div>
                            <p>Once a candidate gets hired, you get paid within 10 days of when we collect payment from the client. Crowdstaffing can also manage the Employer of Record services, onboarding, payroll, and compliance.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="colBackLightBlue  HiNG">
                            <div className="d-flex ">
                                <img src={require("../assets/images/Accountancy.png")} className="img-fluid PIUH50"/>
                                <h5 className="">Represent Your Brand</h5>
                            </div>
                            <p>Every employer and candidate that you interact with is a potential champion for your brand. Because we understand the value of your brand we’ve ensured that you can: customize your URL, upload your logo, and set your email signature to best represent your brand to candidates and employers in our platform.</p>
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

export default Agencies;