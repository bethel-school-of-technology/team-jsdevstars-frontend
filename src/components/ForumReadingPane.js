import React, { useContext, useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'

function ForumReadingPane(props) {

    let navigate = useNavigate()

    let { forumTopics, deleteForumTopic, setSelectedForum, selectedForum, getForumTopic, setUserInfo, editForum, heading, body, setHeading, setBody } = useContext(ForumContext)

    const [showEditModal, setShowEditModal] = useState(false);

    const handleClose = () => setShowEditModal(false);
    const handleEdit = () => setShowEditModal(true);
    const handleSave = (forumId) => {
        editForum(forumId, heading, body).then((val) => {
            console.log(val);
            //setSelectedForum(val);
        
        });
        
        handleClose();
    }

    // const [like, setLike] = useState(false);


    // const handleReply = () => {
    //     alert('Reply to this topic');
    // };

    // const handleEdit = () => {
    //     // setShowEditPost(true);
    //     editForumTopic(forumId)
    // };


    // function handleDeleteTopic(forumId) {
    //     deleteForumTopic(forumId)
    //     navigate('/forum')
    // }

    let { forumId, topicHeading, topicBody, createdAt, userId } = forumTopics
    let { userName } = setUserInfo

    return (
        <>
            <div class="card border-light mb-3">
                {selectedForum && (
                    <>
                    <Card key={selectedForum.forumId}>
                        <Card.Body>
                            <Card.Title>{selectedForum.topicHeading}</Card.Title>
                            <Card.Text>
                                <p>{selectedForum.topicBody}</p>
                                <br />
                                <p class="card-subtitle mb-1 text-muted">{setUserInfo.userName}</p>
                                <p>{selectedForum.createdAt}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Button variant="primary" onClick={handleEdit}>
                        Edit
                    </Button>
                    </>
                )}

            </div>
            {selectedForum && (<Modal show={showEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>      
                    <Form className='mb-3 forum-window'>
                        <Form.Group className='forum-window'>
                        <Form.Label className='forum-window'>Title:</Form.Label>
                        <Form.Control
                            className='forum-window'
                            placeholder='What is the title?'
                            required
                            type='text'
                            v-model="text" 
                            pattern="[\w\d\s@&!?#$%^*()+-_{}:;']+" 
                            title="Letters and numbers only"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)} />
                    </Form.Group>
                    <Form.Group className='forum-window'>
                        <Form.Label>Topic:</Form.Label>
                        <Form.Control
                            required
                            placeholder='Let your imagination run wild!'
                            as='textarea'
                            rows={5}
                            value={body}
                            v-model="text" 
                            pattern="[\w\d\s@&!?#$%^*()+-_{}:;']+" 
                            title="Letters and numbers only"
                            onChange={(e) => setBody(e.target.value)} />
                    </Form.Group> 
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleSave(selectedForum.forumId)}>
                        Save Changes
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>)}
        </>
    )
}

export default ForumReadingPane;