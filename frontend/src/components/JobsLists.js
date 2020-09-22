import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import {Link} from 'react-router-dom';
// import Categories from '../components/JobCategories';
// import LatestJobs from './Job_Latest';

class JobsLists extends Component {
   constructor(props){
       super(props);
        this.state={
            jobs:[],
            category:[],
            job_type:[],
            totalJobs:0
        }
        // t/his.getLatesJobs= this.getLatesJobs.bind(this);
       
   }
   componentDidMount(){
        if(this.props.match.params.id){
            console.log("GOt The ID:.");
            axios.get('/jobs/getJobByCategory/'+this.props.match.params.id)
                    .then(response =>{
                        console.log(response)
                        if(response.data.code == 1){
                            // console.log(response.data);
                            this.setState({
                                jobs: response.data.job_details.map(jobs =>jobs),
                                totalJobs:response.data.job_details.length
                            })
                        
                        }else{

                        }
                    })
            axios.get('/jobType/')
                .then(response =>{
                    // console.log(response)
                    if(response.data.length >0){
                        // console.log(response.data);
                        this.setState({
                            job_type: response.data.map(jobs =>jobs),
                            
                        })
                    
                    }else{

                    }
                })
            axios.get('/category/')
                .then(response =>{
                    // console.log(response)
                    if(response.data.code ==1){
                        // console.log(response.data);
                        this.setState({
                            category: response.data.data.map(cate =>cate),
                            
                        })
                    
                    }else{

                    }
                })
    }
   }
//    getJobsById(id){
    
//    }
  


   
    render() {
        return <section className="mainDiv">
        <section className=" colBackLightBlue">
                <Header/>
                <div className="container ptTT pb-5">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="padT">
                            {/* <div className="">
                                <h1>
                                    <strong>Drop 
                                        <span className="colBlu">Resume </span>& get your 
                                        <span className="colBlu">Resume </span>
                                    </strong>
                                </h1>
                                <span className="fnt500">Find Jobs, Employment & Career Opportunities</span>
                            </div> */}
                            {/* <form className="mt-2">
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
                            </form> */}
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
                {/* <div className="col-md-">
                    <div className="border-right">
                       
                        <div className="">
                            <div className="pb-2">
                                <h6>Specialism</h6>
                            </div>
                          
                            <ul className="list-unstyled fnt14">
                                {
                                    this.state.category.map(function(category){
                                        return <li>
                                                    <div className="d-flex">
                                                        <div className="">
                                                            <input type="checkbox" className="" name="" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <span className=" colGry">{category.categoryName}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                    })
                                }
                                
                                
                            </ul>
                        </div>
                        <hr/>
                        <div className="">
                            <div className="pb-2">
                                <h6>Job Type</h6>
                            </div>
                           
                            <ul className="list-unstyled fnt14">
                                {
                                    this.state.job_type.map(function(type){
                                        return  <li>
                                                    <div className="d-flex">
                                                        <div className="">
                                                            <input type="checkbox" className="" name="" />
                                                        </div>
                                                        <div className="ml-2">
                                                            <span className="colGry">{type.type_name}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                    })
                                }
                                
                               
                            </ul>
                        </div>
                        <hr/>
                        
                        <div className="">
                            <div className="pb-2">
                                <h6>Gender</h6>
                            </div>
                           
                            <ul className="list-unstyled fnt14">
                               
                                <li>
                                    <div className="d-flex">
                                        <div className="">
                                            <input type="checkbox" className="" name="" />
                                        </div>
                                        <div className="ml-2">
                                            <span className=" colGry">Male</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="">
                                            <input type="checkbox" className="" name="" />
                                        </div>
                                        <div className="ml-2">
                                            <span className=" colGry">Female</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <hr/>
                        
                    </div>
                </div> */}
                <div className="col-md-12">
                    <div className="">
                        
                        <div className="">
                            <div className="">
                                <h6>Showing 1-5 of <span className="text-primary">{this.state.totalJobs} Jobs</span></h6>
                            </div>
                        </div>

                        <div className="dsp_P py-4">
                            {/* <div className="">
                                <button className="btn py-2 px-3 btnDAa"><i class="fas fa-envelope"></i> <span className="ml-2">Get job alert </span></button>
                            </div> */}
                            <div className="d-flex">
                                <div className="mt-1"><span>Sort by:</span></div>
                                <div className="">
                                <select className="form-control" name="">
                                    <option value="" selected>Newest</option>
                                    <option value="" >Low to High</option>
                                    <option value="" >High to Low</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            {
                                this.state.jobs.map(function(jobs){
                                    return <div>
                                        <Link to={'/jobs/job-description/'+jobs._id}>
                                            <div className="row mt-2 py-3 border-bottom">
                                        
                                                <div className="col-md-2">
                                                    <div className="">
                                                        <img src={require("../assets/images/client1.png")} className="img-fluid"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="">
                                                        <h5 className="mb-0">{jobs.job_title}</h5>
                                                        <small className="colGry">via <span className="colBlu">{jobs.comapany_details.company_name}</span></small>
                                                        <small className="colGry"  className="ml-1"><span><i class="fas fa-map-marker-alt"></i></span><span className="ml-1">{jobs.add_state+', '+jobs.add_city+', '+jobs.add_country}</span></small>
                                                        <br/>
                                                        <small className="colGry">{jobs.job_category.category_name}</small><small className="ml-2 colBlu"><span><i class="fas fa-briefcase"></i></span><span  className="ml-1">{jobs.job_type.type_name}</span></small>
                                                    </div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="">
                                                        <div className="border rounded-circle jobListicn">
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
                                            </Link>
                                        </div>
                                    
                                    })
                            }
                            {/* <div className="row mt-2 py-3 border-bottom">
                                <div className="col-md-2">
                                    <div className="">
                                         <img src={require("../assets/images/client1.png")} className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="">
                                        <h5 className="mb-0">Marketing and Communications</h5>
                                        <small className="colGry">via <span className="colBlu">Fast Systems Consultans</span></small>
                                        <small className="colGry"  className="ml-1"><span><i class="fas fa-map-marker-alt"></i></span><span className="ml-1">Needham, MA</span></small>
                                        <br/>
                                        <small className="colGry">Accountancy</small><small className="ml-2 colBlu"><span><i class="fas fa-briefcase"></i></span><span  className="ml-1">Freelance</span></small>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="">
                                        <div className="border rounded-circle jobListicn">
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
                            <div className="row mt-2 py-3 border-bottom">
                                <div className="col-md-2">
                                    <div className="">
                                         <img src={require("../assets/images/client1.png")} className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="">
                                        <h5 className="mb-0">Marketing and Communications</h5>
                                        <small className="colGry">via <span className="colBlu">Fast Systems Consultans</span></small>
                                        <small className="colGry"  className="ml-1"><span><i class="fas fa-map-marker-alt"></i></span><span className="ml-1">Needham, MA</span></small>
                                        <br/>
                                        <small className="colGry">Accountancy</small><small className="ml-2 colBlu"><span><i class="fas fa-briefcase"></i></span><span  className="ml-1">Freelance</span></small>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="">
                                        <div className="border rounded-circle jobListicn">
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
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section className="colBackLightBlue">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                      <div className="broswes">
                            <h1>Browse Hundreds Of Jobs</h1>
                            <span className="my-3">We are efficiently delivering tons of jobs straight to your pocket.</span>
                            {/* <div className="">
                                <a href="">
                                    <img src={require("../assets/images/time-icon.png")} className="img-fluid"/>
                                </a>
                            </div> */}
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

export default JobsLists;