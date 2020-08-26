import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class CvManager extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h4>CV Manager</h4>
           
           <div className=" mt-4 bckloGry p-3">
               <div className="row border p-3">
                   <div className="col-md-8">
                        <div className="d-flex">
                            <div className="">
                                <img src={require("../../assets/images/client3.png")} className="HtaWW"/>
                            </div>
                            <div className="OOuN ml-4 mt-2">
                                <h6 className="m-3">CV Name</h6>
                            
                            </div>
                        </div>
                   </div>
                   <div className="col-md-4">
                        <div className="text-center mt-3">
                            <span className="Pnk py-1 px-2 ml-2 rounded" title="Edit"><small><i class="fas fa-pencil-alt"></i></small></span>
                            <span className="PBJ py-1 px-2 ml-2 rounded" title="Delete"><small><i class="far fa-trash-alt"></i></small></span>
                        </div>
                   </div>
               </div>

               <div className="mt-4 w-50 mr-auto">
                    <form className="">
                        <label>Curriculum Vitae</label>
                        <div className="row m-0">
                            <div className="col-md-8 pl-0">
                                <input type="" className="form-control" placeholder="Design CV"/>
                                <small>Suitable files are doc, docx,pdf.</small>
                            </div>
                            <div className="col-md-4">
                                <button className="ml-2 btn btn-success py-2 px-4">Upload CV </button>
                            </div>
                            
                        </div>
                        
                        
                        
                    </form>
               </div>
           </div>
        
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default CvManager;