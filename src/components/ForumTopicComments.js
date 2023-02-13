import React, { useContext, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
// import ForumCommentContext from '../contexts/ForumCommentContext';
import '../styles/Forum2.css'


function ForumTopicComments(props) {

    let { getForumTopic, getForumComments, selectedForumComments } = useContext(ForumContext)

    function commentList(selectedForumComments) {



        if (selectedForumComments === null) return
        return selectedForumComments.map((comment) =>

            <ListGroup class="list-group" key={comment.forumCommentId}>
                <ListGroup.Item>
                    {comment.comment}
                    {/* <div>
                            <button onClick={() => setLike((prevLike) => !prevLike)}>
                                {like ? '🍺' : "Like"}
                            </button>
                            <button onClick={() => handleReply()}><span role='img' aria-labelledby='reply'>📬</span></button>

                            <button onClick={() => handleEdit()}><span role='img' aria-labelledby='edit'>🖋</span></button>

                            <button onClick={() => handleDeleteTopic()}><span role='img' aria-labelledby='delete'>🗑</span></button>
                        </div> */}
                </ListGroup.Item>
            </ListGroup>
        )
    }

    return (
        <>
            <div className='comments-container'>
                <ForumContext.Consumer>
                    {({ forumComments }) => (
                        commentList(selectedForumComments)
                    )}
                </ForumContext.Consumer>
            </div>
        </>
    )

}

export default ForumTopicComments;