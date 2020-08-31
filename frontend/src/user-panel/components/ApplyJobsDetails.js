import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class ApplyJobsDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            jobDesc:'',
            jobTitle:'',
            jobType:'',
            jobSkill:'',
            fullAddress:'',
            minExp:'',
            maxExp:'',
            gender:'',
            minSal:'',
            maxSal:'',
            quali:'',
            lastDate:''
        }
    }
    componentDidMount(){
        const jobPost_id=this.props.match.params.id;
        axios.get('/jobs/getJobDetails/'+jobPost_id)
                    .then(response =>{
                        // console.log(response)
                        if(response.data.code==1){
                            this.setState({
                                jobDesc:response.data.job_details.job_desc,
                                jobTitle:response.data.job_details.job_title,
                                jobType:response.data.job_details.job_type,
                                jobSkill:response.data.job_details.specialism,
                                fullAddress:response.data.job_details.full_address,
                                minExp:response.data.job_details.min_exp,
                                maxExp:response.data.job_details.max_exp,
                                gender:response.data.job_details.gender,
                                minSal:response.data.job_details.min_sal,
                                maxSal:response.data.job_details.max_sal,
                                quali:response.data.job_details.qualification,
                                lastDate:response.data.job_details.last_date
                            })
                        }
                        
                    })
                    .catch();
    }
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Apply Jobs Details</h5>
   
           <div className=" mt-4 HirD ">
                <div className="row mx-0">
                    <div className="col-md-9">
                        <div className="">
                            <h5 className="mb-3">{this.state.jobTitle}</h5>
                           
                            <small className="colGry">{this.state.jobDesc}</small>


                            <h5 className="mb-3 mt-4">Required Knowledge, Skills, and Abilities</h5>
                            <ul>
                                <li>
                                    <small className="colGry">
                                    <label>Skill Needed: </label> {this.state.jobSkill} 
                                    </small>
                                </li>
                                <li>
                                    <small className="colGry">
                                    <label>Industry: </label> {this.state.jobType} 
                                    </small>
                                </li>
                                <li>
                                    <small className="colGry">
                                    <label>Type: </label> {this.state.jobType}  
                                    </small>
                                </li>
                                {/* <li>
                                    <small className="colGry">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    </small>
                                </li> */}
                            </ul>

                            <h5 className="mb-3">Education Qualification</h5>
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
                            </ul>
                        </div>    

                        <button class="btn btn-info w-100">Apply Now</button>
                    </div> 
                    <div className="col-md-3">
                        <div className="">
                            <div className="border p-4">
                                <h4 className="mb-0">OverView</h4>
                                <hr/>
                                <div className="row mx-0 ">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Last Date</h6>
                                            <small className="colGry">{this.state.lastDate}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 ">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Offered Salary</h6>
                                            <small className="colGry">${this.state.minSal}K-${this.state.maxSal}K</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 mt-3">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Gender</h6>
                                            <small className="colGry">{this.state.gender}</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 mt-3">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Experience</h6>
                                            <small className="colGry">{this.state.minExp} - {this.state.maxExp} Years</small>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="row mx-0 mt-3">
                                    <div className="col-md-2">
                                        <div className="colBlu">
                                            <h4><i class="fas fa-dollar-sign"></i></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-10">
                                        <div className="">
                                            <h6 className="mb-0">Qualification</h6>
                                            <small className="colGry">{this.state.quali}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-4 mt-3">
                                <h4 className="mb-0">OverView</h4>
                                <hr/>

                                <div className="d-flex mb-2">
                                    <small className="colBlu"><i class="fas fa-map-marker-alt"></i></small>
                                    <small className="colGry ml-3">{this.state.fullAddress} </small>
                                </div>

                                <div className="d-flex mb-2">
                                    <small className="colBlu"><i class="fas fa-phone-alt"></i></small>
                                    <small className="colGry ml-3">155-152-4444</small>
                                </div>
                                <div className="d-flex mb-2">
                                    <small className="colBlu"><i class="fas fa-envelope"></i></small>
                                    <small className="colGry  ml-3">address@mail.com</small>
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

export default ApplyJobsDetails;