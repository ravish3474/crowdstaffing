import React, { Component } from 'react';
class JobCategories extends Component{
    render(){
        return <div className="col-md-3 mt-3">
                    <div className="p-3 text-center Fnte">
                        <div className="">
                        <img src={require('../../../backend/categoryPicture/'+this.props.category.categoryImage)} className="img-fluid"/>
                        </div>
                        {/* <h5><strong>{this.props.category_name}  </strong></h5> */}
                        <h5><strong>{this.props.category.categoryName}  </strong></h5>
                        {/* <span >301 Open Position</span> */}
                    </div>
                </div>
    }
}
export default JobCategories;