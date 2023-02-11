import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ForumContext from "./ForumContext"
import { createContext } from "react";

// export const ForumContext = createContext();

export const ForumProvider = (props) => {

    const [ forumTopics, setforums ] = useState([]);
    const baseUrl = "http://localhost:3000/api/forum/";

    useEffect(() => {
        async function fetchData() {
            await refreshForums();
        }
        fetchData();
    }, []);


    function refreshForums() {
        return axios.get(baseUrl)
        .then(response => {
            setforums(response.data)
        });
    }


    function getForumTopic(id) {
        return axios.get(baseUrl + id).then(response => {
            console.log(response.data)
            return new Promise(resolve => resolve(response.data))
        })
    } 


    function addForumTopic(forumTopics) {        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        return axios.post(baseUrl, forumTopics, { headers: myHeaders })
            .then(response => {
                refreshForums();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

   
    function editforumTopic(forumTopic) {
        let token = localStorage.getItem('myUserToken');  
        let myHeaders = { Authorization: 'Bearer ' + token };
       

            return axios.put(baseUrl + forumTopics.forumId, forumTopics, { headers: myHeaders })
            .then(response => {
                refreshForums();
                return new Promise(resolve => resolve(response.data));
            }
        );
        
    }

 
    function deleteForumTopic(forumId) {
        let token = localStorage.getItem('myUserToken');  
        let myHeaders = { Authorization: 'Bearer ' + token };


        return axios.delete(baseUrl + forumId, { headers: myHeaders }).then(response => {
            refreshForums();
            return new Promise(resolve => resolve(response.data))
        })
    }

    return (
        <ForumContext.Provider 
        value={{
            forumTopics,
            refreshForums,
            getForumTopic,
            addForumTopic,
            editforumTopic, 
            deleteForumTopic,
        }}>
            { props.children }
        </ForumContext.Provider>
    )
};