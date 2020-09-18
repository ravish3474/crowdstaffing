import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link, } from 'react-router-dom'; 
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
// import { response } from 'express';


class ManageJobs extends Component {
    constructor (props){
        super(props);
        const logged_user_data=jwt_decode(localStorage.getItem('company_token'));
        this.state={
            job_posted:0,
            job_application:0,
            active_jobs:0,
            jobs:[]
        }
        const com={
            "comapany_id":logged_user_data._id
        };
        console.log(com);
        axios.post('/jobs/getMyPostedJobs/',com)
            .then(response=>{
                if(response.data.code==1){
                    console.log(response.data.data);
                    this.setState({
                        job_posted:response.data.data.length,
                        active_jobs:response.data.data.length,
                        jobs:response.data.data.map(jobs => jobs)
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

            <h4>Manage Jobs</h4>
           
           <div className="mt-3">
               <div className="">
                   <div className="row">
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle PBJ text_Al">
                                        <span><i class="fas fa-briefcase"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="mt-3">
                                        <span>{this.state.job_posted} Jobs Posted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle Pnk text_Al">
                                        <span><i class="far fa-copy"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className=" mt-3">
                                        <span>3 Applications</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle Ble text_Al">
                                        <span><i class="fas fa-briefcase"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className=" mt-3">
                                        <span>{this.state.active_jobs} Active Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                   </div>
               </div>
           </div>

           
           <div className=" mt-4">
               <div className="table-responsive p-2">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Applications</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.jobs.map(function(job){
                            return <tr>
                                        <td>
                                            <div className="OOuN">
                                                <h6 className="mb-0">{job.job_title}</h6>
                                                <small className="colGry"><i class="fas fa-map-marker-alt"></i> {job.full_address}</small><br/>
                                                <small className="colGry">
                                                    <span>Created : Date</span>
                                                    <span className="ml-1">Expiry : {job.last_date}</span>
                                                </small>
                                            </div>
                                        </td>
                                        <td>
                                            <small><span className="fnt500">17</span> Applications</small>
                                        </td>
                                        <td>
                                            <small className="text-success">Active</small>
                                        </td>
                                        <td>
                                        <Link to={'/company-panel/job-description/'+ job._id} className="btn btn-success"  ><i class="far fa-eye"></i></Link>
                                        {/* <Link to={'/user-panel/apply-jobs/apply-jobs-details/'+ job._id} className="btn btn-info mx-1"  ><i class="fas fa-pencil-alt"></i></Link> */}
                                        {/* <Link to={'/user-panel/apply-jobs/apply-jobs-details/'+ job._id} className="btn btn-danger"  ><i class="far fa-trash-alt"></i></Link> */}
                                            {/* <span className="p-1 Ble  rounded" title="View"><small></small></span> */}
                                            {/* <span className="Pnk p-1 ml-2 rounded" title="Edit"><small></small></span>
                                            <span className="PBJ p-1 ml-2 rounded" title="Delete"><small></small></span> */}
                                            <button className="btn btn-danger" onClick={()=>{
                                                                console.log("Deleteing...."+ job._id);
                                                                axios.delete('/jobs/deleteJob/'+job._id)
                                                                        .then(resp=>{
                                                                            if(resp.data.code==1){
                                                                               alert("Deleted Successfully..");
                                                                               window.location.reload(true);
                                                                            }else{
                                                                                alert("Failed to Delete");
                                                                            }
                                                                        })
                                                                        .catch(err=>{
                                                                            console.log(err)
                                                                        })
                                                                }}><i className="fa fa-trash"></i></button>
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

export default ManageJobs;