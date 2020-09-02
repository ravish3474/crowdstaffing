import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Sidebar from '../shared/Sidebar';
import Header from '../shared/Header';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

class UserChangePassword extends Component {
    
    constructor(props){
        super(props);
        this.state={
            user_id:0,
            real_old_pass:'',
            old_pass:'',
            new_pass:'',
            confirm_pass:''
        }
        // this.onSubmit = this.onSubmit.bind(this);
        const logged_user_data=jwt_decode(localStorage.getItem('user_token'));
        axios.get('/jobSeeker/getMyEncyDetails/'+logged_user_data._id)
                .then(response =>{
                    // console.log(response.data.data);
                    // console.log("code:  "+response.data.code);
                    if(response.data.code==1){
                        // const fName=response.data.data.full_name;
                        const userData=jwt_decode(response.data.data);
                        console.log(jwt_decode(response.data.data));
                        this.setState({
                            user_id:logged_user_data._id,
                            real_old_pass:userData.data.pass_code
                        })
                        // alert(this.state.full_name);
                    }
                   
                })
                .catch(err => console.log("Error found: "+err));
                this.onSubmit = this.onSubmit.bind(this);
                this.onChangeNewpass = this.onChangeNewpass.bind(this);
                this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this);
    }
    onChnageCheckPasswordMatch(e){
        this.setState({
            old_pass:e.target.value
        })
    }
    onChangeNewpass(e){
        this.setState({
            new_pass:e.target.value
        })
    }
    onChangeConfirmPass(e){
        this.setState({
            confirm_pass:e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.new_pass!=this.state.confirm_pass){
            alert("Password Mismatch");
        }else{
            if(this.state.user_id!=0){
                const pass_code={
                    pass_code:this.state.new_pass
                }
                axios.post('/jobseeker/updatePassword/'+this.state.user_id, pass_code)
                    .then(resp=>{
                        if(resp.data.code==1){
                            alert("Password Updated");
                        }else{
                            alert("Failed To update");
                        }
                    })
            }
            
        }
    }

    render() {
        return <section>
                <div class="wrapper">
       
        <Sidebar/>

        <div id="content">

            <Header/>

            <h5>Change Password</h5>
           
           <div className=" mt-4 bckloGry ">
            
               <div className="mt-4 w-50 mr-auto">
                    <form className="UJUFom" onSubmit={this.onSubmit}>
                        {/* <div className="form-group">  
                            <label>Current Password</label>
                            <input type="text"  value={this.state.real_old_pass} className="form-control" placeholder="Current Password" readonly/>
                        </div> */}
                        <div className="form-group">  
                            <label>New Password</label>
                            <input type="text" value={this.state.new_pass} onChange={this.onChangeNewpass} className="form-control" placeholder="New Password"/>
                        </div>
                        <div className="form-group">  
                            <label>Confirm Password</label>
                            <input type="text" value={this.state.confirm_pass} onChange={this.onChangeConfirmPass} className="form-control" placeholder="Confirm Password"/>
                        </div>
                        
                        <button className="ml-2 btn btn-success py-2 px-4">Change Password</button>
                       
                    </form>
               </div>
           </div>
        
        </div>
    </div>

  
 
            </section>

   
    } 
   
}

export default UserChangePassword;