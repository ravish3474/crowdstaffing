import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Style.css';
import {Link ,Router} from "react-router-dom";
class Splash extends Component {
    render() {
        return <div className="">
                <div className="backImg">
                <div className="container pt-4">
                    <img src={require("../assets/images/Xhirez-Logo.png")} className="img-fluid w-25"/>
                </div>
                <div className="container mt-5 text-center p-2 pb-5">
             
                    <div className="w-50 margtp ml-auto">
                        <h1 className="OUJPP">A modern hiring platform to manage your <strong className="colBlu"> contingent workforce</strong></h1>

                        <div className="py-4">
                            <Link to="home" className="mt-2 font20 btn_tras btn ">I am Looking to Hire</Link>

                            <Link to="company-login" className="mt-2 font20 btn_tras btn ml-3">I am ready to Recruit</Link>
                        </div>
                        <div className="mt-3">
                            <Link to="home" className="btn btnbckBlu w-100">LETS STARTED</Link>
                          
                        </div>
                    </div>
                </div>

               
            </div>
            <div className="bg_blue py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 ">
                                <img src={require("../assets/images/Xhirez-Logo-White.png")} className="img-fluid w-75"/>
                            </div>
                            <div className="col-md-10">
                                <ul className="list-unstyled List_p">
                                    <li>
                                        <Link to="/for-business">For Business</Link>
                                    </li>
                                    <li>
                                        <Link to="/for-staffing-agencies">For Staffing Agencies</Link>
                                    </li>
                                    <li>
                                        <Link to="/login">Job Seeker</Link>
                                    </li>
{/* <<<<<<< HEAD */}
                                    {/* <li>
                                        <Link to="">Blog</Link>
                                    </li> */}
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="">Resources</Link>
                                    </li>
                                    <li>
                                        <Link to="">Privacy Policy</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="">Terms & Condistions</Link>
                                    </li> */}
                                    <li>
                                        <Link to="/contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="border-white"></hr>
                        <div className="dsp_P text-white">
                            <div>
                                <ul className="list-unstyled m-0 d-flex">
                                    <li>
                                       <a ><img src={require("../assets/images/Facebook.png")}  className="img-fluid"/></a>
                                    </li>
                                    <li>
                                       <a ><img src={require("../assets/images/Linkdin.png")}  className="img-fluid"/></a>
                                    </li>
                                    <li>
                                       <a ><img src={require("../assets/images/Twitter.png")}  className="img-fluid"/></a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <span>
                                   Xhirez &copy; 2020 All Rights Reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    }
}

export default Splash;