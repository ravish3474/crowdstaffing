import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class ManageJobs extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h4>Manage Jobs</h4>
           
           <div className="mt-3">
               <div className="">
                   <div className="row">
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle PBJ text_Al">
                                        <span><i class="fas fa-briefcase"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="mt-3">
                                        <span>2 Jobs Posted</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle Pnk text_Al">
                                        <span><i class="far fa-copy"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className=" mt-3">
                                        <span>3 Applications</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="row m-0">
                                <div className="col-md-3">
                                    <div className="rounded-circle Ble text_Al">
                                        <span><i class="fas fa-briefcase"></i></span>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className=" mt-3">
                                        <span>1 Active Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                   </div>
               </div>
           </div>

           
           <div className=" mt-4">
               <div className="table-responsive p-2">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Applications</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="OOuN">
                                        <h6 className="mb-0">General Ledger Accountant</h6>
                                        <small className="colGry"><i class="fas fa-map-marker-alt"></i> Address</small><br/>
                                        <small className="colGry">
                                            <span>Created : Date</span>
                                            <span className="ml-1">Expiry : Date</span>
                                        </small>
                                    </div>
                                </td>
                                <td>
                                    <small><span className="fnt500">17</span> Applications</small>
                                </td>
                                <td>
                                    <small className="text-success">Inactive</small>
                                </td>
                                <td>
                                    <span className="p-1 Ble  rounded" title="View"><small><i class="far fa-eye"></i></small></span>
                                    <span className="Pnk p-1 ml-2 rounded" title="Edit"><small><i class="fas fa-pencil-alt"></i></small></span>
                                    <span className="PBJ p-1 ml-2 rounded" title="Delete"><small><i class="far fa-trash-alt"></i></small></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
               </div>
           </div>
        
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default ManageJobs;