import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class MyResume extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h4>Profile</h4>
   
           <div className=" mt-4 HirD ">
               <form className=" UJUFom">
                    <div className="form-group">
                        <label>Select Your CV</label>
                        <select className="form-control" name="" >
                            <option selected>Designer CV</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                       <label> Cover Letter</label>
                        <textarea className="form-control" name="" rows="5" placeholder="Address"></textarea>
                   </div>

                   <div className="">
                        <div className="row py-3 border-bottom">
                            <div className="col-md-6">
                                <h6 className="mb-0">Education</h6>
                            </div>
                            <div className="col-md-6 text-right">
                                <span className="text-success">Add New</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <div className="">
                                    <span className="mb-0 text-success">Walters University</span>
                                    <span className="colGry ml-4">2002-2004</span><br/>
                                    <h6 className="mb-0"> Masters In Fine Arts</h6>
                                    <small>Lorem ipsum</small>

                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <button className="btn Ble py-2 px-4 fnt12  ml-2 mt-2" title="Send Message"><i class="far fa-envelope-open"></i> Send Message</button>
                                <button className="btn Pnk py-2 px-3 fnt12   ml-2 mt-2" title="Delete"><i class="far fa-trash-alt"></i></button>
                            </div>
                        </div>

                    </div>

                    
                    <dic className="text-center">
                    <button className="btn bnlurrt py-2 px-4 bordRAD0">SAVE CHANGES</button>
                    </dic>
                
               </form>
           </div>
        
        </div>
    </div>

            </section>

   
    } 
   
}

export default MyResume;