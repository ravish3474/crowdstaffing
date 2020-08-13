import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class JobCategories extends Component {
    
   
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Gategory Job Posting</h5>
                               
                            <div className="text-right">
                                <button className="btn py-1 btn-success rounded">Add New Category</button>
                                <button className="btn py-1 btn-success border rounded ml-3">Delete Any Category</button>
                            </div>
                            <div className="mt-3 p-5 colBlk ">
                                <div className="bg-white bordRad_2">
                                    <h5>Browse Jobs by Functional / Department</h5>
                                    <hr/>
                                    <div className="row mx-0 colGry">
                                        <div className="col-md-3">
                                            <span>Accounting Jobs</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 bg-white bordRad_2">
                                    <h5>Browse Jobs by Industry / Sector</h5>
                                    <hr/>
                                    <div className="row mx-0 colGry">
                                        <div className="col-md-3">
                                            <span>Accounting Jobs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default JobCategories;