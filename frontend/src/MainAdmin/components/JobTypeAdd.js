import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class JobTypeAdd extends Component {
    
   
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Add Job Type</h5>
                               
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                
                            <div className="text-right">
                                <button className="btn py-1 btn-success rounded">Update Job Type</button>
                                <button className="btn py-1 btn-default border rounded ml-3">Delete Job Type</button>
                            </div>
                                <form className="mt-4">
                                    <div className=" form-group">
                                        <label>Type Job Name</label>
                                        <div className="">
                                            <input type="text" name="" className="form-control" placeholder="Web Developer" />
                                             
                                        </div>
                                    </div>    
                                   

                                    <div className="">
                                        <button className="btn btn-info">Save & Submit</button>    
                                        <button className="ml-3 border btn btn-default" type="button">Cancel</button>
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default JobTypeAdd;