import React, { useContext, useState } from 'react'
import { Button, ListGroup } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'

function ForumTopicList(props) {

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

    function handleShow() {
        alert('hey')
    }


    return (
        <>
            <div className="toplist">
                <p>    </p>
                <h5>Topics</h5>
                <i class="gg-add" onClick={handleShow}></i>
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