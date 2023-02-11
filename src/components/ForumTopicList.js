import React from 'react'
import ForumContext from '../contexts/ForumContext';

function ForumTopicList(props) {

    function topicList(topics) {
        if (forumTopics === null) return
        return topics.map((topic) =>

            <ul class="list-group" key={topic.id}>

                <li class="list-group-item list-group-item-light">{topic.heading}</li>

            </ul>
        )
    }

    return (
        <>
            <h1>Topics</h1>
            <div className='topic-container'>
                <ForumContext.Consumer>
                    {({ topics }) => (
                        topicList(topics)
                    )}
                </ForumContext.Consumer>
            </div>  
        </>
    )
};

export default ForumTopicList;