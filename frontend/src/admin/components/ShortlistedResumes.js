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

                        <h5>Shortlisted Resumes</h5>
                        <div className="HirD bckloGry ">
          
                        <div className="pt-2">
                            <div className="row m-0 mt-3 py-3 border">
                                <div className="col-md-1 p-0">
                                    <div className="text-center">
                                        <img src={require("../../assets/images/client1.png")} className="img-fluid rounded-circle DSFG"/>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="mt-2 ">
                                        <h6 className="mb-0">Rahim Malik</h6>
                                        <small className="colGry">App Designer</small><br/>
                                        <small className="colGry"><i class="fas fa-map-marker-alt"></i> Location</small>

                                    </div>
                                </div>
                            
                                <div className="col-md-6">
                                    <div className="pt-3 text-center">
                                    <button className="btn PBJ py-2 px-4 fnt12  ml-2 mt-2" title="Delete"><i class="fas fa-download"></i> Download CV</button>
                                    <button className="btn Ble py-2 px-4 fnt12  ml-2 mt-2" title="Send Message"><i class="far fa-envelope-open"></i> Send Message</button>
                                    <button className="btn Pnk py-2 px-3 fnt12   ml-2 mt-2" title="Delete"><i class="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        
            
                    </div>
            </div>

  
 
            </section>

   
    } 
   
}

export default ShortlistedResumes;