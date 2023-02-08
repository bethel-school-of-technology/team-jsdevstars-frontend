// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import ForumContext from "./ForumContext"

// export const ForumProvider = (props) => {

//     const [ forumTopic, setforumTopic ] = useState([]);
//     const baseUrl = "http://localhost:3000/api/forum/";

//     useEffect(() => {
//         async function fetchData() {
//             await getAllTopics();
//         }
//         fetchData();
//     }, []);


//     function getAllTopics() {
//         return axios.get(baseUrl)
//         .then(response => {
//             setforumTopic(response.data)
//         });
//     }


//     function getForumTopic(id) {
//         return axios.get(baseUrl + id).then(response => {
//             console.log(response.data)
//             return new Promise(resolve => resolve(response.data))
//         })
//     } 


//     function addForumTopic(forumTopic) {        
//         let myHeaders = {
//             Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
//         };

//         return axios.post(baseUrl, forumTopic, { headers: myHeaders })
//             .then(response => {
//                 getAllTopics();
//                 return new Promise(resolve => resolve(response.data));
//             }
//         );
//     }

   
//     function editforumTopic(forumTopic) {
//         let token = localStorage.getItem('myUserToken');  
//         let myHeaders = { Authorization: 'Bearer ' + token };
       

//             return axios.put(baseUrl + forumTopic.forumId, forumTopic, { headers: myHeaders })
//             .then(response => {
//                 getAllTopics();
//                 return new Promise(resolve => resolve(response.data));
//             }
//         );
        
//     }

 
//     function deleteForumTopic(forumId) {
//         let token = localStorage.getItem('myUserToken');  
//         let myHeaders = { Authorization: 'Bearer ' + token };


//         return axios.delete(baseUrl + forumId, { headers: myHeaders }).then(response => {
//             getAllTopics();
//             return new Promise(resolve => resolve(response.data))
//         })
//     }

//     return (
//         <ForumContext.Provider 
//         value={{
//             forumTopic,
//             getAllTopics,
//             getForumTopic,
//             addForumTopic,
//             editforumTopic, 
//             deleteForumTopic,
//         }}>
//             { props.children }
//         </ForumContext.Provider>
//     )
// };