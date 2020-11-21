import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class CompanyFooter extends Component {
    render() {
    return (
    
        <section className=" ">
             <hr/>
          <div className="row mx-0">
              <div className="col-md-6">
                  <div className="">
                      <ul className="footLinks p-0 mt-3">
                          <li>
                              <Link to="">Help Center</Link>
                          </li>
                          <li>
                              <Link to="">Fraud Alert</Link>
                          </li>
                          <li>
                              <Link to="">Terms & Conditions</Link>
                          </li>
                         
                      </ul>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="text_right">
                      <ul className="footLinks p-0 d-block mb-0 colBrown">
                          <li>
                              <Link to=""><span><i class="fas fa-phone-alt"></i></span> <span className="ml-2">080-47105555</span></Link>
                          </li>
                          <li>
                              <Link to=""><span><i class="far fa-envelope"></i></span> <span className="ml-2">recruiterservices@shine.com</span></Link>
                          </li>
                          
                      </ul>
                      <span className="fnt_14 mr-4 ml-3">© 2020 </span>
                  </div>
              </div>
          </div>
        </section>
           
    );
    }
}

export default CompanyFooter;