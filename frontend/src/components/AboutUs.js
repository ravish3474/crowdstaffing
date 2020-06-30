import React, { Component } from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';


class AboutUs extends Component {
    render() {
    return (
    
        <section className="mainDiv">
            <section className=" colBackLightBlue">
                <Header/>
                
            </section>
            <section className="py-4 text-center bckloGry">
                <h2 className="colBlu">About Us  </h2>
            </section>
            <section className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="p-4 ">
                            <h3>About Xhirez</h3>

                            <span className="colGry mt-4">
                            Combining the best minds in staffing with the latest trends in technology, design, and strategy, 
                            Crowdstaffing has modernized the vendor management system (VMS). Through our proprietary hiring platform, complete with robust AI capabilities and a cloud-based hiring marketplace, 
                            we’re helping businesses connect with the right recruiters at the right time to staff every role they need with great talent
                            </span>
                            <br/>
                            <div className="mt-4">
                            A Tech Company Reinventing Hiring and Vendor Management
                            </div>
                            <div className="mt-3">
                                <button className="btn bnlurrt py-3 px-4 bordRAD0">View More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-5 text-center">
                            <img src={require("../assets/images/About-US-Image.png")} className="img-fluid"/>
                        </div>
                    </div>
                  
                </div>
            </section>

            <section className="container py-3">
                <div className="py-3 text-center">
                    <h3>How It Works?</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div className="p-5 text-center">
                            <div className="">
                                <img src={require("../assets/images/Create-an-Account.png")} className="img-fluid"/>
                                
                            </div>
                            <div className="">
                                <h5 className="m-0">Create aAn Account</h5>
                                <small className="colGry">
                                   Post a job to tell us about your project. We'll quickly match you with the right freelancers.
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="p-5 text-center">
                            <div className="">
                                <img src={require("../assets/images/Search-Jobs.png")} className="img-fluid"/>
                            </div>
                            <div className="">
                                <h5 className="m-0">Search Jobs</h5>
                                <small className="colGry">
                                    Browse profiles, reviews, and proposals then interview top candidates.
                                    
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="p-5 text-center">
                            <div className="">
                                <img src={require("../assets/images/Save-&-Apply.png")} className="img-fluid"/>
                            </div>
                            <div className="">
                                <h5 className="m-0">Save & Apply</h5>
                                <small className="colGry">
                                    Use the Upwork platform to chat, share files, and collaborate from your desktop or on the go.
                                </small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className="container-fluid my-5 py-3 bckloGry">
               <div className="container">
                    <div className="py-3 text-center">
                        <h3>What Our Clients Say About Us</h3>
                    </div>
                    <div className="">
                    <div className="card brd_non bg_none">
           <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="100000">
    <div className="w-100 carousel-inner" role="listbox">
      <div className="carousel-item active">
        <div className="carousel-caption row">
          <div className=" p-2 backTes mt-3 col-md-6">
           <div className="card rounded">
           <div className=" mx-0 pt-2">
              <div className="text-center ">
                 <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid htyW90"/>
                 <div className="">
                    <h5 className="m-0 colBlk">Kilian Sanjeev</h5>
                    <span className="colGry">CEO at <span className="">Alpha Investing</span></span>
                  </div>
              </div>
              
            </div>
              <div className="py-2 px-4">
                <span className="colGry ">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</span> 
              </div>
           </div>
          </div>
           <div className=" p-2 backTes mt-3 col-md-6">
           <div className="card rounded">
           <div className=" mx-0 pt-2">
              <div className="text-center ">
                 <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid htyW90"/>
                 <div className="">
                    <h5 className="m-0 colBlk">Kilian Sanjeev</h5>
                    <span className="colGry">CEO at <span className="">Alpha Investing</span></span>
                  </div>
              </div>
              
            </div>
              <div className="py-2 px-4">
                <span className="colGry ">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</span> 
              </div>
           </div>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <div className="carousel-caption row">
          <div className=" p-2 backTes mt-3 col-md-6">
           <div className="card rounded">
           <div className=" mx-0 pt-2">
              <div className="text-center ">
                 <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid htyW90"/>
                 <div className="">
                    <h5 className="m-0 colBlk">Kilian Sanjeev</h5>
                    <span className="colGry">CEO at <span className="">Alpha Investing</span></span>
                  </div>
              </div>
              
            </div>
              <div className="py-2 px-4">
                <span className="colGry ">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</span> 
              </div>
           </div>
          </div>
           <div className=" p-2 backTes mt-3 col-md-6">
           <div className="card rounded">
           <div className=" mx-0 pt-2">
              <div className="text-center ">
                 <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid htyW90"/>
                 <div className="">
                    <h5 className="m-0 colBlk">Kilian Sanjeev</h5>
                    <span className="colGry">CEO at <span className="">Alpha Investing</span></span>
                  </div>
              </div>
              
            </div>
              <div className="py-2 px-4">
                <span className="colGry ">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</span> 
              </div>
           </div>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        <div className="carousel-caption row">
          <div className=" p-2 backTes mt-3 col-md-6">
           <div className="card rounded">
           <div className=" mx-0 pt-2">
              <div className="text-center ">
                 <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid htyW90"/>
                 <div className="">
                    <h5 className="m-0 colBlk">Kilian Sanjeev</h5>
                    <span className="colGry">CEO at <span className="">Alpha Investing</span></span>
                  </div>
              </div>
              
            </div>
              <div className="py-2 px-4">
                <span className="colGry ">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</span> 
              </div>
           </div>
          </div>
           <div className=" p-2 backTes mt-3 col-md-6">
           <div className="card rounded">
           <div className=" mx-0 pt-2">
              <div className="text-center ">
                 <img src="http://via.placeholder.com/200x200" alt="" className="rounded-circle img-fluid htyW90"/>
                 <div className="">
                    <h5 className="m-0 colBlk">Kilian Sanjeev</h5>
                    <span className="colGry">CEO at <span className="">Alpha Investing</span></span>
                  </div>
              </div>
              
            </div>
              <div className="py-2 px-4">
                <span className="colGry ">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</span> 
              </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div className="float-right navi mb-4">
    <a className="" href="#carouselExampleControls" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon ico" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="" href="#carouselExampleControls" role="button" data-slide="next">
      <span className="carousel-control-next-icon ico" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
    </div>
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

export default AboutUs;