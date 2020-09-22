import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
class JobApplications extends Component {
    constructor(props){
        super(props);
        const logged_user_data=jwt_decode(localStorage.getItem('company_token'));
        this.state={
            compId:logged_user_data._id,
            applications:[],
        }
    }
    componentDidMount(){
        axios.get('/jobApply/getJobApplications/'+this.state.compId)
        .then(respo=>{
            // console.log(respo);
            this.setState({
                applications:respo.data.job_details.map(jobs=>jobs),
                // job_application:respo.data.job_details.length
            })
            
        })
    }
    render() {
     
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Job Applications</h4>
           
        
            <div className="bg-white p-2">
                {/* <h5>Candidates Profiles</h5> */}
                <div className="row mx-0 ">
                    {
                        this.state.applications.map(function(details){
                            return <div className="col-md-4 mt-2">
                                    <div className=" ">
                                        <div className="pt-2">
                                            <div className="row m-0 mt-3 py-3 border">
                                                <div className="col-md-3">
                                                    <div className="text-center">
                                                        <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="mt-2 OOuN">
                                                        <Link to={'/company-panel/view-profile/'+details.job_seeker_details._id}><h6 className="mb-0">{details.job_seeker_details.full_name}</h6></Link>
                                                        <small className=""><span>{details.job_post_details.job_title}</span></small> <br/>
                                                        {/* <small ><span>Salary:</span>  <span className="colGry">$1200</span></small> */}
            
                                                    </div>
                                                </div>
                                            
                                                <div className="col-md-2">
                                                    <div className="">
                                                        <button className="btn btn-default mt-3"><i class="fas fa-trash-alt"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        
                                </div>
                        })
                    }
                    
                    
                </div>
            </div>
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default JobApplications;