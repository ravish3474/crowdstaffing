import React, { Component } from 'react';
import ReactDom from 'react-dom';
import jwt_decode from 'jwt-decode';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import { Link, } from 'react-router-dom'; 
import axios from 'axios';

class AppliedJobs extends Component {
    constructor(props){
        super(props);
        this.state={
            appliedJobs:[]
        }
        const logged_user_data=jwt_decode(localStorage.getItem('user_token'));
        // console.log(logged_user_data);
        axios.get("/jobApply/getMyAppliedJobs/"+logged_user_data._id)
                    .then(response =>{
                        console.log(response);
                        if(response.data.code==1){
                            this.setState({
                                appliedJobs: response.data.job_details.map(job_ =>job_)
                            })
                        }
                        
                    });
    }
    componentDidMount(){
       
        // const logged_user_data=jwt_decode(localStorage.getItem('user_token'));
    }
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Applied Jobs</h5>
           
           <div className=" mt-4 bckloGry p-4">
               {
                   this.state.appliedJobs.map(function(det, index){
                       return <div className="row border p-3 ASd3ee">
                                <div className="col-md-9">
                                        <div className="d-flex">
                                            <div className="">
                                                <img src={require("../../assets/images/client3.png")} className="HtaWW"/>
                                            </div>
                                            <div className="OOuN ml-4 mt-2">
                                            <h6 className="mb-0">{det.job_post_details.job_title}</h6>
                                                <small className="colGry"><i class="fas fa-map-marker-alt"></i> {det.job_post_details.full_address}</small><br/>
                                                <small className="colGry">
                                                    <span>Created : {det.job_post_details.createdAt}</span>
                                                    <span className="ml-1">Expiry : {det.job_post_details.last_date}</span>
                                                </small>
                                            
                                            </div>
                                        </div>
                                </div>
                                <div className="col-md-3">
                                        <div className="text-center mt-3">
                                        <Link to={'/user-panel/apply-jobs/apply-jobs-details/'+ det.job_post_details._id} className="Pnk py-1 px-2 ml-2 rounded"  ><small><i class="fas fa-eye"></i></small></Link><br/>
                                            
                                            {/* <span className="PBJ py-1 px-2 ml-2 rounded" title="Delete"><small><i class="far fa-trash-alt"></i></small></span> */}
                                        </div>
                                </div>
                            </div>
                   })
               }
               

               {/* <f */}
           </div>
        
        </div>
    </div>
            </section>

   
    } 
   
}

export default AppliedJobs;