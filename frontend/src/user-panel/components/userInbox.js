import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class userInbox extends Component {
    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Inbox</h5>
           
           <div className=" mt-4 bckloGry p-4">
           <div class="row">
                    <div class="col-md-3 border-right">
                        <div className="px-2 py-4">
                            <input name="" type="text" className="form-control borderRad30" placeholder="Search Friend.."/>    
                        </div>    
 
                        <div class=" bg-white">
                            <ul class="list-unstyled mesgList p-2">
                                <li>
                                    <div class="d-flex">
                                        <div class="">
                                        <img src={require("../../assets/images/client3.png")} className="ht_W"/>
                                        </div>
                                        <div class="ml-2">
                                            <small className="fnt600">John King</small>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex">
                                        <div class="">
                                           <img src={require("../../assets/images/client3.png")} className="ht_W"/>
                                        </div>
                                        <div class="ml-2">
                                            <small className="fnt600">John King</small>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div className="p-3">
                            <div className="d-flex">
                                <div className="">
                                    <img src={require("../../assets/images/client3.png")} className="ht_W"/>
                                </div>
                                <div className="ml-3">
                                    <span className="">Name</span><br/>
                                    <small className="colGry">was online today 12/01/2020</small>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white p-3" >
                            <div class="msgchat">
                                <ul class="list-unstyled mb-0 chatmsg">
                                    <li>
                                        <div class="msg">
                                            <small class="colGry">date</small>
                                            <div class=" ">
                                                <span class="lftchat">Message</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="msg rghtmsg">
                                            <small class="colGry">date</small>
                                            <div class=" ">
                                                <span class="rgtchat">Message</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="posRel">
                                <input type="text" class="form-control Ingpy" placeholder="Enter Message..."/>
                                <div class="PosAB">
                                    <input type="file" class="d-none" id="ddfile"/>
                                    <label for="ddfile"><i class="fas fa-paperclip"></i></label>
                                    <button class="btn bg_blue btn-primary ml-2 py-1 px-2">Send</button>
                                </div>
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

export default userInbox;