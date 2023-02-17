import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ForumContext from "./ForumContext"

export const ForumProvider = (props) => {

    const [forumTopics, setforums] = useState([]);
    const [selectedForum, setSelectedForum] = useState(null);
    const [selectedForumComments, setSelectedForumComments] = useState([]);
    const [heading, setHeading] = useState("");
    const [body, setBody] = useState("");
    const [userInfo, setUserInfo] = useState([])
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
                setUserInfo(response.data.user)
            });
    }

    function getForumTopic(forumId) {
        return axios.get(baseUrl + forumId).then(response => {
            setSelectedForum(response.data.forum);
            setHeading(response.data.forum.topicHeading);
            setBody(response.data.forum.topicBody);
            setSelectedForumComments([...response.data.comments]);
            setUserInfo(response.data.user)
        })
    }

    function addForumTopic(newForumHeading, newForumBody) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        return axios.post(baseUrl, { topicHeading: newForumHeading, topicBody: newForumBody }, { headers: myHeaders })
            .then(response => {
                refreshForums();
                return new Promise(resolve => resolve(response.data));
            }
            ).catch(error => {
                //console.log(response)
                alert(error.response.data);
            });
    }

    function editForum(forumId, heading, body) {
        let token = localStorage.getItem('myUserToken');
        let myHeaders = { Authorization: 'Bearer ' + token };

        return axios.put(baseUrl + forumId, { topicHeading: heading, topicBody: body }, { headers: myHeaders })
            .then(response => {
                refreshForums();
                setSelectedForum({ ...selectedForum, ...response.data })
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function editForumComment(forumId, commentId, comment) {
        let token = localStorage.getItem('myUserToken');
        let myHeaders = { Authorization: 'Bearer ' + token };

        return axios.put(baseUrl + forumId + "/" + commentId, { comment: comment }, { headers: myHeaders })
            .then(response => {
                getForumTopic(forumId)
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function filterForum(param) {
        return axios.get(`http://localhost:3000/api/forum/?q=${param}`).then(response => {
            return new Promise(resolve => resolve(response.data))
        })
    }

    function deleteForumTopic(forumId) {
        let token = localStorage.getItem('myUserToken');
        let myHeaders = { Authorization: 'Bearer ' + token };

        return axios.delete(baseUrl + forumId, { headers: myHeaders }).then(response => {
            refreshForums();
            setSelectedForum(null);
            setSelectedForumComments([]);
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
                editForum,
                editForumComment,
                filterForum,
                deleteForumTopic,
                selectedForum,
                selectedForumComments,
                setUserInfo,
                heading,
                body,
                setHeading,
                setBody
            }}>
            {props.children}
        </ForumContext.Provider>
    )
};