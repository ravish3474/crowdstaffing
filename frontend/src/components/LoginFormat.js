import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import FooterLog from '../shared/FooterLog'
class LoginFormat extends Component {
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
                                    <h3 className="mb-1 text-center">Login Account</h3>
                                    
                                    <div className="mt-4">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="" placeholder="Email or Username" required/>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" name="" placeholder="Password" required/>
                                            </div>
                                            <div className="text-right my-3">
                                                <Link to="recover-password" className="adIN"><strong>Forgot Password?</strong></Link>
                                            </div>

                                            <button className="btn w-100 btnbckBlu">Login to Account</button>
                                        </form>
                                        <div className="text-center mt-4">
                                            <span className="">Don't have an account? <Link to="register" className="adIN" ><strong>Sign Up</strong></Link></span>
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