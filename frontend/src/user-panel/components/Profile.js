import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class Profile extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            user_id:'5eeda190b066a72564ac1bd7',
            full_name:'',
            job_title:'',
            phone_:'',
            email_:'',
            website_:'',
            current_sal:'',
            exp_sal:'',
            exp_year:0,
            exp_month:1,
            gender:'',
            education_level:'',
            dob:'',
            description:'',
            facebook_id:'',
            twitter:'',
            linkedin:'',
            google_plus:'',
            country:'',
            state_:'',
            city_:'',
            full_address:'',
            lat:28.02,
            long:70.022
            
        }
        this.onChangeFullName = this.onChangeFullName.bind(this); 
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeCurrentSalary = this.onChangeCurrentSalary.bind(this);
        this.onChangeExpectedSalary = this.onChangeExpectedSalary.bind(this);
        this.onChangeExpYear = this.onChangeExpYear.bind(this);
        this.onChangeExpMonth = this.onChangeExpMonth.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEducationLevel = this.onChangeEducationLevel.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
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
    onChangeFullName(e){
        this.setState({
            full_name:e.target.value
        })
    }
    onChangeJobTitle(e){
        this.setState({
            job_title:e.target.value
        })
    }
    onChangePhone(e){
        this.setState({
            phone_:e.target.value
        })
    }
    onChangeEmail(e){
        this.setState({
            email_:e.target.value
        })
    }
    onChangeWebsite(e){
        this.setState({
            website_:e.target.value
        })
    }
    onChangeCurrentSalary(e){
        this.setState({
            current_sal:e.target.value
        })
    }
    onChangeExpectedSalary(e){
        this.setState({
            exp_sal:e.target.value
        })
    }
    onChangeExpYear(e){
        this.setState({
            exp_year:e.target.value
        })
    }
    onChangeExpMonth(e){
        this.setState({
            exp_month:e.target.value
        })
    }
    onChangeGender(e){
        this.setState({
            gender:e.target.value
        })
    }
    onChangeEducationLevel(e){
        this.setState({
            education_level:e.target.value
        })
    }
    onChangeDateOfBirth(e){
        this.setState({
            dob:e.target.value
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

    onSubmit(e){
        e.preventDefault();
        const userData={
            full_name:this.state.full_name,
            job_title:this.state.job_title,
            phone:this.state.phone_,
            email_:this.state.email_,
            website:this.state.website_,
            current_sal:this.state.current_sal,
            exp_sal:this.state.exp_sal,
            exp_year:this.state.exp_year,
            exp_month:this.state.exp_month,
            gender:this.state.gender,
            education_level:this.state.education_level,
            dob:this.state.dob,
            description:this.state.description,
            facebook_id:this.state.facebook_id,
            twitter:this.state.twitter,
            linkedin:this.state.linkedin,
            google_plus:this.state.google_plus,
            country:this.state.country,
            state_:this.state.state_,
            city_:this.state.city_,
            full_address:this.state.full_address,
            lat:this.state.lat,
            long:this.state.long
        }
        console.log(userData);
        axios.post('http://localhost:5000/jobSeeker/updateData/'+this.state.user_id, userData)
        .then((res) => {
                if(res.data.code === 1){
                    // console.log(res.data.msg);
                    alert("Data updated Sucessfully")
                    // swal("Thanks..!", 'Registered Sucessfully', "success");
                }
            // if(res.data.code==1){
            //     swal("Thanks..!", `Registered Sucessfully`, "success");
            // }else{
            //     console.log("eeeee");
            // }
               
        });
        // console.log("Form Submitted");
        // console.log(userData);
    }
    
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Profile</h5>
   
           <div className=" mt-4 HirD ">
               <form className=" UJUFom" onSubmit={this.onSubmit}>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" className="form-control" name="" value={this.state.full_name} onChange={this.onChangeFullName} placeholder="Enter Full Name"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Job Title</label>
                                <input type="text" className="form-control" name="" value={this.job_title} onChange={this.onChangeJobTitle} placeholder="UI/UX Designer"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="number" className="form-control" value={this.state.phone_} onChange={this.onChangePhone} name="" placeholder="Enter Phone Number"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" value={this.state.email_} onChange={this.onChangeEmail} name="" placeholder="Enter Email"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Website</label>
                                <input type="text" className="form-control" value={this.state.website_} onChange={this.onChangeWebsite} name="" placeholder="Enter Website"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="row mx-0">
                                <div className="col-md-6 pl-0">
                                        <div className="form-group">
                                            <label>Current Salary</label>
                                            <input type="text" className="form-control" value={this.state.current_sal} onChange={this.onChangeCurrentSalary} placeholder="eg. 30k-50k"/>
                                            
                                        </div>
                                </div>
                                <div className="col-md-6 pl-0">
                                    <div className="form-group">
                                        <label>Expected Salary</label>
                                        <input type="text" className="form-control" value={this.state.exp_sal} onChange={this.onChangeExpectedSalary} placeholder="eg. 30k-50k"/>
                                       
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>

                    <div className="row mx-0">
                       <div className="col-md-3 pl-0">
                            <div className="form-group">
                                <label>Experience Year</label>
                                <select className="form-control" name="" value={this.state.exp_year} onChange={this.onChangeExpYear} >
                                    <option value="0" selected >0 Year</option>
                                    <option value="1" >1 Years</option>
                                    <option value="2" >2 Years</option>
                                    <option value="3" >3 Years</option>
                                    <option value="4" >4 Years</option>
                                    <option value="5" >5 Years</option>
                                    <option value="6" >6 Years</option>
                                    <option value="7" >7 Years</option>
                                    <option value="8" >8 Years</option>
                                    <option value="9" >9 Years</option>
                                    <option value="10" >10 Years</option>
                                    <option value="11" >11 Years</option>
                                    <option value="12" >12 Years</option>
                                    <option value="13" >13 Years</option>
                                    <option value="14" >14 Years</option>
                                    <option value="15" >15 Years</option>
                                    <option value="16" >16 Years</option>
                                    <option value="17" >17 Years</option>
                                    <option value="18" >18 Years</option>
                                    <option value="19" >19 Years</option>
                                    <option value="20" >20 Years</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-3 pl-0">
                            <div className="form-group">
                                <label>Experience Month</label>
                                <select className="form-control" name="" value={this.state.exp_month} onChange={this.onChangeExpMonth}>
                                    <option value="0"  >0 Month</option>
                                    <option value="1" selected>1 Month</option>
                                    <option value="2" >2 Months</option>
                                    <option value="3" >3 Months</option>
                                    <option value="4" >4 Months</option>
                                    <option value="5" >5 Months</option>
                                    <option value="6" >6 Months</option>
                                    <option value="7" >7 Months</option>
                                    <option value="8" >8 Months</option>
                                    <option value="9" >9 Months</option>
                                    <option value="10" >10 Months</option>
                                    <option value="11" >11 Months</option>
                                    
                                </select>
                            </div>
                       </div>
                       
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Gender</label>
                                <select className="form-control" name="" value={this.state.gender} onChange={this.onChangeGender}>
                                    <option selected disabled>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Education Levels</label>
                                <input type="text" className="form-control" value={this.state.education_level} onChange={this.onChangeEducationLevel}/>
                                {/* <select className="form-control" name="" >
                                    <option selected >1 Year</option>
                                </select> */}
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" className="form-control" name="" value={this.state.dob} onChange={this.onChangeDateOfBirth} />
                            </div>
                       </div>
                    </div>







                   <div className="form-group">
                       <label> Description</label>
                        <textarea className="form-control" name="" value={this.state.description} onChange={this.onChangeDescription} rows="5" placeholder="Job Description"></textarea>
                   </div>


                    <h5 className="my-3">
                        Social Network
                    </h5>

                   
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Facebook</label>
                                <input type="text" className="form-control" name="" value={this.state.facebook_id} onChange={this.onChangeFacebook} placeholder="Enter Facebook"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Twitter</label>
                                <input type="text" className="form-control" name="" value={this.state.twitter} onChange={this.onChangeTwitter} placeholder="Enter Twitter"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Linkedin</label>
                                <input type="text" className="form-control" name="" value={this.state.linkedin} onChange={this.onChangeLinkedIn} placeholder="Enter Linkedin"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Google+</label>
                                <input type="text" className="form-control" name="" value={this.state.google_plus} onChange={this.onChangeGooglePlus} placeholder="Enter Google+"/>
                            </div>
                       </div>
                    </div>

                    <h5 className="my-3">
                        Contact Information
                    </h5>

                    {/* <select name="country" className="countries" id="countryId">
                            <option value="">Select Country</option>
                        </select>
                        <select name="state" className="states" id="stateId">
                            <option value="">Select State</option>
                        </select>
                        <select name="city" className="cities" id="cityId">
                            <option value="">Select City</option>
                        </select> */}
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
                        <textarea className="form-control" name="" rows="5" value={this.state.full_address} onChange={this.onChangeFullAddress}placeholder="Address"></textarea>
                   </div>

                    <div className="row mx-0">
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>Latitude</label>
                                <input type="text" className="form-control" value={this.state.lat} onChange={this.onChangeLatitude} />
                            </div>
                       </div>
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>Longitude</label>
                                <input type="text" className="form-control" value={this.state.long} onChange={this.onChangeLongitude} />
                            </div>
                       </div>
                       
                    </div>
                    <div className="text-center">
                    <button className="btn bnlurrt py-2 px-4 bordRAD0">SAVE CHANGES</button>
                    </div>
                
               </form>
           </div>
        
        </div>
    </div>

            </section>

   
    } 
   
}

export default Profile;