import React, { useContext, useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'
const moment = require('moment-timezone');

function ForumReadingPane(props) {

    let { forumTopics, deleteForumTopic, setSelectedForum, selectedForum, getForumTopic, editForum, heading, body, setHeading, setBody } = useContext(ForumContext)

    const [showEditModal, setShowEditModal] = useState(false);

    const handleClose = () => setShowEditModal(false);
    const handleEdit = () => setShowEditModal(true);
    const handleSave = (forumId) => {
        editForum(forumId, heading, body);
        handleClose();
    }
    const handleDelete = (forumId) => {
        deleteForumTopic(forumId);
    }

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
                                    <p class="card-subtitle mb-1 text-muted">by {selectedForum.User.userName}</p>
                                    <p>{moment.tz(selectedForum.createdAt, moment.tz.guess()).format('MMMM Do YYYY, h:mm a z')}</p>
                                </Card.Text>
                            </Card.Body>
                            <div>
                                <Button variant="primary" onClick={handleEdit}>
                                    Edit
                                </Button>
                                <Button variant="secondary" onClick={() => handleDelete(selectedForum.forumId)}>
                                    Delete
                                </Button>
                            </div>
                        </Card>
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