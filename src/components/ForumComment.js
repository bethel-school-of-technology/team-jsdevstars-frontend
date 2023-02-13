import React, { } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import ForumCommentContext from '../contexts/ForumCommentContext'
import ForumContext from '../contexts/ForumContext'

function ForumComment(props) {

    let { forumComments, refreshComments, getForumComment, addTopicComment,
        editTopicComment, deleteTopicComment } = useContext(ForumCommentContext)

    let {forumTopics, getForumTopic } = useContext(ForumContext)

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
            <Form className='mb-3 forum-window' onSubmit={handleSubmit}>
                <Form.Group className='forum-window'>
                    <Form.Label className='forum-window'>Speak your mind</Form.Label>
                    <Form.Control
                        className='forum-window'
                        required
                        type='text'
                        v-model='text'
                        pattern="[\w\d\s@&!?#$%^*()+-_{}:;']+"
                        title='Letters and numbers only'
                        value={comment}
                        // onChange={handleChange}
                    />
                    <Button type='submit'>Comment</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default ForumComment
