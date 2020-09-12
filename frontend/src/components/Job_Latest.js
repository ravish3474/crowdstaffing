import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Job_Latest extends Component{
    render(){
        return <div className="col-md-6">
            <Link to={'/jobs/job-description/'+this.props.latestJob._id}>
                <div className="row m-0">
                    <div className="col-md-3">
                    <div className="">
                        <img src={require("../assets/images/client1.png")} className="img-fluid"/>
                    </div>
                    </div>
                    <div className="col-md-7">
                    <div className="">
                        
                        <h5>{this.props.latestJob.job_title}</h5>
                        <small className="colGry">via <span className="colBlu">{this.props.latestJob.comapany_id}</span></small>
                        <small className="colGry">{'  '+this.props.latestJob.add_city+', '+this.props.latestJob.add_country}</small>
                        <br/>
                        <small className="colGry">{this.props.latestJob.job_category}</small><small className="ml-2 colBlu">{this.props.latestJob.job_type}</small>
                    </div>
                    </div>
                    <div className="col-md-2">
                    <div className="">
                        <div className="border rounded-circle p-1">
                        <img src={require("../assets/images/Heart.png")} className="img-fluid"/>
                        </div>
                        
                        <div className="mt-2">
                            <small className="colGry">
                            <span><img src={require("../assets/images/time-icon.png")} className="img-fluid"/></span> 
                            1H ago
                            </small>

                        </div>
                    </div>
                    </div>
                </div>
                </Link>
            </div>
    }
}
export default Job_Latest;