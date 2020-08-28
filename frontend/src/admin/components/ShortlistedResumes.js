import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class ShortlistedResumes extends Component {
    render() {
        return <section>
                <div class="wrapper">
                
                    <Sidebar/>

                    <div id="content">

                        <Header/>

                        <h4>Shortlisted Resumes</h4>
                        <div className="HirD bckloGry ">
          
                        <div className="p-4 bg-white">
                            <div className="table-responsive border px-2">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Candidate Name</th>
                                            <th>Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-bottom">
                                            <td>
                                                <div className="d-flex">
                                                    <div className="text-center">
                                                        <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                                    </div>
                                                    <div className="m-3 ">
                                                        <h6 className="mb-0">Rahim Malik</h6>
                                                        <small className="colGry fnt600">App Designer</small>
                                                        <small className="colGry fnt600 ml-2"><i class="fas fa-map-marker-alt"></i> Location</small>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="mt-4"><span className="text-danger "><i class="fas fa-heart"></i></span> Shortlisted</span>
                                            </td>
                                            <td>
                                                <div className="pt-3 text-center mt-2">
                                                    <button className="btn PBJ py-2 px-4 fnt12  ml-2 " title="View"><i class="fas fa-eye"></i> </button>
                                                    <button className="btn Ble py-2 px-4 fnt12  ml-2 " title="Edit"><i class="fas fa-pencil-alt"></i> </button>
                                                    <button className="btn Pnk py-2 px-3 fnt12   ml-2 " title="Delete"><i class="far fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-bottom">
                                            <td>
                                                <div className="d-flex">
                                                    <div className="text-center">
                                                        <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSimg"/>
                                                    </div>
                                                    <div className="m-3 ">
                                                        <h6 className="mb-0">Rahim Malik</h6>
                                                        <small className="colGry fnt600">App Designer</small>
                                                        <small className="colGry fnt600 ml-2"><i class="fas fa-map-marker-alt"></i> Location</small>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="mt-4"><span className="text-danger "><i class="fas fa-heart"></i></span> Shortlisted</span>
                                            </td>
                                            <td>
                                                <div className="pt-3 text-center mt-2">
                                                    <button className="btn PBJ py-2 px-4 fnt12  ml-2 " title="View"><i class="fas fa-eye"></i> </button>
                                                    <button className="btn Ble py-2 px-4 fnt12  ml-2 " title="Edit"><i class="fas fa-pencil-alt"></i> </button>
                                                    <button className="btn Pnk py-2 px-3 fnt12   ml-2 " title="Delete"><i class="far fa-trash-alt"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
        
            
                    </div>
            </div>

  
 
            </section>

   
    } 
   
}

export default ShortlistedResumes;