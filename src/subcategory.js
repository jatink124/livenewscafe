import React from 'react';
import styled from 'styled-components';
import {Provider} from './Context';
import AllUsers from './components/subcategory/subcatGetUsers';
import AddUser from './components/subcategory/subcatAddUser';
import Actions from './Actions/Actions-subCategory';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
// export const About = () => (
//   <GridWrapper>
//     <h2>About Page</h2>
//     <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
//     <p>I am a kitty cat, sup, feed me, no cares in the world</p>
//     <p>Meow meow, I tell my human purr for no reason but to chase after</p>
//   </GridWrapper>
// )

export class SubCategory extends Actions {
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
                          <div className="row">
                              <div className="col-md-12">
                                  <AddUser/>
                              </div></div>
                              <div className="row">
                              <div className="col-md-12">
                                <AllUsers/>
                              </div>
                          </div>
                      </div>
                  </div>
      
              </div>
              </div>
      </Provider>
    );
  }
}