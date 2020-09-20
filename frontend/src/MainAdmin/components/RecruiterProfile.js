import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import axios from 'axios';

class RecruiterProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            compId:this.props.match.id,
            compName:'ABC Pvt Ltd.',
            compEmail:'Example:abc@gmail.com',
            compPhone:'Example:000000000',
            compDescription:'Example: Company Profile is not mentioned',
            compWebsite:'Example:Abc@abc.com',
            compCountry:'Not Mentioned',
            compState:'Not Mentioned',
            compCity:'Not Mentioned',
            compEstb:'Not Mentioned',
            compFB:'Not Mentioned',
            compTwt:'Not Mentioned',
            compLinked:'Not Mentioned',
            compGpls:'Not Mentioned',
            compFullAddress:'Not Mentioned',

        }
    }
    componentDidMount(){

    }
    render() {
        return <section>
                <div className="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Recruiter Profile</h5>
   
           <div className=" mt-4 HirD bg-white bordRad_2">
               <div className="d-flex my-4">
                    <div className="htdhi border">
                        <img src={require("../../assets/images/client2.png")} className="img-fluid w-100"/>
                    </div>
                   <div className="m-3">
                        <h6 className="mb-0">{this.state.compName}</h6>
                       {/* <small className="colGry">Education Training</small><br/> */}
                       <small className="colGry"><i className="fas fa-map-marker-alt"></i> <span>{this.state.compState}</span></small> 
                   </div> 
               </div>
               <form className=" UJUFom">
                    {/* <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" className="form-control" name="" placeholder="Enter Company Name"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="" placeholder="Email"/>
                            </div>
                       </div>
                    </div> */}
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" value={this.state.compPhone} name="" placeholder="Enter Phone Number" readOnly/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Website</label>
                                <input type="text" className="form-control" name="" value={this.state.compWebsite}  placeholder="Enter Website" readOnly/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Est. Since</label>
                                <input type="text" className="form-control" name="" value={this.state.compEstb} placeholder="Enter Est. Since" readOnly/>
                            </div>
                       </div>
                       
                    </div>

                   
                    <div className="form-group">
                        <label> About Company</label>
                        <textarea className="form-control" name="" rows="5" placeholder="About Company" value={this.state.compDescription} readOnly></textarea>
                   </div>

                    <h5 className="my-3"> Social Network </h5>

                   
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Facebook</label>
                                <input type="text" className="form-control" name="" value={this.state.compFB} readOnly placeholder="Enter Facebook"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Twitter</label>
                                <input type="text" className="form-control" name="" value={this.state.compTwt} readOnly placeholder="Enter Twitter"/>
                            </div>
                       </div>
                    </div>
                    <div className="row mx-0">
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Linkedin</label>
                                <input type="text" className="form-control" name="" value={this.state.compLinked} readOnly placeholder="Enter Linkedin"/>
                            </div>
                       </div>
                       <div className="col-md-6 pl-0">
                            <div className="form-group">
                                <label>Google+</label>
                                <input type="text" className="form-control" name="" value={this.state.compGpls} readOnly placeholder="Enter Google+"/>
                            </div>
                       </div>
                    </div>

                    <h5 className="my-3">
                        Address
                    </h5>


                    <div className="row mx-0">
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>Country</label>
                                <input type="text" className="form-control" name="" value={this.state.compCountry} readOnly placeholder="Enter Google+"/>
                            </div>
                       </div>
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control" name="" value={this.state.compState} readOnly placeholder="Enter Google+"/>
                            </div>
                       </div>
                       <div className="col-md-4 pl-0">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-control" name="" value={this.state.compCity} readOnly placeholder="Enter Google+"/>
                            </div>
                       </div>
                    </div>
                    <div className="form-group">
                       <label> Full Address</label>
                        <textarea className="form-control" name="" rows="5" placeholder="Address" value={this.state.compFullAddress} readOnly></textarea>
                   </div>

                   
                    <div className="text-center">
                        {/* <button className="btn bnlurrt py-2 px-4 bordRAD0">SAVE CHANGES</button> */}
                        <button className="btn ml-3 edlert py-2 px-4 bordRAD0" onClick={()=>{
                                                                        console.log("Deleteing...."+ this.state.compId);
                                                                        axios.delete('/company/deleteCompany/'+this.state.compId)
                                                                                .then(resp=>{
                                                                                    if(resp.data.code==1){
                                                                                    alert("Deleted Successfully..");
                                                                                    window.location.reload(true);
                                                                                    }else{
                                                                                        alert("Failed to Delete");
                                                                                    }
                                                                                })
                                                                                .catch(err=>{
                                                                                    console.log(err)
                                                                                })
                                                                        }}>DELETE COMPANY
                                                                    </button>
                      
                    </div>
                
               </form>
           </div>
        
        </div>
    </div>
</section>

   
    } 
   
}

export default RecruiterProfile;