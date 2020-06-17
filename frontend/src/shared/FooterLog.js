import React, { Component } from 'react';
import ReactDom from 'react-dom';

class FooterLog extends Component {
    render() {
        return <div className="bg_blue py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <div>
                                    <img src={require("../assets/images/Xhirez-Logo-White.png")} className="img-fluid w-75"/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="text-center mt-1 pt-4">
                                <span className="text-white">
                                   Xhirez &copy; 2020 All Rights Reserved.
                                </span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="mt-1 pt-3">
                                <ul className="list-unstyled m-0 d-flex">
                                    <li>
                                       <a ><img src={require("../assets/images/Facebook.png")}  className="img-fluid"/></a>
                                    </li>
                                    <li>
                                       <a ><img src={require("../assets/images/Linkdin.png")}  className="img-fluid"/></a>
                                    </li>
                                    <li>
                                       <a ><img src={require("../assets/images/Twitter.png")}  className="img-fluid"/></a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
    }
}

export default FooterLog;