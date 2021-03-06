import React, {Component} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'; 
import { JsonWebTokenError } from 'jsonwebtoken';
// import { Router } from 'express';

class JobComponent extends Component{
    render(){
        return <div className="col-md-6 mt-3">
                <div className="row mx-0 border p-2 ASd3ee">
                    <div className="col-md-3 px-0">
                        <div className="mt-3 text-center">
                            <img src={require("../../assets/images/client3.png")} className="HtaWW"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                            <div className="">
                                {/* {JSON.stringify(this.props.jobss)} */}
                                <div className="OOuN mt-2">
                                    <h5 className="mb-0">{this.props.jobss.job_title}</h5>
                                    <small><a href="xyz.com" className="colBlu" target="blank">xyz.com</a></small><br/>
    <small className="colGry"><i class="fas fa-money-bill"></i> {'$ '+this.props.jobss.min_sal+'K - $'+this.props.jobss.max_sal}K</small><br/>
    <small className="colGry"><i class="fas fa-map-marker-alt"></i> {this.props.jobss.full_address}</small><br/>
                                    <small className="colGry">
                                        <span>Created : Date</span>
                                        <span className="ml-1">Expiry : {this.props.jobss.last_date}</span>
                                    </small>
                                
                                </div>
                            </div>
                    </div>
                    <div className="col-md-3">
                       
                            <div className="text-center mt-3">
                                <Link to={'/user-panel/apply-jobs/apply-jobs-details/'+ this.props.jobss._id} className="w-100 Pnk py-1 px-2 rounded btn"  >View</Link><br/>
                                <span className="ml-1 w-100 PBJ mt-2 py-1 px-2 rounded btn">{this.props.jobss.job_type.type_name}</span>
                                {/* <Link  to="/user-panel/apply-jobs/apply-jobs-details" className="w-100 PBJ mt-2 py-1 px-2 rounded btn" ></Link> */}
                                {/* <Route path='/user-panel/apply-jobs/apply-jobs-details/:id' component={child}/>   */}
                            </div>
                       
                            
                    </div>
                </div>
                
            </div>
    }
}
export default JobComponent;