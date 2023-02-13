import React, { } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import ForumCommentContext from '../contexts/ForumCommentContext'
import ForumContext from '../contexts/ForumContext'
import '../styles/Forum2.css'

function ForumComment(props) {

    let { forumComments, refreshComments, getForumComment, addTopicComment,
        editTopicComment, deleteTopicComment } = useContext(ForumCommentContext)

    let { forumTopics, getForumTopic } = useContext(ForumContext)

    let params = useParams()
    let [Comment, setComment] = useState([])

    let navigate = useNavigate()
    let { id, comment, commentDatetime, likes } = forumComments
    let { forumId } = forumTopics

    useEffect(() => {
        if (id === undefined) return
        async function fetch() {
            await refreshComments(forumId).then(Comment => setComment(Comment))
        }
        fetch()
    }, [id])

    function handleChange(event) {
        setComment(preValue => {
            return { ...preValue, [event.target.name]: event.target.value }
        })
    }

    function addOrUpdate() {
        if (id === undefined) {
            return addTopicComment(Comment)
        } else {
            return editTopicComment(Comment)
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        addOrUpdate().then(Comment => navigate(`/forum`))
    }

    return (
        <>
            <div>
                <h5>Speak up</h5>
            </div>
            <Form className='mb-3' onSubmit={handleSubmit}>
                <div class="form-group" className='comment-window'>
                    <textarea class="form-control" id="exampleFormControlTextarea1" value={comment} rows="4"></textarea>
                    <p> </p>
                </div>
                <Button type='submit' onSubmit={handleSubmit}>Comment</Button>
            </Form>
        </>
    )
}

export default ForumComment
