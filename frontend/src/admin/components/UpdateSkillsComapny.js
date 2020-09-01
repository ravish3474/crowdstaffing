import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import Axios from 'axios';


class UpdateSkillsComapny extends Component {
    constructor(props){
        super(props);
        this.state={
            skill_name:'',
            skills:[],
            dlt_skill_id:0
        }
        this.sayHello = this.sayHello.bind(this);
        this.fetchSkill= this.fetchSkill.bind(this);
        this.fetchSkill();
        this.onChangeSkillName= this.onChangeSkillName.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.onClickdeleteSkill= this.onClickdeleteSkill.bind(this);
    }
    sayHello(){
        alert("ddd");
    }
    fetchSkill(){
        Axios.get('/skill/')
                .then(resp=>{
                    if(resp.data.code==1){
                        this.setState({
                            skills:resp.data.skill.map(skills=>skills)
                        });
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
    }
    onClickdeleteSkill(){
        alert("skill_id");
        // if(this.state.dlt_skill_id!=0){

        // }
        // Axios.get('/skill/')
        //         .then(resp=>{
        //             if(resp.data.code==1){
        //                 this.setState({
        //                     skills:resp.data.skill.map(skills=>skills)
        //                 });
        //             }
        //         })
        //         .catch(err=>{
        //             console.log(err)
        //         })
    }
    onChangeSkillName(e){
        this.setState({
            skill_name:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const skill={
            skill_name:this.state.skill_name
        }
        console.log(skill);
        Axios.post('/skill/add',skill)
            .then(resp=>{
                    if(resp.data.code==1){
                        alert("Added Successfully");
                        this.fetchSkill();
                    }else{
                        alert("Failed To Add");
                    }
            })
            .catch(err =>{

            })
        
    }
    render() {
        return <section>
                <div class="wrapper">
                
                    <Sidebar/>

                    <div id="content">

                        <Header/>

                        {/* <h4>/</h4> */}
                        <div className="HirD bckloGry ">
          
                            <div className="p-4 bg-white">
                                <div className="mt-1 p-1 colBlk b">
                                    
                                    <div className="text-right">
                                        {/* <button className="btn py-1 btn-success rounded">Update Skills</button>
                                        <button className="btn py-1 btn-default border rounded ml-3">Delete Skills</button> */}
                                    </div>
                                    <form className="mt-4" onSubmit={this.onSubmit}>
                                        <div className=" form-group">
                                            <label>Skill Name</label>
                                            <div className="d-flex">
                                                <input type="text" name="" value={this.state.skill_name} onChange={this.onChangeSkillName} className="form-control" placeholder="Bootstrap" />
                                                {/* <button className="btn btn-danger">Add Skill</button>     */}
                                            </div>
                                        </div>    
                                    

                                        <div className="">
                                            <button className="btn btn-info">Add & Submit</button>    
                                            {/* <button className="ml-3 border btn btn-default" type="button">Cancel</button> */}
                                        </div>  
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="HirD bckloGry ">
          
                            <div className="p-4 bg-white">
                                <div className="mt-1 p-1 colBlk b">
                                    
                                    <table className="table">
                                        <thead>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.skills.map(function(skill, index){
                                                    return <tr>
                                                            <td>{index+1}</td>
                                                            <td>{skill.skill_name}</td>
                                                            <td><button className="btn btn-danger" onClick={()=>{
                                                                console.log("Deleteing...."+ skill._id);
                                                                Axios.get('/skill/deleteSkill/'+skill._id)
                                                                        .then(resp=>{
                                                                            if(resp.data.code==1){
                                                                               alert("Deleted Successfully..");
                                                                            }else{
                                                                                alert("Failed to Delete");
                                                                            }
                                                                        })
                                                                        .catch(err=>{
                                                                            console.log(err)
                                                                        })
                                                                }}><i className="fa fa-trash"></i></button>
                                                                
                                                            </td>
                                                        </tr>
                                                })
                                            }
                                            
                                        </tbody>
                                    </table>
                                    
                                </div>

                            </div>
                        </div>
        
            
                    </div>
            </div>

  
 
            </section>

   
    } 
   
}

export default UpdateSkillsComapny;