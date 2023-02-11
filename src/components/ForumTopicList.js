import React from 'react'
import { ListGroup } from 'react-bootstrap';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'

function ForumTopicList(props) {

    function topicList(forumTopics) {
        if (forumTopics === null) return
        return forumTopics.map((topic) =>

            // <ListGroup class="list-group" key={topic.forumId}>
            // <ListGroup.Item action active={this.props.selected === topic}
            // onClick={this.props.handleTopicSelected.bind(this,topic)}>
            // {topic.topicHeading}
            // </ListGroup.Item>
            // </ListGroup>

            <div class="list-group" key={topic.forumId}>
                 <button type="button" class="list-group-item list-group-item-action list-group-item-light">{topic.topicHeading}</button>
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