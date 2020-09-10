import React, { Component } from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import axios from 'axios';

class Agencies extends Component {
    constructor(props){
        super(props);

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeEmail  = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeCompProfile = this.onChangeCompProfile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // username : '',
            phone:'',
            email:'',
            compProf:'',
            comp_name:'',
        }
    }
    onChangeCompanyName(e){
        this.setState({
            comp_name: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeCompProfile(e){
        this.setState({
            compProf: e.target.value
        })
    }
    onChangePhone(e){
        this.setState({
            phone:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const company = {
            comp_name: this.state.comp_name,
            email: this.state.email,
            phone:  this.state.phone,
            compProf: this.state.compProf
        }
        console.log(company);
        axios.post('/requestDemo/add',company)
            .then((res) => {
                    if(res.data.code === 1){
                        // console.log(res.data.msg);
                        alert("Request Sent, We Will Call You Soon.");
                        // swal("Thanks..!", 'Registered Sucessfully', "success");
                    }
                // if(res.data.code==1){
                //     swal("Thanks..!", `Registered Sucessfully`, "success");
                // }else{
                //     console.log("eeeee");
                // }
                   
            });
     
    }
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
                                <a href="#requestDemo" className="btn bnlurrt py-2 px-3 bordRAD0">Request Demo</a>
                                {/* <button ></button> */}
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
            
            <section className="container py-5 " id="requestDemo">
                <div className="row">
                    <div className="col-md-5 ">
                        <div className="card shadow">
                            <div className="p-4">
                                <h2 className="text-center mb-4 mt-3">Request Demo</h2>

                                <form className="pt-2" onSubmit={this.onSubmit}>
                                    {/* <div className="form-group">
                                        <input type="text" placeholder="Full Name" name="" value={this.state.full_name} onChangeFull className="form-control" />
                                    </div> */}
                                    <div className="form-group">
                                        <input type="text" placeholder="Company Name" name="" value={this.state.comp_name} onChange={this.onChangeCompanyName} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Your Business Email" name="" value={this.state.email} onChange={this.onChangeEmail} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="number" placeholder="Phone Number" name="" value={this.state.phone} onChange={this.onChangePhone} className="form-control" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <input type="text" placeholder="Tell us what you do" name="" value={this.state.compProf} onChange={this.onChangeCompProfile} className="form-control" />
                                    </div>
                                    {/* <div className="">
                                        <span className=""><strong>For which region are you looking to hire?</strong></span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <input type="checkbox" /> <span>United States</span>
                                            </li>
                                            <li>
                                                <input type="checkbox" /> <span>Canada</span>
                                            </li>
                                        </ul>
                                    </div> */}
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