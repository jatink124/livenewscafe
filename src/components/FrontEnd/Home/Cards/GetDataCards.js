import React, {Component} from 'react';
import {AppContext} from '../../../../Context';
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
        let mainData;
     
      
       allUsers = this.context.all_users.map(({id,PostTitle,Categoryid,CategoryName,subCategoryid,subCategoryName,PostDetails,PostUrl,PostImage,Is_Active}) => {
   
            return  (
                // <tr key={id}>
                 
                //   <td>{AdminPassword}</td>
                //   <td>{AdminUserName}</td>
                //     <td>{AdminEmailId}</td>
                //     <td>
                //         <button className="btn btn-dark mr-2" onClick={() => this.context.editMode(id)}>Edit</button>
                //         <button onClick={() => this.context.handleDelete(id)} className="btn btn-danger">Delete</button>
                //     </td>
                // </tr>
         <div class="row row-cols-1 row-cols-md-2 g-4">
         <div class="col">
           <div class="card">
             <img
               src={PostUrl}
               class="card-img-top"
               alt="..."
             />
             <div class="card-body">
               <h5 class="card-title">{PostTitle}</h5>
               <p class="card-text">
               {CategoryName}{PostImage}
               </p>
             </div>
           </div>
         </div>
         <div class="col">
           <div class="card">
             <img
               src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
               class="card-img-top"
               alt="..."
             />
             <div class="card-body">
               <h5 class="card-title">{CategoryName}</h5>
               <p class="card-text">
                 This is a longer card with supporting text below as a natural lead-in to
                 additional content. This content is a little bit longer.
               </p>
             </div>
           </div>
         </div>
         <div class="col">
           <div class="card">
             <img
               src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
               class="card-img-top"
               alt="..."
             />
             <div class="card-body">
               <h5 class="card-title"></h5>
               <p class="card-text">
                 This is a longer card with supporting text below as a natural lead-in to
                 additional content.
               </p>
             </div>
           </div>
         </div>
         <div class="col">
           <div class="card">
             <img
               src="https://mdbootstrap.com/img/new/standard/city/044.jpg"
               class="card-img-top"
               alt="..."
             />
             <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">
                 This is a longer card with supporting text below as a natural lead-in to
                 additional content. This content is a little bit longer.
               </p>
             </div>
           </div>
         </div>
       </div>
         );
        });

        if(this.context.all_users.length > 0){
            mainData = (
                <table className="table table-striped table-bordered">
                   
                    <tbody>
                        {allUsers}
                    </tbody>
                </table>
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