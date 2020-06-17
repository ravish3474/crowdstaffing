import React, { Component } from 'react';
import ReactDom from 'react-dom';
import FooterLog from '../shared/FooterLog'
class OtpVerify extends Component {
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
                                    <div className="text-center">
                                        <h3 className="mb-1 ">Verify Code</h3>
                                        <small>Enter OTP you received on your email.</small>
                                    </div>
                                    <div className="mt-4">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="" placeholder="Enter OTP" required/>
                                            </div>
                                            
                                        

                                            <button className="btn w-100 btnbckBlu">Verify OTP</button>
                                        </form>
                                        <div className="text-center mt-4">
                                            <small className=""> <strong>Resend Code</strong></small>
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

export default OtpVerify;