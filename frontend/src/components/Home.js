import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
class Home extends Component {
    render() {
        return <section className="mainDiv">
        <section className=" colBackLightBlue">
                <Header/>
                <div className="container ptTT pb-5">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="padT">
                            <div className="">
                                <h1>
                                    <strong>Drop 
                                        <span className="colBlu">Resume </span>& get your 
                                        <span className="colBlu">Resume </span>
                                    </strong>
                                </h1>
                                <span className="fnt500">Find Jobs, Employment & Career Opportunities</span>
                            </div>
                            <form className="mt-2">
                                <div className="form-group POsrt">
                                    <input type="text" placeholder="Jobs title, skill or company" name="" className="form-control "/>
                                    <span className="">
                                    <img src={require("../assets/images/Search.png")} className="img-fluid"/>
                                    </span>
                                </div>
                            <div className="form-group POsrt">
                                <input type="text" placeholder="Town city or postcode" name="" className="form-control"/>
                                <span className="">
                                <img src={require("../assets/images/Town-city-nav.png")} className="img-fluid"/>
                                </span>
                            </div>

                            <button className="btn bnlurrt py-2 px-3 bordRAD0"> 
                            <img src={require("../assets/images/Find-white.png")} className="img-fluid"/> Find Jobs</button>
                            </form>
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

     <div className="row">
      <div className="col-md-3">
        <div className="pt-5">
          <h2>Choose Your Sector</h2>

          <span className="fnt500 colGry mt-4">
            I truely believe Augustine's words are true and if you
            look at history you know it is true.
          </span>

          <button className="mt-4 btn btn-default border rounded"><strong>View More Jobs</strong></button>
        </div>
      </div>
      <div className="col-md-9">
        <div className="">
            <div className="row m-0">
              <div className="col-md-3 mt-3">
                <div className="p-3 text-center Fnte">
                    <div className="">
                      <img src={require("../assets/images/Accountancy.png")} className="img-fluid"/>
                    </div>
                    <h5><strong>Accountancy</strong></h5>
                    <span >301 Open Position</span>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="p-3 text-center Fnte">
                    <div className="">
                      <img src={require("../assets/images/Accountancy.png")} className="img-fluid"/>
                    </div>
                    <h5><strong>Apprenticeships</strong></h5>
                    <span >301 Open Position</span>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="p-3 text-center Fnte">
                    <div className="">
                      <img src={require("../assets/images/Accountancy.png")} className="img-fluid"/>
                    </div>
                    <h5><strong>Banking</strong></h5>
                    <span >301 Open Position</span>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="p-3 text-center Fnte">
                    <div className="">
                      <img src={require("../assets/images/Accountancy.png")} className="img-fluid"/>
                    </div>
                    <h5><strong>Education</strong></h5>
                    <span >301 Open Position</span>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="p-3 text-center Fnte">
                    <div className="">
                      <img src={require("../assets/images/Accountancy.png")} className="img-fluid"/>
                    </div>
                    <h5><strong>Engineering</strong></h5>
                    <span >301 Open Position</span>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="p-3 text-center Fnte">
                    <div className="">
                      <img src={require("../assets/images/Accountancy.png")} className="img-fluid"/>
                    </div>
                    <h5><strong>Estate Agency</strong></h5>
                    <span >301 Open Position</span>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="p-3 text-center Fnte">
                    <div className="">
                      <img src={require("../assets/images/Accountancy.png")} className="img-fluid"/>
                    </div>
                    <h5><strong>IT & Telecoms</strong></h5>
                    <span >301 Open Position</span>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="p-3 text-center Fnte">
                    <div className="">
                      <img src={require("../assets/images/Accountancy.png")} className="img-fluid"/>
                    </div>
                    <h5><strong>Legal</strong></h5>
                    <span >301 Open Position</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
   </section>
    
   <section className="container py-5">
        <div className="text-center">
            <h1>It's simple to get started</h1>
            <span className="colGry">
            Give yourself the power of responsibility. Remind your the only thing stopping you is yourself.
            </span>
        </div>
        <div className="">
            <img src={require("../assets/images/getstarted.png")} className="img-fluid"/>
        </div>
    </section>


    <section className="container py-5">
    <h4>Jobs You May Be Interested In</h4>
    <div className="">
        <div className="row m-0">
          <div className="col-md-6">
            <div className="row m-0">
                <div className="col-md-3">
                  <div className="">
                    <img src={require("../assets/images/client1.png")} className="img-fluid"/>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="">
                    <h5>Post Room Operative</h5>
                    <small className="colGry">via <span className="colBlu">Trout Design Ltd</span></small>
                    <small className="colGry">Wellesley Rd, London</small>
                    <br/>
                    <small className="colGry">Accountancy</small><small className="ml-2 colBlu">Freelance</small>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="">
                    <div className="border rounded-circle p-1">
                      <img src={require("../assets/images/Heart.png")} className="img-fluid"/>
                    </div>
                    
                    <div className="mt-2">
                        <small className="colGry">
                          <span><img src={require("../assets/images/time-icon.png")} className="img-fluid"/></span> 
                          1H ago
                        </small>

                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>

    </div>
</section>    
<section className="container py-5"> 
  <div className="row">
    <div className="col-md-6">
      <div className="HIssqq ">
        <h1>7000+ <span className="colBlu"> Browse Jobs</span></h1>
        <h4 className="fnt500">Search all the open positions on the web.</h4>

        <button className="btn bnlurrt fnt24">SEARCH JOBS</button>
      </div>
    </div>
    <div className="col-md-6">
      <div className="">
        <img src={require("../assets/images/Browse-illustration.png")} className="img-fluid"/>
      </div>
    </div>
  </div>
</section>
<section className="container py-5"> 
  <div className="row">
    <div className="col-md-6">
      <div className="">
         <img src={require("../assets/images/why-choose.png")} className="img-fluid"/>
      </div>
    </div>
    <div className="col-md-6">
      <div className="Fnte pt-4">
        <h3 className="fnt500 mb-4">Why You Choose Job Among Other Job Site?</h3>
        <small className="colGry mt-5 fnt500 fnt14">I truly believe It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and  

        </small>

        <div className="row m-0 mt-5">
          <div className="col-md-6 px-1">
            <div className="d-flex">
              <div className="ml-2">
                  <img src={require("../assets/images/Best-Talented-people.png")} className="img-fluid"/>
              </div>
                <h6 className="fnt500">Best talented people</h6>
            </div>
            <div className="d-flex">
              <div className="ml-2">
                  <img src={require("../assets/images/Easy-to-communicate.png")} className="img-fluid"/>
              </div>
                <h6 className="fnt500">Easy to communicate</h6>
            </div>
          </div>

          <div className="col-md-6 px-1">
            <div className="d-flex">
              <div className="ml-2">
                  <img src={require("../assets/images/Easy-to-find-candidate.png")} className="img-fluid"/>
              </div>
                <h6 className="fnt500">Easy to find candidate</h6>
            </div>
            <div className="d-flex">
              <div className="ml-2">
                  <img src={require("../assets/images/Global-recuritment.png")} className="img-fluid"/>
              </div>
                <h6 className="fnt500">Global recruitment option</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className=" colBackLightBlue ">
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-7">
          <div className="ptTT">
            <h1>Browse Hundreds Of Jobs</h1>

            <h5 className="mt-2 fnt500">We are efficiently delivering tons of jobs straight to your pocket.</h5>


          </div>
        </div>
         <div className="col-md-5">
          <div className="">
            <img src={require("../assets/images/Mobile-application.png")} className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
            </section>
    }
}

export default Home;