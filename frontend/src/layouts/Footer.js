import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return <section>
                 <div className="container pt-5">
                    <div className="row fnt14 fnt500 py-4">
                        <div className="col-md-3">
                            <div className="pt-2">
                                <h6>For Candidates</h6>

                                <ul className="LONpp list-unstyled m-0 mt-3">
                                <li>
                                    <Link  to="/login" >Browse Jobs</Link>
                                </li>
                                <li>
                                    <Link  to="/login" >Browse Categories</Link>
                                </li>
                                <li>
                                    <Link  to="/login" >Submit Resume</Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="pt-2">
                                <h6>For Employers</h6>

                                <ul className="LONpp list-unstyled m-0 mt-3">
                                <li>
                                    <Link  to="/login" >Browse Candidates</Link>
                                </li>
                                <li>
                                    <Link  to="/login" >Browse Categories</Link>
                                </li>
                                <li>
                                    <Link  to="/login" >Add Job</Link>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="pt-2">
                                <h6>Partner Sites</h6>

                                <ul className="LONpp list-unstyled m-0 mt-3">
                                <li>
                                    <a href="/blogs" >Blogs</a>
                                </li>
                                {/* <li>
                                    <a href="" >Job Page</a>
                                </li>
                                <li>
                                    <a href="" >Job Page Alternative</a>
                                </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="pt-2">
                                <h6>Contact Us</h6>

                                <ul className=" list-unstyled m-0 mt-3 colGry">
                                <li>
                                    <div className="d-flex">
                                        <span className="">
                                        <img src={require("../assets/images/Location.png")} className="img-fluid ht20"/>
                                        </span>
                                        <span className="ml-1">
                                        214 West Arnold St. New York, NY
                                        10002
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <span className="">
                                            <img src={require("../assets/images/Phone-icon.png")} className="img-fluid ht20"/>
                                        </span>
                                        <span className="ml-1">
                                        (+1)345-6789
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <span className="">
                                            <img src={require("../assets/images/mail-icon.png")} className="img-fluid ht20"/>
                                        </span>
                                        <span className="ml-1">
                                        support@Xhirex.com
                                        </span>
                                    </div>
                                </li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="dsp_P my-4">
                        <div className="">
                            <small className="colGry mt-1"> &copy; 2020 <span className="colgrn"><a href="" className="colBlu">Xhirex</a> </span>.
                             All Rights Reserved.</small>
                        </div>

                        <div className="">
                            <ul className=" list-unstyled m-0 d-flex colGry">
                                <li>
                                <span className="">
                                    <img src={require("../assets/images/Facebook.png")} className="img-fluid"/>
                                </span>
                                </li>
                                <li>
                                <span className="">
                                    <img src={require("../assets/images/Linkdin.png")} className="img-fluid"/>
                                </span>
                                </li>
                                <li>
                                <span className="">
                                    <img src={require("../assets/images/Twitter.png")} className="img-fluid"/>
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
    }
}

export default Footer;