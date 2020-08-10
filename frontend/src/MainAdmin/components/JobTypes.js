import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class JobTypes extends Component {
    
   
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>All Users</h5>
                               
                            <div className="text-right">
                                <button className="btn py-1 btn-success rounded">Update Job Type</button>
                                <button className="btn py-1 btn-success border rounded ml-3">Delete Job Type</button>
                            </div>
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                <div className="table-responsive">
                                   <table className="table">
                                       <thead>
                                           <tr>
                                               <th></th>
                                               <th>Name</th>
                                               <th>Category</th>
                                               <th>Delete</th>
                                           </tr>
                                       </thead>
                                       <tbody className="colGry">
                                           <tr>
                                               <td>1</td>
                                               <td>Designer</td>
                                               <td>communication</td>
                                               <td>
                                                   <span className="pointer">Delete </span>
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

export default JobTypes;