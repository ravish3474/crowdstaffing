import React, { Component } from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


class ContactUs extends Component {
    render() {
    return (
    
        <section className="mainDiv">
            <section className=" colBackLightBlue">
                <Header/>
                
            </section>
            <section className="py-4 text-center bckloGry">
                <h2 className="colBlu">Contact Us  </h2>
            </section>
            <section className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="p-5 text-center">
                            <div className="">
                                <img src={require("../assets/images/Address.png")} className="img-fluid"/>
                            </div>
                            <div className="">
                                <h6 className="m-0">Address</h6>
                                <small className="colGry">
                                    214 West Arnold St. 
                                    New York, NY 100002
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-5 text-center">
                            <div className="">
                                <img src={require("../assets/images/Phone-icon.png")} className="img-fluid"/>
                            </div>
                            <div className="">
                                <h6 className="m-0">Phone Number</h6>
                                <small className="colGry">
                                    (123) 345-989
                                    
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-5 text-center">
                            <div className="">
                                <img src={require("../assets/images/Email.png")} className="img-fluid"/>
                            </div>
                            <div className="">
                                <h6 className="m-0">Email</h6>
                                <small className="colGry">
                                    support@xhirez.com
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-5 text-center">
                            <div className="">
                                <img src={require("../assets/images/FAX.png")} className="img-fluid"/>
                            </div>
                            <div className="">
                                <h6 className="m-0">Fax</h6>
                                <small className="colGry">
                                    (123) 345-6789
                                </small>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>

            <section className="py-4 container">
                <div className="text-center">
                    <h3>Let's Get In Touch!</h3>
                    <small className="colGry">
                        We have completed over a 1000+ projects for five hundred clients. Give us your next project.
                    </small>
                </div>
                <div className="p-5">
                    <form>
                        <div className="row m-0">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder="Enter Your Name" name="" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" placeholder="Subject" name="" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" placeholder="Enter Your Email Address" name="" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="number" placeholder="Enter Your Phone Number" name="" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-md-12">
                                <textarea className="form-control" placeholder="Message" rows="5" name=""></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn bnlurrt py-2 px-3 bordRAD0">Send your message</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="container p-4 pb-5">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div className="d-flex">
                            <div className="">
                                <img src={require("../assets/images/Chat-US-Online.png")} className="img-fluid"/>
                            </div>
                            <div className="mt-2 ml-2">
                                <h6 className="mb-0">Chat to us online</h6>
                                <small className="colGry">Chat to us online if you have any question.</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="d-flex">
                            <div className="">
                                <img src={require("../assets/images/Call-us.png")} className="img-fluid"/>
                            </div>
                            <div className="mt-2 ml-2">
                                <h6 className="mb-0">Call us</h6>
                                <small className="colGry">our support agents will work with you to meed your lending needs.</small>
                                <br/>
                                <strong>(123) 345-678</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="d-flex">
                            <div className="">
                                <img src={require("../assets/images/Read-Latest-News.png")} className="img-fluid"/>
                            </div>
                            <div className="mt-2 ml-2">
                                <h6 className="mb-0">Read our latest news</h6>
                                <small className="colGry">Visit our Blog page and know more about news and career tips.</small><br/>
                                <small><a className="">Read Blog Post</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
           
    );
    }
}

export default ContactUs;