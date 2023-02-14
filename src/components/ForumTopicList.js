import React, { useContext, useState } from 'react'
import { Button, ListGroup, Form } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'
import { Navigate, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';


function ForumTopicList(props) {

    let [forumHeading, setForumHeading] = useState();
    let [forumBody, setForumBody] = useState();

    let navigate = useNavigate();
    let { addForum } = useContext(ForumContext);


    let { getForumTopic, getForumComments } = useContext(ForumContext)

    function topicList(forumTopics) {

        // const [selectedPost, setSelectedPost] = useState(null);

        function handleSelecttoShow(forumId) {
            getForumTopic(forumId);
            // setSelectedPost(topic[forumId]);
        }

        if (forumTopics === null) return
        return forumTopics.map((topic) =>
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

    return (
        <>
            <div className="toplist">
                <p>    </p>
                <h5>Topics</h5>
                <i class="gg-add"></i>
            </div>

            <div className='topic-container'>
                <ForumContext.Consumer>
                    {({ forumTopics }) => (
                        topicList(forumTopics)
                    )}
                </ForumContext.Consumer>
            </div>
        </>
    )
};

export default ForumTopicList;