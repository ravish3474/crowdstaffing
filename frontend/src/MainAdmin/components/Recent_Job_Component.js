import React, { Component } from 'react';


class Recent_Job_Component extends Component{
    render(){
        return <div className="row mt-3 shadow p-3 mx-0">
                <div className="col-md-1 px-0">
                    <div className="border ">
                        <img src={require("../../assets/images/client2.png")} className="img-fluid w-100 DSFG"/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="">
                        {/* {JSON.stringify(this.props)} */}
                        <span className="colBlu">{this.props.job.job_type}</span>
                        <h6 className="mb-0">{this.props.job.job_title}</h6>
                        <span><span className="colGry">Posted {this.props.job.createdAt} by {this.props.job.comapany_id}</span>&nbsp;
                        <span className="colBlu"> </span></span>
                        <div className="row mx-0">
                            <div className="col-md-4">
                                <div className="">
                                
                                    <small className="colGry"><i className="fas fa-map-marker-alt"></i> <span>{this.props.job.add_city+', '+this.props.job.add_country}</span></small> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="">
                                    
                                    <small className="colGry"> <span>${this.props.job.min_sal}000K Per Month</span></small> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
    }
}
export default Recent_Job_Component;