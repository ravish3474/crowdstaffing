import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class AppliedJobs extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h4>Applied Jobs</h4>
           
           <div className=" mt-4 bckloGry p-4">
               <div className="row border p-3 ASd3ee">
                   <div className="col-md-9">
                        <div className="d-flex">
                            <div className="">
                                <img src={require("../../assets/images/client3.png")} className="HtaWW"/>
                            </div>
                            <div className="OOuN ml-4 mt-2">
                                <h6 className="mb-0">General Ledger Accountant</h6>
                                <small className="colGry"><i class="fas fa-map-marker-alt"></i> Address</small><br/>
                                <small className="colGry">
                                    <span>Created : Date</span>
                                    <span className="ml-1">Expiry : Date</span>
                                </small>
                            
                            </div>
                        </div>
                   </div>
                   <div className="col-md-3">
                        <div className="text-center mt-3">
                            <span className="Pnk py-1 px-2 ml-2 rounded" title="Edit"><small><i class="fas fa-pencil-alt"></i></small></span>
                            <span className="PBJ py-1 px-2 ml-2 rounded" title="Delete"><small><i class="far fa-trash-alt"></i></small></span>
                        </div>
                   </div>
               </div>

               <div className="row border p-3 ASd3ee">
                   <div className="col-md-9">
                        <div className="d-flex">
                            <div className="">
                                <img src={require("../../assets/images/client3.png")} className="HtaWW"/>
                            </div>
                            <div className="OOuN ml-4 mt-2">
                                <h6 className="mb-0">General Ledger Accountant</h6>
                                <small className="colGry"><i class="fas fa-map-marker-alt"></i> Address</small><br/>
                                <small className="colGry">
                                    <span>Created : Date</span>
                                    <span className="ml-1">Expiry : Date</span>
                                </small>
                            
                            </div>
                        </div>
                   </div>
                   <div className="col-md-3">
                        <div className="text-center mt-3">
                            <span className="Pnk py-1 px-2 ml-2 rounded" title="Edit"><small><i class="fas fa-pencil-alt"></i></small></span>
                            <span className="PBJ py-1 px-2 ml-2 rounded" title="Delete"><small><i class="far fa-trash-alt"></i></small></span>
                        </div>
                   </div>
               </div>
           </div>
        
        </div>
    </div>
            </section>

   
    } 
   
}

export default AppliedJobs;