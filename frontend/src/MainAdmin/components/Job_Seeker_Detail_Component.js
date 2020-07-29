import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Job_Seeker_Detail_Component extends Component{
    render(){
        return <div className="row mt-3 shadow p-3 mx-0">
                <div className="col-md-1">
                    <div className="">
                        <img src={require("../../assets/images/client2.png")} className="img-fluid w-100"/>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="">
                        {/* {JSON.stringify(this.props)} */}
                        <h6 className="mb-0">{this.props.job_seeker.full_name}</h6>
                        <small>UX/UI Designer</small>
                        <div className="row mx-0">
                            <div className="col-md-4">
                                <div className="">
                                    <small className="fnt500">Location</small><br/>
                                    <small className="colGry"><i className="fas fa-map-marker-alt"></i> <span>England</span></small> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="">
                                    <small className="fnt500">Rate</small><br/>
                                    <small className="colGry"> <span>$12.00 hour</span></small> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="">
                                    <small className="fnt500">Job Success</small><br/>
                                    <small className="colGry"> <span>95%</span></small> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="m-3 text-right">
                        <Link to="/admin-panel/jobseeker/profile" className="btn btn-default border px-3 py-2">Edit Profile</Link>
                    </div>
                </div>
            </div>
    }
}
export default Job_Seeker_Detail_Component;