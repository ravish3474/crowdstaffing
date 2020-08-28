import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class JobApplicationList extends Component {
    // constructor(props){

    // }
    render() {
     
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Job Application Candidate Details</h4>
           
        
            <div className="bg-white mt-4 p-4">
                
                <div className="table-responsive border">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Job Title.</th>
                                <th>Applications</th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>UI Designers</td>
                                <td>15 Applications</td>
                                <td>
                                    <Link to="/company-panel/job-applications" className="btn btn-default py-2 px-3">View Application</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default JobApplicationList;