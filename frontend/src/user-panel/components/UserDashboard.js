import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
class UserDashboard extends Component {

        // constructor(props){
        //     super(props);
        //     this.onSubmit = this.onSubmit.bind(this);
        //     const logged_user_data=jwt_decode(localStorage.getItem('user_token'));
        //     axios.get('/jobSeeker/getMyDetails/'+logged_user_data._id)
        //             .then(response =>{
        //                 // console.log(response.data.data);
        //                 // console.log("code:  "+response.data.code);
        //                 if(response.data.code==1){
        //                     const fName=response.data.data.full_name;
                            
                            
        //                     // alert(this.state.full_name);
        //                 }
                       
        //             })
        //             .catch(err => console.log("Error found: "+err));
        // }
    constructor(props){
        super(props);
        this.state={
            applide_jobs:0,
            fav_jobs:0,
            appliedJobs:[]
        }
    }
    componentDidMount(){
        
        const logged_user_data=jwt_decode(localStorage.getItem('user_token'));
        // console.log(logged_user_data);
        axios.get("/jobApply/getMyAppliedJobs/"+logged_user_data._id)
                    .then(response =>{
                        console.log(response);
                        if(response.data.code==1){
                            this.setState({
                                applide_jobs:response.data.job_details.length,
                                appliedJobs: response.data.job_details.map(job_ =>job_)
                            })
                        }
                        
                    });
    }
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h5>Dashboard</h5>
           
           <div className="mt-3">
               <div className="">
                   <div className="row">
                        <div className="col-md-6">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="far fa-paper-plane"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">{this.state.applide_jobs}</h4>
                                        <span className="">
                                            Applied
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="far fa-star"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">{this.state.fav_jobs}</h4>
                                        <span className="">
                                            Favorite
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                       
                   
                   </div>
               </div>
           </div>

           <div className="row mt-4">
               <div className="col-md-8">
                    <div className="HirD bckloGry">
                        <div className="row mx-0">
                            <div className="col-md-6">
                                <h5>Recent Apply Jobs</h5>
                            </div>
                            <div className="col-md-6">
                                <Link to={'user-panel/apply-jobs'}> <span className="text-success">Browse All Jobs</span></Link>
                            </div>
                        </div>
                        <div className="pt-2">
                            {
                                this.state.appliedJobs.map(function(det){
                                    return <div className="row m-0 mt-3 py-3 border-bottom">
                                
                                                <div className="col-md-6">
                                                    <div className="mt-2 OOuN">
                                                        <h6 className="mb-0">{det.job_post_details.comapany_details.company_name}</h6>
                                                        <small className="colGry">{det.job_post_details.job_title}</small><br/>
                                                    
                
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="text-center">
                                                        <small className="colGry"><i class="fas fa-map-marker-alt"></i> {det.job_post_details.full_address}</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="text-center mt-3">
                                                    <Link to={'/user-panel/apply-jobs/apply-jobs-details/'+ det.job_post_details._id} className="Pnk py-1 px-2 ml-2 rounded"  ><small><i class="fas fa-eye"></i></small></Link><br/>
                                                        {/* <span className="Pnk py-1 px-2 ml-2 rounded" title="Edit"><small><i class="fas fa-pencil-alt"></i></small></span>
                                                        <span className="PBJ py-1 px-2 ml-2 rounded" title="Delete"><small><i class="far fa-trash-alt"></i></small></span> */}
                                                    </div>
                                                </div>
                                            </div>
                                })
                            }
                            
                            
                        </div>
                    </div>
        
                </div>
            </div>
        
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default UserDashboard;