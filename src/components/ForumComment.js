import React, { } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import ForumContext from '../contexts/ForumContext'
import '../styles/Forum2.css'

function ForumComment(props) {

    let [ comment, setComment ] = useState("");
    let { selectedForum, addForumComment } = useContext(ForumContext);

    // function handleChange(event) {
    //     setComment(preValue => {
    //         return { ...preValue, [event.target.name]: event.target.value }
    //     })
    // }


    const handleSubmit = () => {
        if (selectedForum && localStorage.getItem('myUserToken')) {
            addForumComment(selectedForum.forumId, comment)
        }
    }

    return (
        <>
            <div>
                <h5>Speak up</h5>
            </div>
                <div class="form-group" className='comment-window'>
                <textarea class="form-control" id="comment" value={comment} rows="4" onChange={e => setComment(e.target.value)}></textarea>
                    <p> </p>
                </div>
                <Button onClick={handleSubmit}>Comment</Button>
        </>
    )
}

export default ForumComment
