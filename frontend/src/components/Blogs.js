import React, { Component } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import {Link} from 'react-router-dom';


class Blogs extends Component {
   
   
    render() {
        return <section className="mainDiv">
                <div className="colBackLightBlue">
                <Header/>
                    
                </div>
                <section className="BgcGry">
                    <div className="container">
                        <div className="row py-4">
                            <div className="col-md-6">
                                <div >
                                    <h6>Blog</h6>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-right">
                                    <Link to ="/" className="colGry">Home</Link><span> / </span> <span className="text-dark"> Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="">
                                <div className="">
                                    <img src={require("../assets/images/Mobile-application.png")} className="ht400 img-fluid"/>
                                </div>
                                <div className="pt-3">
                                    <span >Tips</span>
                                    <h5> 11 Tips to help </h5>
                                    <span className="colGry">
                                        <span><img src={require("../assets/images/time-icon.png")} className="img-fluid"/></span> 
                                        <span className="ml-2">date</span>
                                    </span>
                                    <span className="ml-3 colGry">
                                        <span><i class="far fa-envelope"></i></span> 
                                        <span className="ml-2">date</span>
                                    </span>
                                </div>
                                <div className="mt-3">
                                    <span className="colGry">Description</span>
                                    <br/>
                                    <Link to="" className="mt-4">Read More <i class="fas fa-long-arrow-alt-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <div className="my-4 position-relative">
                                    <input type="text" className="form-control" name="" placeholder="Search Here"/>
                                    <span className="SechIco"><i class="fas fa-search"></i></span>
                                </div>

                                <div className="">
                                    <h5 className="py-3 ">Category</h5>
                                    <div className="rounded bg-white p-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className="py-2">
                                                <div className="dsp_P colGry">
                                                    <span>Accountancy</span>
                                                    <span>(2)</span>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="dsp_P colGry">
                                                    <span>Banking</span>
                                                    <span>(2)</span>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="dsp_P colGry">
                                                    <span>Charity & Voluntary</span>
                                                    <span>(2)</span>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="dsp_P colGry">
                                                    <span>Digital & Creative</span>
                                                    <span>(2)</span>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="dsp_P colGry">
                                                    <span>Graduate</span>
                                                    <span>(2)</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="">
                                    <h5 className="py-3">Recent Posts</h5>
                                    <div className="rounded bg-white p-3">
                                        <div className="row mx-0 mt-2">
                                            <div className="col-md-3">
                                                <div className="">
                                                    <img src={require("../assets/images/client1.png")} className="img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="">
                                                   <span>Canada Adds 2500</span><br>
                                                   </br>
                                                   <small className="colGry"> Date</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mx-0 mt-2">
                                            <div className="col-md-3">
                                                <div className="">
                                                    <img src={require("../assets/images/client1.png")} className="img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="">
                                                   <span>Canada Adds 2500</span><br>
                                                   </br>
                                                   <small className="colGry"> Date</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mx-0 mt-2">
                                            <div className="col-md-3">
                                                <div className="">
                                                    <img src={require("../assets/images/client1.png")} className="img-fluid"/>
                                                </div>
                                            </div>
                                            <div className="col-md-9">
                                                <div className="">
                                                   <span>Canada Adds 2500</span><br>
                                                   </br>
                                                   <small className="colGry"> Date</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
     
  <Footer/>
            </section>
    }
}

export default Blogs;