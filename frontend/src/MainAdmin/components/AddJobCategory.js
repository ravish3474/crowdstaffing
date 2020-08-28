import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../css/Admin.css';
import axios from 'axios';
import Sidebar from '../../user-panel/shared/Sidebar';
import Header from '../../user-panel/shared/Header';
import {Link} from 'react-router-dom';
import Jobseeker_detail from './Job_Seeker_Detail_Component';
import Axios from 'axios';

class AddJobCategory extends Component {
    constructor(props){
        super(props);
        this.state={
            image: null,
            image_file:'',
            categories:[],
            new_cat_name:''
        }
        this.onImageChange = this.onImageChange.bind(this);
        this.onChangeNewCategory = this.onChangeNewCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount(){
        axios.get('/category')
        .then(response =>{
            console.log(response);
            if(response.data.data.length >0){
                this.setState({
                    categories:response.data.data
                }) 
            }
            console.log(this.state.categories);
        })
        .catch(error => console.log("Error Found While Fetching All Category : "+error));
    }
    onChangeNewCategory(e){
        this.setState({
            new_cat_name:e.target.value
        })
    }
    onImageChange = event => {
        this.setState({
            image_file:event.target.files[0]
        })
        // if (event.target.files && event.target.files[0]) {
        //   let img = event.target.files[0];
          
        //   this.setState({
        //     image: URL.createObjectURL(img),
        //     image_file:img
        //   });
        // }
      };
    
    onSubmit(e){
        e.preventDefault();
        // const category={
        //     category_name:this.state.new_cat_name,
        //     filename:this.state.image_file
        // }
        // const data = new FormData() 
        // data.append('file', this.state.selectedFile)
        // let file = this.state.image_file;
        let formdata = new FormData();
        formdata.append('category_name',this.state.new_cat_name);
        formdata.append('image',this.state.image_file);
        // console.log(formdata);
        axios({
            url:'/category/add',
            method:"post",
            data:formdata

        }).then(response =>{
            console.log(response);
            if(response.data.code==1){
                alert("Category Added");
                // location.reload();
                // this.setState({

                // })
            }
        })
        .catch(error => console.log("Error Found While Fetching All Jobs: "+error));
        
        // console.log(category);
        // console.log(" Category Name: "+this.state.new_cat_name);
    }
   
    render() {
        
        return <section>
                    <div className="wrapper">
                
                        <Sidebar/>

                        <div id="content">

                            <Header/>

                            <h5>Add Job Category</h5>
                               
                            <div className="mt-1 py-2 px-5 colBlk bg-white bordRad_2">
                                
                            {/* <div className="text-right">
                                <button className="btn py-1 btn-success rounded">Add New Category</button>
                                <button className="btn py-1 btn-default border rounded ml-3">Delete Any Category</button>
                            </div> */}
                                <form className="mt-4" onSubmit={this.onSubmit} enctype="mulitpart/form-data" method="post">
                                <div className=" form-group">
                                    <label>Category Image</label>
                                    <img src={this.state.image} width='150px'/>
                                    <input type="file" name="image_file" onChange={this.onImageChange} />
                                </div>
                                
                                    <div className=" form-group">
                                    
                                        <label>Category Name</label>
                                        <input type="text" name=""  value={this.state.new_cat_name} onChange={this.onChangeNewCategory} className="form-control" placeholder="Example: Web Developer" />
                                    </div>    
                                    {/* <div className=" form-group">
                                        <label>Category Field</label>
                                        <input type="text" name="" placeholder="Information Technology" className="form-control"/>
                                    </div>   */}

                                    <div className="">
                                        <button className="btn btn-info">Add </button>    
                                        {/* <button className="ml-3 border btn btn-default" type="button">Cancel</button> */}
                                    </div>  
                                </form>
                            </div>
                            <div className="mt-1 p-2 colBlk bg-white ">
                                    <table className="table  table-bordered">
                                        <thead>
                                            <th>S.No</th>
                                            <th>Category Name</th>
                                            <th>Category Image</th>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.categories.map(function(cat,index){
                                                    return <tr>
                                                                <td>{index+1}</td>
                                                                <td>{cat.categoryName}</td>
                                                                <td><img src={require('../../../../backend/categoryPicture/'+cat.categoryImage)} width="50px" height="50px" /></td>
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

export default AddJobCategory;