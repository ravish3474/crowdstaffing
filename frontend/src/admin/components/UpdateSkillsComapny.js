import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class UpdateSkillsComapny extends Component {
    render() {
        return <section>
                <div class="wrapper">
                
                    <Sidebar/>

                    <div id="content">

                        <Header/>

                        <h4>Shortlisted Resumes</h4>
                        <div className="HirD bckloGry ">
          
                        <div className="p-4 bg-white">
                            <div className="mt-3 p-5 colBlk b">
                                
                                <div className="text-right">
                                    <button className="btn py-1 btn-success rounded">Update Skills</button>
                                    <button className="btn py-1 btn-default border rounded ml-3">Delete Skills</button>
                                </div>
                                <form className="mt-4">
                                    <div className=" form-group">
                                        <label>Update Skills</label>
                                        <div className="d-flex">
                                            <input type="text" name="" className="form-control" placeholder="Bootstrap" />
                                            <button className="btn btn-danger">Add Skill <i class="fas fa-plus ml-1"></i></button>    
                                        </div>
                                    </div>    
                                   

                                    <div className="">
                                        <button className="btn btn-info">Add & Submit</button>    
                                        <button className="ml-3 border btn btn-default" type="button">Cancel</button>
                                    </div>  
                                </form>
                            </div>

                        </div>
                    </div>
        
            
                    </div>
            </div>

  
 
            </section>

   
    } 
   
}

export default UpdateSkillsComapny;