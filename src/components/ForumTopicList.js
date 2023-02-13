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

            // <ListGroup class="list-group" key={topic.forumId}>
            // <ListGroup.Item action active={this.props.selected === topic}
            // onClick={this.props.handleTopicSelected.bind(this,topic)}>
            // {topic.topicHeading}
            // </ListGroup.Item>
            // </ListGroup>

            <div class="list-group" key={topic.forumId}>
            <Button onClick={() => handleSelecttoShow(topic.forumId)}>
                  {topic.topicHeading}
            </Button>
            </div>
        )
    }

    return (
        <>
            <div className="toplist">
                <p>    </p>
                <h4>Topics</h4>
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