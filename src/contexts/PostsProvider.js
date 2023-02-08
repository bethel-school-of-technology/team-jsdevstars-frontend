// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import PostsContext from './PostsContext';
// import PostsList from '../components/PostsList';

// export const PostsProvider = (props) => {

//   const [posts, setPosts] = useState([]);
//   const baseUrl = "http://localhost:3000/api/posts/";

//   useEffect(() => {
//     async function fetchData() {
//       await getAllPosts();
//     }
//     fetchData();
//   }, []);

//   function getAllPosts() {
//     return axios.get(baseUrl).then(response => setPosts(response.data))
//   };

//   function getPosts(id) {
//     return axios.get(baseUrl + id).then(response => setPosts(response.data));
//   }

//   function addPosts(posts) {
//     let token = localStorage.getItem('myPostsToken')
//     console.log(token)
//     let headers = {
//       Authorization: 'Bearer ' + token
//     };
//     return axios.post(baseUrl, posts, { headers })
//       .then(response => {
//         getAllPosts();
//         return new Promise(resolve => resolve(response.data));
//       }
//       );
//   }

//   function editPosts(posts, id) {
//     let token = localStorage.getItem('myPostsToken')
//     let headers = {
//       Authorization: 'Bearer ' + token
//     };
//     return axios.put(baseUrl + id, posts, { headers })
//       .then(response => {
//         getAllPosts();
//         return new Promise(resolve => resolve(response.data));
//       }
//       );
//   }

//   function deletePosts(id) {
//     let token = localStorage.getItem('myPostsToken')
//     let headers = {
//       Authorization: 'Bearer ' + token
//     };
//     return axios.delete(baseUrl + id, { headers })
//       .then(response => {
//         getAllPosts();
//         return new Promise(resolve => resolve(response.data));
//       })
//   };

//   return (
//     <PostsContext.Provider value={{
//       posts,
//       getPosts,
//       addPosts,
//       editPosts,
//       deletePosts,
//       PostsList
//     }}>
//       {props.children}
//     </PostsContext.Provider>
//   )
// };