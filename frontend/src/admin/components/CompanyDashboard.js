import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import CompanyFooter from './CompanyFooter';

import CompanyHeader from './CompanyHeader';



class CompanyDashboard extends Component {
    render() {
    return (
    
        <section className="">
           <CompanyHeader/>
           <section className="paduj5">
                <section className="py-5">
                    <div className="p-3 border">
                        <h6 className="mb-0 text-dark">Important Notice:</h6>
                        <p className="mb-0 fnt14">xhirez never sends any emails asking for your username and password. In case, you receive any such emails please do not respond and contact your Account Manager. Shine never threatens to close your account.
                            You can also inform us at compliance@xhirez.com in case of any fraud emails.</p>
                    </div>

                    <div className="row mx-0 my-3">
                        <div className="col-md-8 pl_0">
                            <div className="shadow padHire">
                                <h3 className="mb-0 hIreJ">Find your next Great Hire</h3>
                                <span>Choose from 3.40 crore candidates with exactly the skills you're seeking.</span>
                                <br/><button className="ntns ml-0">Find Candidates</button>
                            </div>
                        </div>
                        <div className="col-md-4 pr_0">
                            <div className="shadow padHire">
                                <h5 className="mb-0 loHi">Hire the right talent</h5>
                            
                                <ul className="w-100 mt-3 pl-0 htomin d-flex">
                                    <li className="">
                                        <button className="ntns ml-0">Post A Job</button>
                                    </li>
                                    <li className="">
                                    <button className="ntns">Post A Walkin</button>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="padie shadow dskTop">
                        <div className="dpsi border-bottom pb-1">
                            <span>Recent Searches</span>
                            <a href="">View All</a>
                        </div>
                        <div className="mt-3">
                            <ul className="pkli pikau">
                                <li>
                                    <span className="cursor-pointer">designation : sap crm developer</span>
                                </li>
                                <li>
                                    <span className="cursor-pointer">designation : sap crm developer</span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="mt-3 padie shadow">
                        <div className="row mx-0">
                            <div className="col-md-4 mt-3 px-0">
                                <div className="border">
                                    <div className="rectjobs">
                                        <a href="">Hiring for Java full Stack Developer II Bangalore II Exp min 5 years</a>
                                        <br/><p className="font10">Oct 20, 2020 | by mihr</p>
                                    </div>
                                    <div className="ml-3 py-2">4 applications<span className="pWs">0 new</span></div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3  px-0">
                                <div className="border">
                                    <div className="rectjobs">
                                        <a href="">Hiring for Java full Stack Developer II Bangalore II Exp min 5 years</a>
                                        <br/><p className="font10">Oct 20, 2020 | by mihr</p>
                                    </div>
                                    <div className="ml-3 py-2">4 applications<span className="pWs">0 new</span></div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3  px-0">
                                <div className="border">
                                    <div className="rectjobs">
                                        <a href="">Hiring for Java full Stack Developer II Bangalore II Exp min 5 years</a>
                                        <br/><p className="font10">Oct 20, 2020 | by mihr</p>
                                    </div>
                                    <div className="ml-3 py-2">4 applications<span className="pWs">0 new</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 padie shadow">
                        <div className="dpsi border-bottom pb-1">
                            <span>Usage Limits</span>
                            <a href="">View All</a>
                        </div>
                        <div className="mt-3">
                        <div className="row">
                                <div className="col-md-3">
                                    <div className="">
                                        <h3 className="mb-0 loHi">0</h3>
                                        <small>jobs posted in last 30 days</small>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="">
                                        <h3 className="mb-0 loHi">0</h3>
                                        <small>jobs remaining overall</small><br/>
                                        <Link to="">Buy Now</Link>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="">
                                        <h3 className="mb-0 loHi">843</h3>
                                        <small>CV viewed in last 30 days</small>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="">
                                        <h3 className="mb-0 loHi">0</h3>
                                        <small>emails sent in last 30 days</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>   
            </section> 
            <CompanyFooter/>
        </section>
           
    );
    }
}

export default CompanyDashboard;