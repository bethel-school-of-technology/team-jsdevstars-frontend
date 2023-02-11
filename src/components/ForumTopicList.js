import React from 'react'
import ForumContext from '../contexts/ForumContext';

function ForumTopicList(props) {

    function topicList(topics) {
        if (topics === null) return
        return products.map((topic) =>

            <ul class="list-group">

                <li class="list-group-item list-group-item-light">{"A simple light list group item"}</li>

            </ul>
        )
    }

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Topics</h1>
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