import axios from 'axios';
import UserContext from '../contexts/UserContext';
import React, { useEffect, useState } from 'react';

export const UserProvider = (props) => {

  const [users, setUsers] = useState([]);
  const baseUrl = 'http://localhost:3000/api/users';

  useEffect(() => {
    async function fetchData() {
      fetchData();
    }
  })

  function createUser(userName, password, firstName, lastName) {
    let user = { userName, password, firstName, lastName };
    return axios.post(baseUrl, user)
      .then(response => {
        return new Promise(resolve => resolve
          (response.data));
      })
  };


  function signInUser(userName, password) {
    let user = { userName, password };
    return axios.post(`${baseUrl}/login`, user)
      .then(response => {
        localStorage.setItem('myPostsToken', response.data.token)
        return new Promise(resolve => resolve(response.data));
      }
      );
  }

  return (
    <UserContext.Provider value={{
      createUser,
      signInUser
    }}>
      {props.children}
    </UserContext.Provider>
  )


}