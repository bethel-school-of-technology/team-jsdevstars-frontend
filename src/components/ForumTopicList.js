import React from 'react'
import ForumContext from '../contexts/ForumContext';

function ForumTopicList(props) {

    function topicList(forumTopics) {
        if (forumTopics === null) return
        return forumTopics.map((topic) =>

            <ul class="list-group" key={topic.forumId}>

                <li class="list-group-item list-group-item-light">{topic.topicHeading}</li>

            </ul>
        )
    }

    return (
        <>
            <h1>Topics</h1>
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