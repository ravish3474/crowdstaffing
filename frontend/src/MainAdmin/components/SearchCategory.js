import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class SearchCategory extends Component {
    
   
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Delete Job Category</h5>
                               
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                
                            <div className="text-right">
                                <button className="btn py-1 btn-success rounded">Add New Category</button>
                                <button className="btn py-1 btn-default border rounded ml-3">Delete Any Category</button>
                            </div>
                                <form className="mt-4">
                                    <div className=" form-group">
                                        <label>Search Category</label>
                                        <div className="d-flex">
                                            <input type="text" name="" className="form-control" placeholder="Web Developer" />
                                            <button className="btn btn-danger">Delete</button>    
                                        </div>
                                    </div>    
                                   

                                    <div className="">
                                        <button className="btn btn-info">Save</button>    
                                        <button className="ml-3 border btn btn-default" type="button">Cancel</button>
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default SearchCategory;