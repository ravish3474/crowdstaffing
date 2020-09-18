import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';  
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import jwt_decode from 'jwt-decode';
class Dashboard extends Component {
    constructor(props){
        super(props);
        const logged_user_data=jwt_decode(localStorage.getItem('company_token'));
        this.state={
            comapany_id:logged_user_data._id,
            job_posted:0,
            applications_:0,
            applications:[],
            jobs:[]
        }
    }
    componentDidMount(){
        
    
        // console.log(com);
        axios.get('/jobApply/getJobApplications/'+this.state.comapany_id)
                .then(respo=>{
                    console.log(respo);
                    this.setState({
                        applications:respo.data.job_details.map(jobs=>jobs)
                    })
                    
                })
    }
    render() {
        if(localStorage.getItem('company_data')==null){
            console.log('Erororororororo');
        }else{
            console.log(localStorage.getItem('company_data'));
        }
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Dashboard</h4>
           
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
                                        <h4 className="mb-0">{this.state.job_posted}</h4>
                                        <span className="">
                                            Posted
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
                                        <h4 className="mb-0">{this.state.applications_}</h4>
                                        <span className="">
                                            Applications
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
                        <h5>Latest Application</h5>
                        <div className="pt-2">
                            {
                                this.state.applications.map(function(jobs){
                                    return <div className="row m-0 mt-3 py-3 border-bottom">
                                                <div className="col-md-2">
                                                    <div className="text-center">
                                                        <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSFG"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="mt-2 OOuN">
                                                        <h6 className="mb-0">{jobs.job_seeker_details.full_name}</h6>
                                                        <small className="colGry">{jobs.job_post_details.job_title}</small><br/>
                                                        <small className="colGry"><i class="fas fa-map-marker-alt"></i> {jobs.job_post_details.full_address}</small>
                
                                                    </div>
                                                </div>
                                            
                                                <div className="col-md-2">
                                                    <div className="">
                                                        <button className="btn bnlurrt w-100 py-2 px-3 bordRAD0">Hire</button>
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

export default Dashboard;