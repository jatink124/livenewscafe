import React, {Component} from 'react';

import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from '../../../../Context';
import RightCards from './RightCards';
class GetDataCards extends Component{
    static contextType = AppContext;

    componentDidMount(){
        this.context.get_users();
    
    }

    handleUpdate = (id) => {
        this.context.handleUpdate(id,this.username.value,this.adminpwd.value,this.email.value);
    }

    render(){
        let allUsers;
        let allUserss;
        let allUsersright;
        let mainData;
        const secondColumnStart = Math.floor(this.context.all_users.length / 2);
        allUsers=this.context.all_users.filter(person=>person.id%2==0).map(({id,PostTitle,Categoryid,CategoryName,subCategoryid,subCategoryName,PostDetails,PostUrl,PostImage,Is_Active}) => {
            return (
               
           <div class="card">
             <img
               src={PostUrl}
               class="card-img-top"
               alt="..."
             />
             <div class="card-body">
               <h5 class="card-title">{PostTitle}</h5>
               <p class="card-text">
               {CategoryName}
               </p>
             </div>
            </div>
         
            
 );
          });
          allUserss=this.context.all_users.filter(person=>person.id%2!=0).map(({id,PostTitle,Categoryid,CategoryName,subCategoryid,subCategoryName,PostDetails,PostUrl,PostImage,Is_Active}) => {
            return (
             
                  <div class="card">
                    <img
                      src={PostUrl}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">{PostTitle}</h5>
                      <p class="card-text">
                      {CategoryName}
                      </p>
                    </div>
                   </div>
                
            
 );
}); 

 allUsersright=this.context.all_users.filter(person=>person.id%2==0).map(({id,PostTitle,Categoryid,CategoryName,subCategoryid,subCategoryName,PostDetails,PostUrl,PostImage,Is_Active}) => {
            return (
<RightCards/>
    );
          });
      if(this.context.all_users.length > 0){
            mainData = (
               <div className="container-fluid">
                   <div className="row">
                       <div className="col-md-4">
                       {allUsers}
                       </div>
                  <div className="col-md-4">
                  {allUserss}
                  </div>
                  <div className="col-md-4">
                       {allUsersright}
                       </div>
                   </div>
               </div>
            );
        }
        else{
            mainData = (
                <div className="alert alert-light" role="alert">
                    <h4 className="alert-heading">No User Found!</h4>
                    <hr/>
                    <p>Please Insert Some Users.</p>
                </div>
            );
        }
        return(
            <>
            {mainData}
            </>
        );
    }

}

export default GetDataCards;