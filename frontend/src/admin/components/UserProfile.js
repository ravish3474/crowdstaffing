import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link, } from 'react-router-dom'; 
import axios from 'axios';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:'',
            phone:'',
            website:'',
            dob:'',
            email:'',
            basic_introduction:'',
            profile_pic:'',
            fullAddress:'',
            
        }
        // this.sayHello= this.sayHello.bind(this);
    }
    componentDidMount(){
        const jobseekr_id=this.props.match.params.id;
        axios.get('/jobseeker/getMyDetails/'+jobseekr_id)
                    .then(response =>{
                        // console.log(response)
                        if(response.data.code==1){
                            this.setState({
                                fullName:response.data.data.full_name,
                                phone:response.data.data.phone_,
                                email:response.data.data.email,
                                website:response.data.data.website,
                                dob:response.data.data.dob,
                                basic_introduction:response.data.data.basic_introduction,
                            })
                        }
                        
                    })
                    .catch();
    }
    render() {
        return <section>
                <div class="wrapper">
                
                    <Sidebar/>

                    <div id="content">

                        <Header/>

                        <h4>Job Seeker Profile</h4>
                        <div className="HirD bckloGry ">
          
                        <div className="p-4 bg-white">
                            <div className="row mx-0">
                                <div className="col-md-9">
                                    <div className="">
                                        <div className="border p-3">
                                            <div className="row mx-0 ">
                                                <div className="col-md-2">
                                                    <div className="text-center">
                                                        <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="mt-2 OOuN">
                                                        <h5 className="mb-0">{this.state.fullName}</h5>
                                                        

                                                    </div>
                                                </div>
                                            
                                                <div className="col-md-2">
                                                    <div className="">
                                                        <button className="btn btn-default mt-2 rounded-circle  border"><i class="far fa-heart"></i></button><br/>
                                                        <small className="colGry"><i class="far fa-clock"></i> &nbsp;{this.state.createdAt}</small>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                        </div>
                                        
                                        <div className="mt-3">
                                            <h5 className="mb-3">Job Description</h5>
                                        
                                            <small className="colGry"> {this.state.basic_introduction}</small>


                                            {/* <h5 className="mb-3 mt-4">Required Knowledge, Skills, and Abilities</h5>
                                            <ul>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                            </ul> */}

                                            {/* <h5 className="mb-3">Education Qualification</h5> */}
                                            {/* <ul>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                                <li>
                                                    <small className="colGry">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                    </small>
                                                </li>
                                            </ul> */}
                                        </div>    

                                        {/* <button class="btn btn-info w-100">Apply Now</button>           */}
                                    </div>
                                </div>  
                                <div className="col-md-3">
                                    <div className="mt-5">
                                        {/* <div className="">
                                            <span className="colGry fnt600">
                                                <span><i class="fas fa-share-alt"></i> <span className="ml-2">Share</span></span>
                                                <span className="ml-3"><i class="fas fa-print"></i> <span className="ml-2">Print</span></span>    
                                            </span>
                                        </div> */}
                                        <div className="border p-3">
                                            {/* <div className="">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27613.165584465805!2d77.27838962398029!3d30.104331816350182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efa1ad76bd58d%3A0x3113ec5881b4734!2sSector%203%2C%20Raipur%2C%20Haryana%20135001!5e0!3m2!1sen!2sin!4v1597301298133!5m2!1sen!2sin" width="400" height="300" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                            </div> */}
                                            <div className="">
                                                <ul className="list-unstyled mb-0 mt-3">
                                                    <li>
                                                        <small className="colGry fnt600"><i class="fas fa-link"></i> <span className="ml-2">{this.state.website}</span></small>
                                                    </li>
                                                    <li>
                                                        <small className="colGry fnt600"><i class="fas fa-phone-alt"></i> <span className="ml-2">{this.state.phone}</span></small>
                                                    </li>
                                                    <li>
                                                        <small className="colGry fnt600"><i class="fas fa-envelope"></i> <span className="ml-2">{this.state.email}</span></small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
        
            
                    </div>
            </div>

  
 
            </section>

   
    } 
   
}

export default UserProfile;