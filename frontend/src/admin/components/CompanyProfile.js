import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import jwt_decode from 'jwt-decode';

class CompanyProfile extends Component {
    constructor(props){
        super(props);
        const logged_user_data=jwt_decode(localStorage.getItem('company_token'));
        // console.log("===============");
        // console.log(logged_user_data);
        // console.log("---------------");
        // console.log("comap : "+)
        this.state={
            comp_name:logged_user_data.company_name,
            comp_email:logged_user_data.comp_email,
            comp_phone:logged_user_data.comp_phone,
            comp_id:logged_user_data._id,
            country:'',
            state_:'',
            city_:''
        }
        // axios.get('/jobSeeker/getMyDetails/'+logged_user_data._id)
        //             .then(response =>{
        //                 // console.log(response.data.data);
        //                 // console.log("code:  "+response.data.code);
        //                 if(response.data.code==1){
        //                     const fName=response.data.data.full_name;
                            
        //                     console.log("Full Name: "+fName);
        //                     this.setState({
        //                         full_name:fName,
                              
        //                         phone_:response.data.data.phone_,
        //                         email_:response.data.data.email,
        //                         website_:response.data.data.website,
        //                         current_sal:response.data.data.current_sal,
        //                         exp_sal:response.data.data.expected_sal,
        //                         exp_year:response.data.data.year,
        //                         exp_month:response.data.data.month,
        //                         gender:response.data.data.gender,
        //                         education_level:'',
        //                         dob:response.data.data.dob,
        //                         description:response.data.data.basic_introduction,
        //                         facebook_id:response.data.data.facebook_id,
        //                         twitter:response.data.data.twitter_id,
        //                         linkedin:response.data.data.linked_in_id,
        //                         google_plus:response.data.data.google_plus_id,
        //                         country:response.data.data.country_,
        //                         state_:response.data.data.state_,
        //                         city_:response.data.data.city_,
        //                         full_address:response.data.data.full_address,
        //                     })
        //                     // alert(this.state.full_name);
        //                 }
        //                 // if(response.data.jobseeker.length >0){
        //                 //     console.log("Array Count: "+response.data.jobseeker.length);
        //                 //     this.setState({
        //                 //         jobseeker:response.data.jobseeker.map(jobseek => jobseek)
        //                 //     })
        //                 // }
        //             })
        //             .catch(err => console.log("Error found: "+err));
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeFacebook = this.onChangeFacebook.bind(this);
        this.onChangeLinkedIn = this.onChangeLinkedIn.bind(this);
        this.onChangeTwitter = this.onChangeTwitter.bind(this);
        this.onChangeGooglePlus = this.onChangeGooglePlus.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeFullAddress = this.onChangeFullAddress.bind(this);
        this.onChangeLatitude = this.onChangeLatitude.bind(this);
        this.onChangeLongitude = this.onChangeLongitude.bind(this);
        this.onChangeState  = this.onChangeState.bind(this);
    }
    onChangeCompanyName(e){
        this.setState({
            comp_name:e.target.value
        })
    }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }
    onChangeFacebook(e){
        this.setState({
            facebook_id:e.target.value
        })
    }
    onChangeTwitter(e){
        this.setState({
            twitter:e.target.value
        })
    }
    onChangeLinkedIn(e){
        this.setState({
            linkedin:e.target.value
        })
    }
    onChangeGooglePlus(e){
        this.setState({
            google_plus:e.target.value
        })
    }
    onChangeCountry(e){
        this.setState({
            country:e.target.value
        })
    }
    onChangeState(e){
        this.setState({
            state_:e.target.value
        })
    }
    onChangeCity(e){
        this.setState({
            city_:e.target.value
        })
    }
    onChangeFullAddress(e){
        this.setState({
            full_address:e.target.value
        })
    }
    onChangeLatitude(e){
        this.setState({
            lat:e.target.value
        })
    }
    onChangeLongitude(e){
        this.setState({
            long:e.target.value
        })
    }

    render() {
        return <section>
                <div className="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h4>Company Profile</h4>
   
           <div className=" mt-4 HirD bg-white bordRad_2">
               <div className="d-flex my-4">
                    <div className="htdhi border">
                        <img src={require("../../assets/images/client2.png")} className="img-fluid w-100 border" styleName="width:200px; height:180px"/>
                    </div>
                   <div className="m-3">
                        <label className="btn btn-info" for="upload_img">Browse</label>
                        <input type="file" className="d-none" name="" id="upload_img" />
                       {/* <h6 className="mb-0">A D Holiday Ltd</h6>
                       <small className="colGry">Education Training</small><br/>
                       <small className="colGry"><i className="fas fa-map-marker-alt"></i> <span>England</span></small>  */}
                   </div> 
               </div>
               <form className=" UJUFom">
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" className="form-control" name="" value={this.state.comp_name} placeholder="Enter Company Name"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="" value={this.state.comp_email} placeholder="Email" readonly />
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="number" className="form-control" name="" value={this.state.comp_phone} placeholder="Enter Phone Number"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Website</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Website"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Est. Since</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Est. Since"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                           
                               
                               
                            <div className="form-group">
                                <label>Team Size</label>
                                <select className="form-control" name="" >
                                    <option selected >30k-50k</option>
                                </select>
                            </div>
                               
                            
                       </div>
                    </div>

                    {/* <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Categories</label>
                                <select className="form-control" name="" >
                                    <option selected >1 Year</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Allow In Search & Listing</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Select</option>
                                    
                                </select>
                            </div>
                       </div>
                    </div> */}

                    <div className="form-group">
                        <label> About Company</label>
                        <textarea className="form-control" name="" rows="5" placeholder="About Company"></textarea>
                   </div>

                    <h5 className="my-3"> Social Network </h5>

                   
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Facebook</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Facebook"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Twitter</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Twitter"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Linkedin</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Linkedin"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Google+</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Google+"/>
                            </div>
                       </div>
                    </div>

                    <h5 className="my-3">
                        Contact Information
                    </h5>


                    <div className="row mx-0">
                       <div className="col-md-4 pl-0">
                       
                        
                            <div className="form-group">
                                <label>Country</label>
                                <select className="form-control countries" value={this.state.country} onChange={this.onChangeCountry} name="country"  id="countryId">
                                    {/* <option selected >Basic</option> */}
                                    <option value="">Select Country</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>State</label>
                                <select className="form-control states" name="state"  id="stateId" value={this.state.state_} onChange={this.onChangeState} >
                                    <option value="">Select State</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>City</label>
                                <select className="form-control cities" name="city" value={this.state.city_} onChange={this.onChangeCity} id="cityId">
                                    <option value="">Select City</option>
                                </select>
                            </div>
                       </div>
                    </div>
                    <div className="form-group">
                       <label> Full Address</label>
                        <textarea className="form-control" name="" rows="5" placeholder="Address"></textarea>
                   </div>

                    {/* <div className="row mx-0">
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>Latitude</label>
                                <select className="form-control" name="" >
                                    <option selected >Basic</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>Longitude</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Select</option>
                                </select>
                            </div>
                       </div>
                       
                    </div> */}
                    <div className="text-center">
                        <button className="btn bnlurrt py-2 px-4 bordRAD0">SAVE CHANGES</button>
                        {/* <button className="btn ml-3 edlert py-2 px-4 bordRAD0">DELETE PROFILE</button> */}
                    </div>
                
               </form>
           </div>
        
        </div>
    </div>
</section>

   
    } 
   
}

export default CompanyProfile;