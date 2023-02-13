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
        editforumTopic(forumId)
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
                                <p>{selectedForum.userName}{selectedForum.createdAt}</p>
                            </Card.Text>
                        </Card.Body>
                        <div>
                            <button onClick={() => setLike((prevLike) => !prevLike)}>
                                {like ? '🍺' : "Like"}
                            </button>
                            <button onClick={() => handleReply()}><span role='img' aria-labelledby='reply'>📬</span></button>

                            <button onClick={() => handleEdit()}><span role='img' aria-labelledby='edit'>🖋</span></button>

                            <button onClick={() => handleDeleteTopic()}><span role='img' aria-labelledby='delete'>🗑</span></button>
                        </div>
                    </Card>
                )}

            </div>



        </>


    )

}

export default ForumReadingPane;

// class ForumReadingPane extends React.Component {

//     render() {

//         if (this.props.oneTopic == null) {
//             return (
//                 <div style={{ display: 'block', width: 350, padding: 30 }}>

//                     <Card className="w-0 align-self-start">
//                         <Card.Body>
//                             <Card.Title>No Topic Selected</Card.Title>
//                             <Card.Text>
//                                 Click a topic on the left or create a topic
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             )

//         } else {
//             let { topicHeading, topicBody, createdAt, userId } = this.props.oneTopic
//             return (
//                 <Card className="w-0 align-self-start">
//                     <Card.Body>
//                         <Card.Title>{topicHeading} </Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">by:{userId}</Card.Subtitle>
//                         <Card.Text>
//                             {topicBody} {createdAt}.
//                         </Card.Text>
//                         <Button>Comment</Button>
//                     </Card.Body>
//                 </Card>
//             )
//         }


//     }
// }

// export default ForumReadingPane;