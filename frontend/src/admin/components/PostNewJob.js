import React, { Component } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import { timers } from 'jquery';


class PostNewJob extends Component {
    constructor(props){
        super(props);

        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeJobDesc = this.onChangeJobDesc.bind(this);
        this.onChangeJobLastDate = this.onChangeJobLastDate.bind(this);
        this.onChangeJobType= this.onChangeJobType.bind(this);
        this.onChangeJobGender = this.onChangeJobGender.bind(this);
        this.onChangeJobMinSal = this.onChangeJobMinSal.bind(this);
        this.onChangeJobMaxSal = this.onChangeJobMaxSal.bind(this);
        this.onChangeJobMinExp= this.onChangeJobMinExp.bind(this);
        this.onChangeJobMaxExp= this.onChangeJobMaxExp.bind(this);
        this.onChangeJobCategory= this.onChangeJobCategory.bind(this);
        this.onChangeJobQualification= this.onChangeJobQualification.bind(this);
        this.onChangeJobCountry= this.onChangeJobCountry.bind(this);
        this.onChangeJobCity = this.onChangeJobCity.bind(this);
        this.onChangeJobFullAddress = this.onChangeJobFullAddress.bind(this);
        
        // this.onChangeEmail  = this.onChangeEmail.bind(this);
        // this.onChangePhone = this.onChangePhone.bind(this);
        // this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            job_Type:[],
            cate_goires:[],
            job_title : '',
            job_desc:'',
            job_last_date: 'NA',
            jobTypee:'Full Time',
            gender:'Male',
            minSal:0,
            maxSal:1,
            minExp:0,
            maxExp:1,
            job_category:'NA',
            qualification:'NA',
            country:'NA',
            city:'NA',
            fulladdress:'NA',
            lat:28.30,
            long:30.24
        }
    }
    componentDidMount(){
        //To get Job Category
          axios.get('/category')
          .then(response =>{
                // console.log("Res Length: "+response.data.length);
                // this.setState({
                //     cate_goires: response.data.map(category =>category)
                // })
              if(response.data.length > 0){
                // console.log(response.data);
                  this.setState({
                      cate_goires: response.data.map(category =>category)
                  })
              
              }else{
  
              }
          }).catch(err => console.log(err))
          //To get Job Type
          axios.get('/jobType')
          .then(response =>{
                // console.log("Res Length: "+response.data.length);
                // this.setState({
                //     cate_goires: response.data.map(category =>category)
                // })
              if(response.data.length > 0){
                // console.log(response.data);
                  this.setState({
                      job_Type: response.data.map(jobType =>jobType)
                  })
              
              }else{
  
              }
          }).catch(err => console.log(err))
          // console.log(this.state.category);
      }
    onChangeJobTitle(e){
        this.setState({
            job_title: e.target.value
        });
    }
    onChangeJobDesc(e){
        this.setState({
            job_desc:e.target.value
        })
    }
    onChangeJobLastDate(e){
        this.setState({
            job_last_date:e.target.value
        })
    }
    onChangeJobType(e){
        this.setState({
            jobTypee:e.target.value
        })
    }
    onChangeJobGender(e){
        this.setState({
            gender:e.target.value
        })
    }
    onChangeJobMinSal(e){
        this.setState({
            minSal:e.target.value
        })
    }
    onChangeJobMaxSal(e){
        this.setState({
            maxSal:e.target.value
        })
    }
    onChangeJobMinExp(e){
        this.setState({
            minExp:e.target.value
        })
    }
    onChangeJobMaxExp(e){
        this.setState({
            maxExp:e.target.value
        })
            
        
    }
    onChangeJobCategory(e){
        this.setState({
            job_category:e.target.value
        })
    }
    onChangeJobQualification(e){
        this.setState({
            qualification:e.target.value
        })
    }
    onChangeJobCountry(e){
        this.setState({
            country:e.target.value
        })
    }
    onChangeJobCity(e){
        this.setState({
            city:e.target.value
        })
    }
    onChangeJobFullAddress(e){
        this.setState({
            fulladdress:e.target.value
        })
    }
    
    // onChangeJobType()
    onSubmit(e){
        e.preventDefault();
        // console.log('Job Title: '+this.state.job_title);
        // console.log('Job Desc: '+this.state.job_desc);
        // console.log('Last Date: '+this.state.job_last_date);
        // console.log('Job Type: '+this.state.jobTypee);
        // console.log('Gender: '+this.state.gender);
        // console.log('Min Sal: '+this.state.minSal);
        // console.log('Max Sal : '+this.state.maxSal);
        // console.log('Min Exp: '+this.state.minExp);
        // console.log('Max Exp : '+this.state.maxExp);
        // console.log('Job Category: '+this.state.job_category);
        // console.log('Qualification : '+this.state.qualification);
        // console.log('country : '+this.state.country);
        // console.log('city : '+this.state.city);
        // console.log('fulladdress : '+this.state.fulladdress);
        // console.log('Latitude : '+this.state.lat);
        // console.log('Longitude : '+this.state.long);
        const jobDetails = {
            "jobTitle":this.state.job_title,
            "jobDesc": this.state.job_desc,
            "lastDate":this.state.job_last_date,
            "comapanyId":"12465232",
            "jobTypeId":this.state.jobTypee,
            "specialism":"PHP, NOde",
            "minSal":this.state.minSal,
            "maxSal":this.state.maxSal,
            "minExp":this.state.minExp,
            "maxExp":this.state.maxExp,
            "gender":this.state.gender,
            "job_category":this.state.job_category,
            "qualification":this.state.qualification,
            "add_country":this.state.country,
            "add_state":"Uttarakhd",
            "add_city":this.state.city,
            "full_address":this.state.fulladdress,
            "latitude":this.state.lat,
            "longitude":this.state.long
          
        }
        console.log(jobDetails);
        axios.post('/jobs/postNewJob',jobDetails)
            .then((res) => {
                    if(res.data.code === 1){
                        // console.log(res.data.msg);
                        alert("Job Posted Sucessfully")
                        // swal("Thanks..!", 'Registered Sucessfully', "success");
                    }
                // if(res.data.code==1){
                //     swal("Thanks..!", `Registered Sucessfully`, "success");
                // }else{
                //     console.log("eeeee");
                // }
                   
            });
        this.setState({
             job_Type:[],
            cate_goires:[],
            job_title : '',
            job_desc:'',
            job_last_date: 'NA',
            jobTypee:'Full Time',
            gender:'Male',
            minSal:0,
            maxSal:1,
            minExp:0,
            maxExp:1,
            job_category:'NA',
            qualification:'',
            country:'NA',
            city:'NA',
            fulladdress:'',
            lat:28.30,
            long:30.24
        });
        // const user = {
        //     full_name: this.state.full_name,
        //     email: this.state.email,
        //     phone:  this.state.phone,
        //     password: this.state.password
        // }
    }
    // onChangeEmail(e){
    //     this.setState({
    //         email: e.target.value
    //     });
    // }
    // onChangePassword(e){
    //     this.setState({
    //         password: e.target.value
    //     })
    // }
    // onChangePhone(e){
    //     this.setState({
    //         phone:e.target.value
    //     });
    // }

    render() {
        
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h4>Post New Job</h4>
           
           

           
           <div className=" mt-1 HirD ">
               <form className=" UJUFom" onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Job Title</label>
                        <input type="text" className="form-control" name="" value={this.state.job_title} onChange={this.onChangeJobTitle} placeholder="UI/UX Designer"/>
                   </div>
                   <div className="form-group">
                       <label>Job Description</label>
                        <textarea className="form-control" name="" rows="5" value={this.state.job_desc} onChange={this.onChangeJobDesc} placeholder="Job Description"></textarea>
                   </div>
                   <div className="form-group">
                       <label>Application Deadline Date</label>
                        <input type="date" className="form-control" name="" value={this.state.job_last_date} onChange={this.onChangeJobLastDate} placeholder="UI/UX Designer"/>
                   </div>
                    {/* <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Email"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Username"/>
                            </div>
                       </div>
                    </div> */}
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Job Type</label>
                                <select className="form-control" name="" onChange={this.onChangeJobType}>
                                {
                                    this.state.job_Type.map(function(jobType){
                                    return   <option value={jobType.type_name}>{jobType.type_name}</option>
                                    
                                    })
                                }
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Gender</label>
                                <select className="form-control" name="" value={this.state.gender} onChange={this.onChangeJobGender}>
                                    <option selected disabled>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            {/* <div className="form-group">
                                <label>Specialisms</label>
                                <select className="form-control" name="" value={this.state.spec} onChange={this.onChangeJobSpecialism}>
                                    <option selected disabled>Select</option>
                                </select>
                            </div> */}
                       </div>
                    </div>


                    <div className="row mx-0">
                       <div className="col-md-3 pl-0">
                            <div className="form-group">
                                <label>Offerd Min Salary</label>
                                <select className="form-control" name="" value={this.state.minSal} onChange={this.onChangeJobMinSal} >
                                    <option value="0" selected >0 Lac</option>
                                    <option value="1" >1 Lac</option>
                                    <option value="2" >2 Lac</option>
                                    <option value="3" >3 Lac</option>
                                    <option value="4" >4 Lac</option>
                                    <option value="5" >5 Lac</option>
                                    <option value="6" >6 Lac</option>
                                    <option value="7" >7 Lac</option>
                                    <option value="8" >8 Lac</option>
                                    <option value="9" >9 Lac</option>
                                    <option value="10" >10 Lac</option>
                                    <option value="11" >11 Lac</option>
                                    <option value="12" >12 Lac</option>
                                    <option value="13" >13 Lac</option>
                                    <option value="14" >14 Lac</option>
                                    <option value="15" >15 Lac</option>
                                    <option value="16" >16 Lac</option>
                                    <option value="17" >17 Lac</option>
                                    <option value="18" >18 Lac</option>
                                    <option value="19" >19 Lac</option>
                                    <option value="20" >20 Lac</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-3 pl-0">
                            <div className="form-group">
                                <label>Offerd Max Salary</label>
                                <select className="form-control" name="" value={this.state.maxSal} onChange={this.onChangeJobMaxSal}>
                                    <option value="1" selected>1 Lac</option>
                                    <option value="2" >2 Lac</option>
                                    <option value="3" >3 Lac</option>
                                    <option value="4" >4 Lac</option>
                                    <option value="5" >5 Lac</option>
                                    <option value="6" >6 Lac</option>
                                    <option value="7" >7 Lac</option>
                                    <option value="8" >8 Lac</option>
                                    <option value="9" >9 Lac</option>
                                    <option value="10" >10 Lac</option>
                                    <option value="11" >11 Lac</option>
                                    <option value="12" >12 Lac</option>
                                    <option value="13" >13 Lac</option>
                                    <option value="14" >14 Lac</option>
                                    <option value="15" >15 Lac</option>
                                    <option value="16" >16 Lac</option>
                                    <option value="17" >17 Lac</option>
                                    <option value="18" >18 Lac</option>
                                    <option value="19" >19 Lac</option>
                                    <option value="20" >20 Lac</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-3 pl-0">
                            <div className="form-group">
                                <label>Min Experience</label>
                                <select className="form-control" name="" value={this.state.minExp} onChange={this.onChangeJobMinExp}>
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
                            {/* <div className="form-group">
                                <label>Career Level</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>40k-50k</option>
                                </select>
                            </div> */}
                       </div>
                       <div className="col-md-3 pl-0">
                            <div className="form-group">
                                <label>Max Experience</label>
                                <select className="form-control" name="" value={this.state.maxExp} onChange={this.onChangeJobMaxExp}>
                                <option value="1" selected>1 Year</option>
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
                    </div>


                    {/* <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Experience</label>
                                <select className="form-control" name="" >
                                    <option selected >1 Year</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Gender</label>
                                <select className="form-control" name="" >
                                    <option selected disabled>Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                       </div>
                    </div> */}


                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Industry</label>
                                <select className="form-control" name="" value={this.state.job_category} onChange={this.onChangeJobCategory}>
                                {
                                    this.state.cate_goires.map(function(category){
                                    return   <option value={category.categoryName}>{category.categoryName}</option>
                                    
                                    })
                                }
                                    {/* <option selected >Basic</option> */}
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Qualification</label>
                                <input type="text" className="form-control" name="" value={this.state.qualification} onChange={this.onChangeJobQualification}/>
                               
                            </div>
                       </div>
                    </div>
                    <h5 className="my-3">Address / Location</h5>
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
                                <select className="form-control cities" name="city" value={this.state.city} onChange={this.onChangeCity} id="cityId">
                                    <option value="">Select City</option>
                                </select>
                            </div>
                       </div>
                    </div>
                    {/* <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Country</label>
                                <select className="form-control" name="" value={this.state.country} onChange={this.onChangeJobCountry}>
                                    <option value="India" >India</option>
                                    <option value="US" >US</option>
                                    <option value="Srilanka" >Srilanka</option>
                                </select>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>City</label>
                                <select className="form-control" name="" value={this.state.city} onChange={this.onChangeJobCity}>
                                    <option value="Dehradun">Dehradun</option>
                                    <option value="Virginia">Virginia</option>
                                    <option value="Qatar">Qatar</option>
                                    
                                </select>
                            </div>
                       </div>
                    </div> */}
                    <div className="form-group">
                       <label>Full Address</label>
                        <textarea className="form-control" name="" rows="5" placeholder="Address" value={this.state.fulladdress} onChange={this.onChangeJobFullAddress}></textarea>
                   </div>


                    
                    <dic className="text-center">
                    <button className="btn bnlurrt py-2 px-4 bordRAD0">Submit</button>
                    </dic>
                
               </form>
           </div>
        
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default PostNewJob;