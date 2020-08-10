import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import axios from 'axios';
import Sidebar from '../../user-panel/shared/Sidebar';
import Header from '../../user-panel/shared/Header';
import {Link} from 'react-router-dom';
import Jobseeker_detail from './Job_Seeker_Detail_Component';
import Axios from 'axios';

class AddJobCategory extends Component {
    
   
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Add Job Category</h5>
                               
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                
                            <div className="text-right">
                                <button className="btn py-1 btn-success rounded">Add New Category</button>
                                <button className="btn py-1 btn-default border rounded ml-3">Delete Any Category</button>
                            </div>
                                <form className="mt-4">
                                    <div className=" form-group">
                                        <label>Category Name</label>
                                        <input type="text" name="" className="form-control" placeholder="Web Developer" />
                                    </div>    
                                    <div className=" form-group">
                                        <label>Category Field</label>
                                        <input type="text" name="" placeholder="Information Technology" className="form-control"/>
                                    </div>  

                                    <div className="">
                                        <button className="btn btn-info">Add & Submit</button>    
                                        <button className="ml-3 border btn btn-default" type="button">Cancel</button>
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default AddJobCategory;