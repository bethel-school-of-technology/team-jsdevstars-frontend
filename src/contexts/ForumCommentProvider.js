import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ForumCommentContext from "./ForumCommentContext"

export const ForumCommentProvider = (props) => {

    const [ forumComments, setComments ] = useState([]);
    const baseUrl = "http://localhost:3000/api/forum/";

    useEffect(() => {
        async function fetchData() {
            await refreshComments();
        }
        fetchData();
    }, []);


    function refreshComments() {
        return axios.get(baseUrl)
        .then(response => {
            setComments(response.data)
        });
    }


    function getForumComment(id) {
        return axios.get(baseUrl + id).then(response => {
            console.log(response.data)
            return new Promise(resolve => resolve(response.data))
        })
    } 


    function addTopicComment(forumComments) {        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        return axios.post(baseUrl, forumComments, { headers: myHeaders })
            .then(response => {
                refreshComments();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

   
    function editTopicComment(forumComments) {
        let token = localStorage.getItem('myUserToken');  
        let myHeaders = { Authorization: 'Bearer ' + token };
       

            return axios.put(baseUrl + forumComments.forumCommentId, forumComments, { headers: myHeaders })
            .then(response => {
                refreshComments();
                return new Promise(resolve => resolve(response.data));
            }
        );
        
    }

    // function filterForum(param) {
    //     return axios.get(`http://localhost:3000/api/forum/?q=${param}`).then(response => {
    //         return new Promise(resolve => resolve(response.data))
    //     })
    // }
 
    function deleteTopicComment(forumCommentId) {
        let token = localStorage.getItem('myUserToken');  
        let myHeaders = { Authorization: 'Bearer ' + token };


        return axios.delete(baseUrl + forumCommentId, { headers: myHeaders }).then(response => {
            refreshComments();
            return new Promise(resolve => resolve(response.data))
        })
    }

    return (
        <ForumCommentContext.Provider 
        value={{
            forumComments,
            refreshComments,
            getForumComment,
            addTopicComment,
            editTopicComment, 
            // filterForum,
            deleteTopicComment
        }}>
            { props.children }
        </ForumCommentContext.Provider>
    )
};