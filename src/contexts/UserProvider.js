import axios from 'axios';
import UserContext from '../contexts/UserContext';
import React, { useEffect, useState } from 'react';

export const UserProvider = (props) => {

  const [user, setUser] = useState([]);
  const baseUrl = 'http://localhost:3000/api/users';

  useEffect(() => {
    async function fetchData() {
      // await refreshUsers();
    }
    fetchData();
  }, []);

  // function refreshUsers() {
  //   return axios.get(baseUrl)
  //     .then(response => {
  //       setUser(response.data)
  //     });
  // }


  function createUser(firstName, lastName, userName, email, password) {
    let user = { firstName, lastName, userName, email, password };
    return axios.post(baseUrl, user)
      .then(response => {
        return new Promise(resolve => resolve
          (response.data));
      })
  };


  async function loginUser(email, password) {
    let user = { email, password };

    return axios.post(`${baseUrl}/login`, user)
      .then(response => {
        localStorage.setItem
          ('myUserToken', response.data.token);
        // localStorage.setItem
        //   ('user', response.data.user);
        return new Promise(resolve =>
          resolve(response.data))
      })
  }

  return (
    <UserContext.Provider value={{
      // refreshUsers,
      createUser,
      loginUser
    }}>
      {props.children}
    </UserContext.Provider>
  )

};