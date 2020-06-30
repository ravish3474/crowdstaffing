import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class RecruiterManage extends Component {
    render() {
        return <section>
                    <div class="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Recruiter Manage</h5>
                                <div className="dsaIcon w-50 m-auto">
                                    <input type="text" placeholder="" className="form-control "/> 
                                    <span class=" IconSE"><i class="fas fa-search"></i></span>
                                </div>
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                

                                <div className="">
                                    <div className="row mt-3 shadow p-3 mx-0">
                                        <div className="col-md-1 px-0">
                                            <div className="border">
                                                <img src={require("../../assets/images/client2.png")} className="img-fluid w-100 DSFG"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <h6 className="mb-0">Lori Ramos</h6>
                                                <span className="colGry">UX/UI Designer</span><br/>
                                                <span className="colGry"><i class="fas fa-map-marker-alt"></i> <span>England</span></span> 
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="m-3 text-center">
                                                <h3 className="mb-0 text-success">15</h3>
                                                <span className="colGry fnt500">Open Jobs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3 shadow p-3 mx-0">
                                        <div className="col-md-1 px-0">
                                            <div className="border">
                                                <img src={require("../../assets/images/client2.png")} className="img-fluid w-100 DSFG"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="">
                                                <h6 className="mb-0">Lori Ramos</h6>
                                                <span className="colGry">UX/UI Designer</span><br/>
                                                <span className="colGry"><i class="fas fa-map-marker-alt"></i> <span>England</span></span> 
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="m-3 text-center">
                                            <h3 className="mb-0 text-success">15</h3>
                                                <span className="colGry fnt500">Open Jobs</span>
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

export default RecruiterManage;