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
        const secondColumnStart = Math.floor(this.context.all_users.length /4 );
        console.log("yes"+ this.context.all_users);
    
   
            return  (
             
      <div className="row">
      <div className="col-md-4">
          {this.context.all_users.map}
      </div>
      // allUsers=this.context.all_users.map(({id,PostTitle,Categoryid,CategoryName,subCategoryid,subCategoryName,PostDetails,PostUrl,PostImage,Is_Active}) => {
        //    return (
        //     {CategoryName}
           
 //        allUsers = this.context.all_users.map(({id,PostTitle,Categoryid,CategoryName,subCategoryid,subCategoryName,PostDetails,PostUrl,PostImage,Is_Active}) => {
//         var i = secondColumnStart;
//             return  (
//                 // <tr key={id}>
                 
//                 //   <td>{AdminPassword}</td>
//                 //   <td>{AdminUserName}</td>
//                 //     <td>{AdminEmailId}</td>
//                 //     <td>
//                 //         <button className="btn btn-dark mr-2" onClick={() => this.context.editMode(id)}>Edit</button>
//                 //         <button onClick={() => this.context.handleDelete(id)} className="btn btn-danger">Delete</button>
//                 //     </td>
//                 // </tr>
      
//          <div class="row row-cols-1 row-cols-md-2 g-4">
//          <div class="col">
//            <div class="card">
//              <img
//                src={PostUrl}
//                class="card-img-top"
//                alt="..."
//              />
//              <div class="card-body">
//                <h5 class="card-title">{PostTitle}</h5>
//                <p class="card-text">
//                {CategoryName}{PostImage}
//                </p>
//              </div>
//            </div>
//          </div></div>
       
    
// //       <div className="row">
// //       <div className="col-md-6">
// //           {this.context.all_users.slice(0,secondColumnStart).map(item => 
// //             <img
// //                      src={item.PostUrl}
// //                       class="card-img-top"
// //                       alt="..."
// //                     />
// //             )}
// //       </div>
// //       <div className="col-md-6">
// //           {this.context.all_users.slice(secondColumnStart).map(item =>   <img
// //                      src={item.PostUrl}
// //                       class="card-img-top"
// //                       alt="..."
// //                     />)}                
// //       </div>
// //   </div>
    //    );
    //      });
      
      {/* <div className="col-md-4">
          {this.context.all_users.slice(secondColumnStart+1).map(item =><img
                     src={item.PostUrl}
                      class="card-img-top"
                      alt="..."
                    />)}                
      </div>
      <div className="col-md-4">
          {this.context.all_users.slice(secondColumnStart+2).map(item =><img
                     src={item.PostUrl}
                      class="card-img-top"
                      alt="..."
                    />)}                
      </div> */}
  </div>
      );
      

      
      
        
    }

}
export default GetDataCards;