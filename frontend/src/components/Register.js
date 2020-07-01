import React, { Component } from 'react';
import axios from 'axios';
import swal from 'react-bootstrap-sweetalert';
import {Link} from 'react-router-dom';
import FooterLog from '../shared/FooterLog'

class Register extends Component {
    constructor(props){
        super(props);

        this.onChangeFullname = this.onChangeFullname.bind(this);
        this.onChangeEmail  = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
        }
    }
    onChangeFullname(e){
        this.setState({
            full_name: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onChangePhone(e){
        this.setState({
            phone:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            full_name: this.state.full_name,
            email: this.state.email,
            phone:  this.state.phone,
            password: this.state.password
        }
        console.log(user);
        axios.post('http://localhost:5000/jobSeeker/register',user)
            .then((res) => {
                    if(res.data.code === 1){
                        // console.log(res.data.msg);
                        alert("Registered Sucessfully")
                        // swal("Thanks..!", 'Registered Sucessfully', "success");
                    }
                // if(res.data.code==1){
                //     swal("Thanks..!", `Registered Sucessfully`, "success");
                // }else{
                //     console.log("eeeee");
                // }
                   
            });
        this.setState({
            full_name: '',
            email: '',
            phone:  '',
            password: ''
        })
    }
    render() {
        return <div className="bg_lightBlu">
            
                    <div className="container pt-3 ">
                        <div className="row">
                            <div className="col-md-8">
                                <div>
                                    <img src={require("../assets/images/Xhirez-Logo.png")} className="img-fluid w-25"/>
                                    <img src={require("../assets/images/Clouds.png")} className="img-fluid "/>
                                    <img src={require("../assets/images/Illustration.png")} className="img-fluid w-75"/>
                                </div>
                            </div>
                            <div className="col-md-4 pt-5">
                                <div className="card px-4 py-5 mt-5">
                                    <h3 className="mb-1 text-center">Sign Up</h3>
                                    
                                    <div className="mt-4">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="" value={this.state.full_name} onChange={this.onChangeFullname} placeholder="Full Name" required/>
                                            
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} name="" placeholder="Email Address" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="" value={this.state.phone} onChange={this.onChangePhone} placeholder="Phone Number" required/>
                                            </div>

                                            <div className="form-group">
                                                <input type="password" className="form-control" name="" value={this.state.password} onChange={this.onChangePassword} placeholder="Password" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" name="" placeholder="Confirm Password" required/>
                                            </div>
                                            <div className=" my-3">
                                                <input type="checkbox"  /><small className="ml-1">Agree with<a href="" className="adIN"><strong> Terms & Condition</strong></a></small>
                                            </div>

                                            <button className="btn w-100 btnbckBlu">Create Account</button>
                                        </form>
                                        <div className="text-center mt-4">
                                            <span className="">Already have an account? <Link to="login" className="adIN"><strong>Login</strong></Link></span>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <FooterLog/>
               </div>
    }
}

export default Register;