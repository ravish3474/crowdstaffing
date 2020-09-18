import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
// import { Link } from 'react-router-dom'; 
import axios from 'axios';
import jwt_decode from 'jwt-decode';
class JobApplicationList extends Component {
   constructor(props){
       super(props);

       this.state={
           applications:[]
       }
   }
    componentDidMount(){
        const logged_user_data=jwt_decode(localStorage.getItem('company_token'));
        const comapanyId=logged_user_data._id;
        axios.get('/jobApply/getJobApplications/'+comapanyId)
                .then(respo=>{
                    console.log(respo);
                    this.setState({
                        applications:respo.data.job_details.map(jobs=>jobs)
                    })
                    
                })
    }
    render() {
     
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Job Application Candidate Details</h4>
           
        
            <div className="bg-white mt-4 p-4">
                
                <div className="table-responsive border">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Job Title.</th>
                                <th>Applicant Name</th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.applications.map(function(jobs){
                                    return <tr>
                                                <td>{jobs.job_post_details.job_title}</td>
                                                <td>{jobs.job_seeker_details.full_name}</td>
                                                <td>
                                                    <Link to="/company-panel/job-applications" className="btn btn-default py-2 px-3">View Application</Link>
                                                </td>
                                            </tr>
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default JobApplicationList;