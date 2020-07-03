import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';

class Search extends Component {
    render() {
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Search</h5>
                                
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                <form className="">
                                    <div className="shadow form-group">
                                        <input type="text" className="form-control" name="" placeholder="Job Title, skill or company" />
                                    </div>
                                    <div className="shadow form-group">
                                        <input type="text" className="form-control" name="" placeholder="Town, city or postcode" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default Search;