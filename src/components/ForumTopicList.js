import React, { useContext, useState, useEffect } from 'react'
import { Button, ListGroup, Form, Modal } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css';


function ForumTopicList(props) {

    let navigate = useNavigate();

    let { getForumTopic, addForumTopic } = useContext(ForumContext);

    const [showEditModal, setShowEditModal] = useState(false);
    const [newTopicHeading, setTopicHeading] = useState("");
    const [newTopicBody, setTopicBody] = useState("");

    function topicList(forumTopics) {

        function handleSelecttoShow(forumId) {
            getForumTopic(forumId);
        }

        if (forumTopics === null) return
        return forumTopics.slice(0).reverse().map((topic) =>
            <div>
                <ListGroup class="list-group" key={topic.forumId}>
                    <ListGroup.Item action active={props.selected === topic}
                        onClick={() => handleSelecttoShow(topic.forumId)}>
                        {topic.topicHeading}
                    </ListGroup.Item>
                </ListGroup>
                <p> </p>
            </div>
        )

    }

    function addTopic() {
        setShowEditModal(true);
    }

    function addTopicHB() {
        addForumTopic(newTopicHeading, newTopicBody);
        setShowEditModal(false);
    }
    return (
        <>
            <div className="toplist">
                <p>    </p>
                <h5>Topics</h5>
                <i class="gg-add" onClick={addTopic}></i>
            </div>

            <div className='topic-container'>
                <ForumContext.Consumer>
                    {({ forumTopics }) => (
                        topicList(forumTopics)
                    )}
                </ForumContext.Consumer>
            </div>

            <Modal
                show={showEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New Topic</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group controlId="topicHeading">
                        <Form.Label>Heading</Form.Label>
                        <Form.Control type="text" name="topicHeading" onChange={e => setTopicHeading(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="topicBody">
                        <Form.Label>Tell us about it...</Form.Label>
                        <Form.Control type="text" onChange={e => setTopicBody(e.target.value)} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => addTopicHB()}>
                        Add Topic
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default ForumTopicList;