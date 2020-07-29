import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import axios from 'axios';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';
import Jobseeker_detail from './Job_Seeker_Detail_Component';
import Axios from 'axios';

class JobSeeker extends Component {
    constructor(props){
        super(props);
        
        this.state={
            jobseeker:[]
        }
        
    }
    componentDidMount(){
        axios.get('http://localhost:5000/jobSeeker/')
                    .then(response =>{
                        if(response.data.jobseeker.length >0){
                            console.log("Array Count: "+response.data.jobseeker.length);
                            this.setState({
                                jobseeker:response.data.jobseeker.map(jobseek => jobseek)
                            })
                        }
                    })
                    .catch(err => console.log("Error found: "+err));
    }
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Job Seeker</h5>
                                <div className="dsaIcon w-50 m-auto">
                                    <input type="text" placeholder="" className="form-control "/> 
                                    <span className=" IconSE"><i className="fas fa-search"></i></span>
                                </div>
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                

                                <div className="">
                                  
                                    {   
                                        this.state.jobseeker.map(function(job_seeker){
                                            // console.log(1);
                                            return <Jobseeker_detail job_seeker={job_seeker}/>
                                        })
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default JobSeeker;