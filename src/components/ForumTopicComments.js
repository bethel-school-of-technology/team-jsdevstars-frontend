import React, { useContext, useState } from 'react'
import { ListGroup, Button, Form, Modal } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'


function ForumTopicComments(props) {

    let { selectedForumComments, editForumComment, selectedForum } = useContext(ForumContext);
    let [currentCommentId, setCurrentCommentId] = useState(null);
    let [currentComment, setCurrentComment] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    function commentList(selectedForumComments) {

        const handleClose = () => setShowEditModal(false);
        const handleEdit = (commentObject) => {
            setShowEditModal(true);
            setCurrentCommentId(commentObject.forumCommentId);
            setCurrentComment(commentObject.comment);
        };
        const handleSave = (commentId, comment) => {
            editForumComment(selectedForum.forumId, commentId, comment);
            handleClose();
        }

        if (selectedForumComments === null) return
        return selectedForumComments.map((comment, index) =>
            <>
                <ListGroup key={comment.forumCommentId}>

                    <div class="d-inline-flex p-2" className="commentDiv"> {comment.comment}</div>
                    <div className="commentEditButton">
                        <Button variant="primary" onClick={() => handleEdit(comment)}>
                            Edit
                        </Button>
                    </div>

                    <p> </p>
                </ListGroup>
                <div>
                    {currentComment &&
                        (<Modal show={showEditModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form className='mb-3 forum-window'>
                                    <Form.Group className='forum-window'>
                                        <Form.Label>Topic:</Form.Label>
                                        <Form.Control
                                            required
                                            placeholder='Let your imagination run wild!'
                                            as='textarea'
                                            rows={5}
                                            value={currentComment}
                                            v-model="text"
                                            pattern="[\w\d\s@&!?#$%^*()+-_{}:;']+"
                                            title="Letters and numbers only"
                                            onChange={(e) => setCurrentComment(e.target.value)} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => handleSave(currentCommentId, currentComment)}>
                                    Save Changes
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>)}
                </div>
            </>
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