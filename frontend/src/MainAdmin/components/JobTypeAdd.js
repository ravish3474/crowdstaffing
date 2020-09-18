import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import axios from 'axios';
import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';


class JobTypeAdd extends Component {
    constructor(props){
        super(props);
        this.state={
            // image: null,
            // image_file:'',
            type:[],
            type_name:''
        }
        // this.onImageChange = this.onImageChange.bind(this);
        this.onChangeNewType = this.onChangeNewType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        axios.get('/jobType')
        .then(response =>{
            console.log(response);
            if(response.data.length >0){
                this.setState({
                    type:response.data.map(type_ => type_)
                }) 
            }
            // console.log(this.state.categories);
        })
        .catch(error => console.log("Error Found While Fetching All Category : "+error));
    }
    onChangeNewType(e){
        this.setState({
            type_name:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const typeDeta={
            type_name:this.state.type_name
        }
        axios.post("/jobType/add",typeDeta).then(response =>{
            // console.log(response);
            // if(response.data.code==1){
                alert("Type Added");
                // location.reload();
                // this.setState({

                // })
            // }
        })
        .catch(error => console.log("Error Found While Fetching All Jobs: "+error));
       
        
    }
   
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Add Job Type</h5>
                               
                            <div className="mt-3 p-5 colBlk bg-white bordRad_2">
                                
                            {/* <div className="text-right">
                                <button className="btn py-1 btn-success rounded">Update Job Type</button>
                                <button className="btn py-1 btn-default border rounded ml-3">Delete Job Type</button>
                            </div> */}
                                <form className="mt-4" onSubmit={this.onSubmit}>
                                    <div className=" form-group">
                                        <label>Type Job Name</label>
                                        <div className="">
                                            <input type="text" name="" className="form-control" value={this.state.type_name} onChange={this.onChangeNewType} placeholder="Web Developer" />
                                             
                                        </div>
                                    </div>    
                                   

                                    <div className="">
                                        <button className="btn btn-info">Save & Submit</button>    
                                        {/* <button className="ml-3 border btn btn-default" type="button">Cancel</button> */}
                                    </div>  
                                </form>
                            </div>
                            <div className="">
                                <table className="table  table-bordered">
                                    <thead>
                                        <th>S.No</th>
                                        <th>Type Name</th>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.type.map(function(cat,index){
                                                return <tr>
                                                            <td>{index+1}</td>
                                                            <td>{cat.type_name}</td>
                                                            
                                                        </tr>
                                            })
                                        }
                                        {/* <tr>
                                            <td>1</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            
            </section>  
    } 
   
}

export default JobTypeAdd;