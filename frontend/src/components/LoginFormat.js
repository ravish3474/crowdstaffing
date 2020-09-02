// import React, { Component,useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { signin } from '../actions/userActions';
// import FooterLog from '../shared/FooterLog'
//     function LoginFormat(props) {
//         const dispatch = useDispatch();
//         const [email, setEmail] = useState('');
//         const [pass_code, setPassword] = useState('');
//         const userSignin = useSelector(state=>state.userSignin);
//         const {loading, userInfo, error} = userSignin;
    
//         useEffect(() => {
//             if(userInfo){
//                 props.history.push("/user-panel");
//             }
//             return () => {
    
//             };
//         }, [userInfo]);
    
//         const submitHandler = (e) =>{
//             e.preventDefault();
//             dispatch(signin(email,pass_code));
//         }
//         return <div className="bg_lightBlu">
            
//                     <div className="container pt-3 ">
//                         <div className="row">
//                             <div className="col-md-8">
//                                 <div>
//                                     <img src={require("../assets/images/Xhirez-Logo.png")} className="img-fluid w-25"/>
//                                     <img src={require("../assets/images/Clouds.png")} className="img-fluid "/>
//                                     <img src={require("../assets/images/Illustration.png")} className="img-fluid w-75"/>
//                                 </div>
//                             </div>
//                             <div className="col-md-4 pt-5">
//                                 <div className="card px-4 py-5 mt-5">
//                                     <h3 className="mb-1 text-center">Login Account</h3>
//                                     <div>
//                                         {loading && <div>Loading...</div>}
//                                         {error && <div>{error}</div>}
//                                     </div>
                                    
//                                     <div className="mt-4">
//                                         <form onSubmit={submitHandler} className="form" role="form" autocomplete="off">
//                                             <div className="form-group">
//                                                 <input type="text" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Email or Username" required/>
//                                             </div>
//                                             <div className="form-group">
//                                                 <input type="password" className="form-control" id="pass_code" onChange={(e)=>setPassword(e.target.value)} name="pass_code" placeholder="Password" required/>
//                                             </div>
//                                             <div className="text-right my-3">
//                                                 <Link to="recover-password" className="adIN"><strong>Forgot Password?</strong></Link>
//                                             </div>

//                                             <button className="btn w-100 btnbckBlu" type="submit">Login to Account</button>
//                                         </form>
//                                         <div className="text-center mt-4">
//                                             <span className="">Don't have an account? <Link to="register" className="adIN" ><strong>Sign Up</strong></Link></span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>    
//                         </div>
//                     </div>
//                     <FooterLog/>
//                </div>
//     }

// export default LoginFormat;

import React, { Component,useEffect, useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { signin } from '../actions/userActions';
import FooterLog from '../shared/FooterLog'
import jwt_decode from 'jwt-decode';
import Axios from 'axios';
//     function LoginFormat(props) {
//         const dispatch = useDispatch();
//         const [email, setEmail] = useState('');
//         const [pass_code, setPassword] = useState('');
//         const userSignin = useSelector(state=>state.userSignin);
//         const {loading, userInfo, error} = userSignin;
    
//         useEffect(() => {
//             if(userInfo){
//                 props.history.push("/admin-panel");
//             }
//             return () => {
    
//             };
//         }, [userInfo]);
    
//         const submitHandler = (e) =>{
//             e.preventDefault();
//             dispatch(signin(email,pass_code));
//         }
        
//     }

class LoginFormat extends Component{
    constructor(props){
        super(props);
        let loggIn= false;
        this.state={
            email:'',
            password:'',
            error:'',
            loggIn
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const login_data={
            email: this.state.email,
            pass_code: this.state.password
        }
        Axios.post('/jobSeeker/signin',login_data)
                .then(response =>{
                    // if(response.data.length>0){
                        // console.log(response.status);
                        if(response.data.code==1){
                            // const tokenData= jwt_decode(response.data.token);
                            const tokenData=response.data.token;
                            // console.log(response.data.token);
                            localStorage.setItem('user_token',tokenData);
                            // localStorage.setItem('user_token',JSON.stringify(tokenData));
                            this.setState({
                                    loggIn:true
                                })
                            this.props.history.push("/user-panel");
                        }else{
                            this.setState({
                                loggIn:false,
                                error:'Invalid Email or Password'
                            })
                        }
                        
                })
        // if(this.state.email==="A" && this.state.password==="B"){
        //     this.props.history.push("/company-panel");
        // }else{
        //     this.setState({
        //         error:'Invalid Email or Password'
        //     })
        // }
        
        // <Redirect to="/somewhere/else" />
        // <Redirect to="/company-panel"/>
    }
    render(){
        if(this.state.loggIn){
            return <Redirect to="/login"/>
        }
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
                                    <h3 className="mb-1 text-center"> Login Account</h3>
                                    <div>
                                        {/* {/* {loading && <div>Loading...</div>} */}
                                        <div className="text-danger">{this.state.error}</div>
                                    </div>
                                    
                                    <div className="mt-4">
                                        <form onSubmit={this.onSubmit} className="form" role="form" autocomplete="off">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="email" value={this.state.email} onChange={this.onChangeEmail} name="email" placeholder="Email or Username" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="pass_code" value={this.state.password} onChange={this.onChangePassword} name="pass_code" placeholder="Password" required/>
                                            </div>
                                            <div className="text-right my-3">
                                                <Link to="recover-password-company" className="adIN"><strong>Forgot Password?</strong></Link>
                                            </div>

                                            <button className="btn w-100 btnbckBlu" type="submit">Login to Account</button>
                                        </form>
                                        <div className="text-center mt-4">
                                            <span className="">Don't have an account? <Link to="registerCompany" className="adIN" ><strong>Sign Up</strong></Link></span>
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
export default LoginFormat;