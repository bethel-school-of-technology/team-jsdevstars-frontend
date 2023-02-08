import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticleContext from "./ArticleContext"

export const ArticleProvider = (props) => {

    const [article, setArticles] = useState([]);
    const [comment, setComment] = useState([]);
    const baseUrl = "http://localhost:3000/api/articles/";

    useEffect(() => {
        async function fetchData() {
            await refreshArticles();
        }
        fetchData();
    }, []);

    function refreshArticles() {
        return axios.get(baseUrl)
            .then(response => {
                setArticles(response.data)
            })
    }

    function getArticle(id) {
        return axios.get(baseUrl + id).then(response => {
            console.log(response.data)
            return new Promise(resolve => resolve(response.data))
        })
    }

    function addArticle(article) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myDadToken')}`
        };

        return axios.post(baseUrl, article, { headers: myHeaders })
            .then(response => {
                refreshArticles();
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function userProfile(userId) {

    }

    
    function editArticle(article) {
        let token = localStorage.getItem('myDadToken');
        let myHeaders = { Authorization: 'Bearer ' + token };


        return axios.put(baseUrl + article.articleId, article, { headers: myHeaders })
            .then(response => {
                refreshArticles();
                return new Promise(resolve => resolve(response.data));
            }
            );


    }


    function deleteArticle(articleId) {
        let token = localStorage.getItem('myDadToken');
        let myHeaders = { Authorization: 'Bearer ' + token };


        return axios.delete(baseUrl + articleId, { headers: myHeaders }).then(response => {
            refreshArticles();
            return new Promise(resolve => resolve(response.data))
        })
    }

    return (
        <ArticleContext.Provider value={{
            article,
            refreshArticles,
            getArticle,
            addArticle,
            editArticle,
            deleteArticle,
            userProfile,

        }}>
            {props.children}
        </ArticleContext.Provider>
    )
};