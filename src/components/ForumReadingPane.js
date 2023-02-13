import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ForumContext from '../contexts/ForumContext';
import '../styles/Forum2.css'

function ForumReadingPane(props) {

    let navigate = useNavigate()

    let { forumTopics, editForumTopic, deleteForumTopic, selectedForum, selectedForumComments, setUserInfo } = useContext(ForumContext)

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

                )}
            </div>
        </>
    )
}

export default ForumReadingPane;