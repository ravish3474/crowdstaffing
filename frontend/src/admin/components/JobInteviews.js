import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class JobInteviews extends Component {
    // constructor(props){

    // }
    render() {
     
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

        <Header/>

            <h4>Job Inteviews</h4>
           
        
            <div className="bg-white mt-4 p-4">
                
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>SNo.</th>
                                <th>Seeker Name.</th>
                                <th>Job Title</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Rahul</td>
                                <td>web developer</td>
                                <td>01/12/2019</td>
                                <td>01:05 PM</td>
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

export default JobInteviews;