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

            <h5>Upload Resume</h5>
   
           <div className=" mt-4 HirD ">
               <form className=" UJUFom">
                    <div className="text-right px-2">
                        <div className="">
                        <label for="upldimg" className="btn-info btn"><small>Upload Resume</small></label>
                        <input type ="file" name="image_file" className="d-none"  id="upldimg"/>
                                {/* <img src={require("../../assets/images/user-dummy.png")} className="img-fluid W12PX border ml-2" /> */}
                                
                                
                        </div>
                    </div>
               </form>
           </div>
        
        </div>
    </div>

            </section>

   
    } 
   
}

export default MyResume;