import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class Dashboard extends Component {
    // constructor(props){

    // }
    render() {
        if(localStorage.getItem('company_data')==null){
            console.log('Erororororororo');
        }else{
            console.log(localStorage.getItem('company_data'));
        }
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Dashboard</h4>
           
           <div className="mt-3">
               <div className="">
                   <div className="row">
                        <div className="col-md-3">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="far fa-paper-plane"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">5249</h4>
                                        <span className="">
                                            Posted
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="far fa-star"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">249</h4>
                                        <span className="">
                                            Review
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                        <div className="col-md-3">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="far fa-bell"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">549</h4>
                                        <span className="">
                                            Shortlist Resumes
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row mx-0 PBJ IUhh__">
                                <div className="col-md-3 PBJ">
                                    <div className=" WeBN">
                                        <h2 className="mb-0"><i class="fas fa-tag"></i></h2>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="WeBN text-right">
                                        <h4 className="mb-0">249</h4>
                                        <span className="">
                                            Meeting
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                   </div>
               </div>
           </div>

           <div className="row mt-4">
               <div className="col-md-8">
                    <div className="HirD bckloGry">
                        <h5>Latest Application</h5>
                        <div className="pt-2">
                            <div className="row m-0 mt-3 py-3 border-bottom">
                                <div className="col-md-2">
                                    <div className="text-center">
                                        <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSFG"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="mt-2 OOuN">
                                        <h6 className="mb-0">Rahim Malik</h6>
                                        <small className="colGry">App Designer</small><br/>
                                        <small className="colGry"><i class="fas fa-map-marker-alt"></i> Location</small>

                                    </div>
                                </div>
                            
                                <div className="col-md-2">
                                    <div className="">
                                        <button className="btn bnlurrt w-100 py-2 px-3 bordRAD0">Hire</button>
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

export default Dashboard;