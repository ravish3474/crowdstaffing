import React, { Component } from 'react';
import CompanyHeader from './CompanyHeader';
import $ from 'jquery';


class CompanyManageEmail extends Component {
    
    render() {
    return (
    
        <section className="">
           <CompanyHeader/>
           <section className="paduj5">
                <section className="py-5">
                <div className="shadow pt-3 ">
      <div className=" container">
        <div className="row ">
          <div className="col-md-4">
            <h4 className="topHH mb-0">Manage email templates</h4>
            <small className="ml-2">(You have created 22 templates out of 50)</small>
          </div>

          <div className="col-md-8">
            <ul className="d-flex list-unstyled polo justify-content-end">
                <li className="dskTop">
                    <a href="">My email template</a>
                </li>
                <li  className="dskTop">
                    <a href=""> Email templates shared by others</a>
                </li>
                <li>
                    <button>Create a new email template</button>
                </li>
            </ul>

          </div>
        </div>
      </div>
    </div>

  
    <div className="mt-4 ">
        <div className="shadow p-3">
            <div className="text-right py-2">
          
                <button className="ntns disBtn" disabled="true" id="deltBn"><i className="far fa-trash-alt"></i> Delete</button>
            </div>
            <div className="table-responsive ">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>
                                <div className="d-flex">
                                    <div className="">
                                      <input type="checkbox" name="" className="" id="allSelct"/>
                                    </div>
                                    <div className="ml-1">
                                      Template name
                                    </div>
                                </div> 
                            </th>
                            <th>Last Used on</th>
                            <th>Last Modified on</th>
                            <th>Created On</th>
                            <th>Status</th>
                            <th>Share/Unshare</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <div className="">
                                      <input type="checkbox" name="" className="tableCH"/>
                                    </div>
                                    <div className="ml-1">
                                      <a href="" >Selenium tester/SDET</a>
                                    </div>
                                </div> 
                            </td>	
                           
                            <td>18 Sep 2020	</td>
                            <td>18 Sep 2020	</td>
                            <td>18 Sep 2020	</td>
                            <td>Accepted</td>
                            <td>
                                <a href="" >Share</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex">
                                    <div className="">
                                      <input type="checkbox" name="" className="tableCH"/>
                                    </div>
                                    <div className="ml-1">
                                      <a href="" >Selenium tester/SDET</a>
                                    </div>
                                </div> 
                            </td>	
                           
                            <td>18 Sep 2020	</td>
                            <td>18 Sep 2020	</td>
                            <td>18 Sep 2020	</td>
                            <td>Accepted</td>
                            <td>
                                <a href="" >Share</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
        </div>
    </div> 
                </section>   
            </section> 
        </section>
           
    );
    }
    componentDidMount() {
        $(document).ready(function(){
            $(".tableCH").change(function(){
                if($(this).prop("checked") == true){
                    $("#deltBn").attr('disabled','false');
                    $("#deltBn").removeClass('disBtn');
                }
                else if($(this).prop("checked") == false){
                    $("#deltBn").attr('disabled','true');
                    $("#deltBn").addClass('disBtn');
                }
                
            });
            $(document).on('change',"#allSelct",function(){
                if($(this).prop("checked") == true){
                    $(".tableCH").prop('checked', true);
                    $("#deltBn").attr('disabled','false');
                    $("#deltBn").removeClass('disBtn');
                }
                else if($(this).prop("checked") == false){
                    $(".tableCH").prop('checked', false);
                    $("#deltBn").attr('disabled','false');
                    $("#deltBn").addClass('disBtn');
                }
            })
        })

      }
}

export default CompanyManageEmail;