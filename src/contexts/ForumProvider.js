import axios from "axios";
import { useEffect, useState } from "react";
import ForumContext from "./ForumContext"

export const ForumProvider = (props) => {

    const [ tweet, setTweet ] = useState([]);
    const baseUrl = "http://localhost:3000/api/tweets/";

    useEffect(() => {
        async function fetchData() {
            await getAllTweets();
        }
        fetchData();
    }, []);

    // working
    function getAllTweets() {
        return axios.get(baseUrl).then(response => setTweet(response.data));
    }

    // not used
    function getTweet(id) {
        return axios.get(baseUrl + id).then(response => {
            console.log(response.data)
            return new Promise(resolve => resolve(response.data))
        })
    } 

    // still to test
    function addTweet(tweet) {        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myTweetToken')}`
        };

        return axios.post(baseUrl, tweet, { headers: myHeaders })
            .then(response => {
                getAllTweets();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function userProfile(tweet, user) {

    }
//still to test
    function editTweet(tweet) {
        let token = localStorage.getItem('myTweetToken');  
        let myHeaders = { Authorization: 'Bearer ' + token };
       

            return axios.put(baseUrl + tweet.tweetId, tweet, { headers: myHeaders })
            .then(response => {
                getAllTweets();
                return new Promise(resolve => resolve(response.data));
            }
        );
        
       
    }

    //works
    function deleteTweet(tweetId) {
        let token = localStorage.getItem('myTweetToken');  
        let myHeaders = { Authorization: 'Bearer ' + token };


        return axios.delete(baseUrl + tweetId, { headers: myHeaders }).then(response => {
            getAllTweets();
            return new Promise(resolve => resolve(response.data))
        })
    }

    return (
        <ForumContext.Provider value={{
            tweet,
            getTweet,
            addTweet,
            editTweet,
            deleteTweet, 
            userProfile,

        }}>
            { props.children }
        </ForumContext.Provider>
    )
};