import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ForumContext from '../contexts/ForumContext';

function ForumReadingPane(props) {

    let navigate = useNavigate()

    let { forumTopics, editForumTopic, deleteForumTopic, selectedForum, selectedForumComments } = useContext(ForumContext)

    const [like, setLike] = useState(false);


    const handleReply = () => {
        alert('Reply to this topic');
    };

    const handleEdit = () => {
        // setShowEditPost(true);
        editForumTopic(forumId)
    };


    function handleDeleteTopic(forumId) {
        deleteForumTopic(forumId)
        navigate('/forum')
    }

    let { forumId, topicHeading, topicBody, createdAt, userName } = forumTopics

    return (

        <>

            {/* <Card className="readingPane" key={forumTopics.forumId}>
                <Card.Body>
                    <Card.Title><strong>{topicHeading}</strong></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">by: {userId}</Card.Subtitle>
                    <Card.Text>
                        <strong>{topicBody}</strong>
                        <span>{createdAt}</span>
                    </Card.Text>
                    <Link to={`/forum/${forumId}`} className="btn btn-primary mx-3">Edit</Link>
                    <Button variant="danger" className="mx-3" onClick={handleDeleteTopic.bind(this, forumId)}>Delete</Button>
                </Card.Body>
            </Card> */}

            <div className='forum-content'>
                {selectedForum && (
                    <Card>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <h6><strong>{selectedForum.topicHeading}</strong></h6>
                                <p>{selectedForum.topicBody}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </>
    )
}

export default ForumReadingPane;