import React from 'react';
import AddUser from './Components/User/AddUser'
import UserList from './Components/User/UserList'
import { useState } from 'react'

function App() {

  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsers) => {
      return [...prevUsers, {name: uName, age : uAge, key : Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList} />
    </div>
  );
}

export default App;
