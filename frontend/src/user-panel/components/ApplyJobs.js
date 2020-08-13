import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import Jobs from './JobComponent';

class ApplyJobs extends Component {
    constructor(props){
        super(props);
        this.state ={
            total_jobs:[]
        }
    }
    componentDidMount(){
        axios.get('/jobs/getAllJobs')
        .then(response =>{
          if(response.data.data.length >0){
            this.setState({
              total_jobs:response.data.data
            })
           
            
          }
        })
        .catch(error => console.log("Error Found While Fetching All Jobs: "+error));
    }
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Apply Jobs</h5>
           
           <div className=" mt-4 bckloGry p-4">
                <div className="row mx-0">
                    {
                        this.state.total_jobs.map(function(jobss){
                                return <Jobs jobss={jobss}/>
                        })
                    }
                    
                    {/* <div className="col-md-6 mt-3">
                        <div className="row mx-0 border p-2 ASd3ee">
                            <div className="col-md-3 px-0">
                                <div className="mt-3 text-center">
                                    <img src={require("../../assets/images/client3.png")} className="HtaWW"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                    <div className="">
                                       
                                        <div className="OOuN mt-2">
                                            <h5 className="mb-0">General Ledger Accountant</h5>
                                            <small><a href="xyz.com" className="colBlu" target="blank">xyz.com</a></small><br/>
                                            <small className="colGry"><i class="fas fa-money-bill"></i> $12K-123K</small><br/>
                                            <small className="colGry"><i class="fas fa-map-marker-alt"></i> Address</small><br/>
                                            <small className="colGry">
                                                <span>Created : Date</span>
                                                <span className="ml-1">Expiry : Date</span>
                                            </small>
                                        
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-3">
                                    <div className="text-center mt-3">
                                        <Link to="/user-panel/apply-jobs/apply-jobs-details" className="w-100 Pnk py-1 px-2 rounded btn"  >Apply</Link><br/>
                                        <Link  to="/user-panel/apply-jobs/apply-jobs-details" className="w-100 PBJ mt-2 py-1 px-2 rounded btn" >Full Time</Link>
                                    </div>
                            </div>
                        </div>
                        
                    </div> */}
                    {/* <div className="col-md-6 mt-3">
                        <div className="row mx-0 border p-2 ASd3ee">
                            <div className="col-md-3 px-0">
                                <div className="mt-3 text-center">
                                    <img src={require("../../assets/images/client3.png")} className="HtaWW"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                    <div className="">
                                       
                                        <div className="OOuN mt-2">
                                            <h5 className="mb-0">General Ledger Accountant</h5>
                                            <small><a href="xyz.com" className="colBlu" target="blank">xyz.com</a></small><br/>
                                            <small className="colGry"><i class="fas fa-money-bill"></i> $12K-123K</small><br/>
                                            <small className="colGry"><i class="fas fa-map-marker-alt"></i> Address</small><br/>
                                            <small className="colGry">
                                                <span>Created : Date</span>
                                                <span className="ml-1">Expiry : Date</span>
                                            </small>
                                        
                                        </div>
                                    </div>
                            </div>
                            <div className="col-md-3">
                                    <div className="text-center mt-3">
                                        <Link to="/user-panel/apply-jobs/apply-jobs-details" className="w-100 Pnk py-1 px-2 rounded btn"  >Apply</Link><br/>
                                        <Link  to="/user-panel/apply-jobs/apply-jobs-details" className="w-100 PBJ mt-2 py-1 px-2 rounded btn" >Full Time</Link>
                                    </div>
                            </div>
                        </div>
                        
                    </div> */}
                </div>
           </div>
        
        </div>
    </div>
            </section>

   
    } 
   
}

export default ApplyJobs;