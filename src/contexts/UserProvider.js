import axios from 'axios';
import UserContext from '../contexts/UserContext';
import React, { useEffect, useState } from 'react';

export const UserProvider = (props) => {

  const [user, setUser] = useState([]);
  const baseUrl = 'http://localhost:3000/api/users/';

  useEffect(() => {
    async function fetchData() {
      // await refreshUsers();
      console.log(user)
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
        localStorage.setItem
          ('user', response.data.user.firstName);
        return new Promise(resolve =>
          resolve(response.data))
      })
  }

  // function getUser(userId) {
  //   return axios.get(baseUrl + userId).then(response => {
  //     // return new Promise(resolve => resolve(response.data))
  //     setUser(response.data);
  //     console.log(response.data)
  //   })
  // }

  function getForumComment(id) {
    return axios.get(baseUrl + id).then(response => {
      console.log(response.data)
      return new Promise(resolve => resolve(response.data))
    })
  }

  return (
    <UserContext.Provider value={{
      // refreshUsers,
      user,
      createUser,
      loginUser,
      // getUser
    }}>
      {props.children}
    </UserContext.Provider>
  )

};