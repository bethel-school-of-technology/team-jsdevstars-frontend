import axios from 'axios';
import UserContext from '../contexts/UserContext';
import React, { useEffect } from 'react';

export const UserProvider = (props) => {


  const baseUrl = 'http://localhost:3000/api/users';

  useEffect(() => {
    async function fetchData() {
      // fetchData();
    }
  })

  function createUser(firstName, lastName, userName, email, password) {
    let user = { firstName, lastName, userName, email, password };
    return axios.post(baseUrl, user)
      .then(response => {
        return new Promise(resolve => resolve(response.data));
      })
  };


  function loginUser(email, password) {
    let user = { email, password };

    return axios.post(`${baseUrl}/login`, user)
      .then(response => {
        localStorage.setItem('myPostsToken', response.data.token)
        return new Promise(resolve => resolve(response.data))
      })
  }

  return (
    <UserContext.Provider value={{
      createUser,
      loginUser
    }}>
      {props.children}
    </UserContext.Provider>
  )


}