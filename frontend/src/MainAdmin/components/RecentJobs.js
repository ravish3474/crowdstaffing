import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Recent_job_comp from '../components/Recent_Job_Component';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class RecentJobs extends Component {

    constructor(props){
        super(props);
        this.state ={
            latestjobs:[]
        }

    }
    componentDidMount(){
        axios.get('/jobs/getLatestJobs')
        .then(response =>{
            if(response.data.jobs.length >0){
                this.setState({
                    latestjobs:response.data.jobs.map(latest_jobs => latest_jobs)
                })
                console.log(this.state.latestjobs);
            }
        }).catch(err => {
            console.log("Error: "+err);
        });
    }
    
    render() {
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Recent Jobs</h5>
                               
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                

                                <div className="">
                                    {/* one Job */}
                                    {
                                        this.state.latestjobs.map(function(job){
                                            return <Recent_job_comp job={job}/>
                                        })
                                    }
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default RecentJobs;