import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import {Link} from 'react-router-dom';
import Categories from '../components/JobCategories';
import LatestJobs from './Job_Latest';



class JobDescriptionPage extends Component {
    constructor(props){
        super(props);
        this.state={
            job_title:'',
            job_desc:'',
            gender:'',
            category:'',
            min_exp:0,
            max_exp:0,
            min_sal:0,
            max_sal:0
        }
        const job_post_id= this.props.match.params.id;
        // alert(job_post_id);
        axios.get('/jobs/getJobDetails/'+job_post_id)
                .then( response =>{
                    console.log(response);
                    if(response.data.code==1){
                        this.setState({
                            job_title:response.data.job_details.job_title,
                            job_desc:response.data.job_details.job_desc,
                            gender:response.data.job_details.gender,
                            category:response.data.job_details.job_category,
                            min_exp:response.data.job_details.min_exp,
                            max_exp:response.data.job_details.max_exp,
                            min_sal:response.data.job_details.min_sal,
                            max_sal:response.data.job_details.max_sal
                        })
                    }
                })
    }
    render() {
        return <section>
                <div className="wrapper">
                
                   

                    <div id="content" >

                        <Header/>

                        {/* <h4>Shortlisted Resumes</h4> */}
                        <div className="HirD bckloGry ">
          
                        <div className="my-2 p-5 bg-white">
                            <div className="row mx-0 p-5">
                                <div className="col-md-9">
                                    <div className="">
                                        <div className="border p-3">
                                            <div className="row mx-0 ">
                                                <div className="col-md-2">
                                                    <div className="text-center">
                                                        <img src={require("../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="mt-2 OOuN">
                                                        <h5 className="mb-0">{this.state.job_title}</h5>
                                                        <small className=""><span className="colGry">@ Company A</span></small>  <small className="colGry ml-2"><i class="fas fa-map-marker-alt"></i> Address</small><br/>
                                                    

                                                    </div>
                                                </div>
                                            
                                                <div className="col-md-2">
                                                    <div className="">
                                                        <button className="btn btn-default mt-2 rounded-circle  border"><i class="far fa-heart"></i></button><br/>
                                                        <small className="colGry"><i class="far fa-clock"></i> &nbsp; 3W ago</small>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                        </div>
                                        <div className="row mx-0 mt-3 border p-3">
                                                <div className="col-md-4 p-2">
                                                    <span className="colGry">Offered Salary</span>
                                                    <h6>{this.state.min_sal+'$ - '+this.state.max_sal}$ </h6>
                                                </div>
                                                <div className="col-md-4 p-2">
                                                    <span className="colGry">Gender</span>
                                                    <h6>{this.state.gender}</h6>
                                                </div>
                                                <div className="col-md-4 p-2">
                                                    <span className="colGry">Career Level</span>
                                                    <h6>Executive</h6>
                                                </div>
                                                <div className="col-md-4 p-2">
                                                    <span className="colGry">Industry</span>
                                                    <h6>{this.state.category}</h6>
                                                </div>
                                                <div className="col-md-4 p-2">
                                                    <span className="colGry">Experience</span>
                                                    <h6>{this.state.min_exp+' - '+this.state.max_exp} Years</h6>
                                                </div>
                                                <div className="col-md-4 p-2">
                                                    <span className="colGry">Qualification</span>
                                                    <h6>Bachelor Degree</h6>
                                                </div>
                                            </div>
                                        <div className="mt-3">
                                            <h5 className="mb-3">Job Description</h5>
                                        
                                            <small className="colGry">{this.state.job_desc}</small>


                                            {/* <h5 className="mb-3 mt-4">Required Knowledge, Skills, and Abilities</h5>
                                            <ul>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                            </ul> */}

                                            {/* <h5 className="mb-3">Education Qualification</h5>
                                            <ul>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                            </ul> */}
                                        </div>    
                                        <Link to={'/user-panel/apply-jobs/apply-jobs-details/'} className="btn btn-info w-100"  >Apply Now</Link><br/>
                                                
                                    </div>
                                </div>  
                                <div className="col-md-3">
                                    <div className="mt-5">
                                        <div className="">
                                            <span className="colGry fnt600">
                                                <span><i class="fas fa-share-alt"></i> <span className="ml-2">Share</span></span>
                                                <span className="ml-3"><i class="fas fa-print"></i> <span className="ml-2">Print</span></span>    
                                            </span>
                                        </div>
                                        <div className="border p-3">
                                            <div className="">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27613.165584465805!2d77.27838962398029!3d30.104331816350182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efa1ad76bd58d%3A0x3113ec5881b4734!2sSector%203%2C%20Raipur%2C%20Haryana%20135001!5e0!3m2!1sen!2sin!4v1597301298133!5m2!1sen!2sin" width="100%" height="300" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                            </div>
                                            <div className="">
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li>
                                                        <small className="colGry fnt600"><i class="fas fa-link"></i> <span className="ml-2">Website</span></small>
                                                    </li>
                                                    <li>
                                                        <small className="colGry fnt600"><i class="fas fa-phone-alt"></i> <span className="ml-2">Phone</span></small>
                                                    </li>
                                                    <li>
                                                        <small className="colGry fnt600"><i class="fas fa-envelope"></i> <span className="ml-2">Mail</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
        
            
                    </div>
            </div>

  
 
            </section>

   
    } 
   
}

export default JobDescriptionPage;