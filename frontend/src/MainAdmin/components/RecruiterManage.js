import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class RecruiterManage extends Component {
    constructor(props){
        super(props);
        this.state={
            // jobseeker:0,
            company_d:0,
            companies:[]
        }
    }
    componentDidMount(){
        axios.get('/company/')
            .then(response =>{
                if(response.data.result.length >0){
                    // console.log("Array Count: "+response.data.jobseeker.length);
                    this.setState({
                        company_d:response.data.result.length,
                        companies:response.data.result.map(comp=>comp)
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

                            <h5>Recruiter Manage</h5>
                                <div className="dsaIcon w-50 m-auto">
                                    <input type="text" placeholder="" className="form-control "/> 
                                    <span className=" IconSE"><i className="fas fa-search"></i></span>
                                </div>
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                

                                <div className="">
                                    {
                                        this.state.companies.map(function(company){
                                            return <div className="row mt-3 shadow p-3 mx-0">
                                                    <div className="col-md-1 px-0">
                                                        <div className="border">
                                                            <img src={require("../../assets/images/client2.png")} className="img-fluid w-100 DSFG"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="">
                                                            <Link to={'/admin-panel/recruiter/profile/'+company._id}><h6 className="mb-0">{company.company_name}</h6></Link>
                                                            {/* <span className="colGry">UX/UI Designer</span><br/> */}
                                                            <span className="colGry"><i className="fas fa-map-marker-alt"></i> <span>{
                                                                company.comp_email
                                                            }</span></span> 
                                                        
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div className="m-3 text-center">
                                                            <Link className=" fnt500 btn btn-success" to={'/admin-panel/recruiter/profile/'+company._id}>View Profile</Link>
                                                            {/* <span className="colGry fnt500"></span> */}
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

export default RecruiterManage;

