import React from 'react';
import styled from 'styled-components';
import {Provider} from './Context';
import AllUsers from './components/GetUsers';
import AddUser from './components/AddUser';
import Actions from './Actions/Actions';
import UploadFile from './UploadFile'
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
// export const Home = (props) => (
//   <GridWrapper>
//     <p>This is a paragraph and I am writing on the home page</p>
//     <p>This is another paragraph, hi hey hello whatsup yo</p>
//   </GridWrapper>
// )

export class Home extends Actions {
  render(){
    const contextValue = {
        all_users:this.state.users,
        get_users:this.fetchUsers,
        editMode:this.editMode,
        cancelEdit:this.cancelEdit,
        handleUpdate:this.handleUpdate,
        handleDelete:this.handleDelete,
        insertUser:this.insertUser
    }
    return (
      <Provider value={contextValue}>
        <div className="container-fluid bg-light">
              <div className="container p-5">
                  <div className="card shadow-sm">
                      <h1 className="card-header text-center text-uppercase text-muted">Add Admin Details</h1>
                      <div className="card-body">
                      <UploadFile/>
                      </div>
                  </div>
      
              </div>
              </div>
      </Provider>
    );
  }
}

// export default Home;