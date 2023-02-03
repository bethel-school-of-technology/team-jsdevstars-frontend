import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Forum.css';
import Modal from 'react-bootstrap/Modal';

function Forum() {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [updatedTitlePost, setUpdatedTitlePost] = useState([]);
  const [updatedContentPost, setUpdatedContentPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [like, setLike] = useState(false);
  const [showEditPost, setShowEditPost] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { title: postTitle, content: postContent }]);
    setPostTitle('');
    setPostContent('');
  }

  const handleClick = (index) => {
    setSelectedPost(posts[index]);
  };

  const handleEdit = () => {
    setShowEditPost(true);
  };

  const handleClose = () => {
    setShowEditPost(false);
  };

  const handleReply = () => {
    alert('Reply to this topic');
  };

  const handleDelete = () => {
    setPostTitle([]);
    setPosts([]);
    setSelectedPost([]);
  };

  const handleSave = () => {
    const newTitle = document.getElementById('edit-title').value;
    setUpdatedTitlePost([newTitle]);
    const newContent = document.getElementById('edit-content').value;
    setUpdatedContentPost([...updatedContentPost, newContent]);
    setPosts(posts.map(post => (post.title === selectedPost.title ? { ...post, title: newTitle, content: newContent } : post)));
    setSelectedPost([]);
    setShowEditPost(false);
  }

  return (
    <>
      <h1 className='mb-3'>Welcome to the forum! </h1>
      <Form className='mb-3' onSubmit={handleSubmit}>
        <Form.Group className='forum-window'>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            placeholder='What is the title?'
            required
            type='text'
            v-model="text" pattern="[\w\d\s@&!?#$%^*()+-_{}:;']+" title="Letters and numbers only"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='forum-window'>
          <Form.Label>Topic:</Form.Label>
          <Form.Control
            required
            placeholder='Let your imagination run wild!'
            as='textarea'
            rows={5}
            value={postContent}
            v-model="text" pattern="[\w\d\s@&!?#$%^*()+-_{}:;']+" title="Letters and numbers only"
            onChange={(e) => setPostContent(e.target.value)}
          />
          <br />
          <Button type='submit'>Post!</Button>
        </Form.Group> <br />
      </Form>

      <div className='forum-links'>
        <p>Links to the topics</p>
        {posts.map((post, index) => (
          <div key={index}>
            <Link style={{ textDecoration: 'none' }} onClick={() => handleClick(index)}>
              <th>
                <td>
                  {post.title}
                </td>
              </th>
            </Link>
            <hr />
          </div>
        ))}
      </div>

      <div className='forum-content'>
        {selectedPost && (
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <h6>Title: {selectedPost.title}</h6>
                <p>Comment: {selectedPost.content}</p>
              </Card.Text>
            </Card.Body>
            <div>
              <button onClick={() => setLike((prevLike) => !prevLike)}>
                {like ? '🍺' : "Like"}
              </button>
              <button onClick={() => handleReply()}><span role='img' aria-labelledby='reply'>📬</span></button>

              <button onClick={() => handleEdit()}><span role='img' aria-labelledby='edit'>🖋</span></button>

              <button onClick={() => handleDelete()}><span role='img' aria-labelledby='delete'>🗑</span></button>
            </div>
          </Card>
        )}
      </div>

      <Modal show={showEditPost} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Edit title"
                id="edit-title"
              />
            </Form.Group>

            <Form.Group className='forum-footer'>
              <Form.Label>Content:</Form.Label>
              <Form.Control
                as = "textarea"
                placeholder="Edit your post"
                id="edit-content"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='forum-footer'>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


export default Forum;


// import React, { useState } from 'react';
// import { Button, Card, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../styles/Forum.css';

// function Forum() {
//   const [postTitle, setPostTitle] = useState('');
//   const [postContent, setPostContent] = useState('');
//   const [updatedTitlePost, setUpdatedTitlePost] = useState([]);
//   const [updatedContentPost, setUpdatedContentPost] = useState([]);
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [like, setLike] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setPosts([...posts, { title: postTitle, content: postContent }]);
//     setPostTitle('');
//     setPostContent('');
//   }

//   const handleClick = (index) => {
//     setSelectedPost(posts[index]);
//   };

//   const handleEdit = () => {
//     const newTitle = prompt('Edit your title');
//     setUpdatedTitlePost([newTitle]);
//     const newContent = prompt('Edit your comment');
//     setUpdatedContentPost([...updatedContentPost, newContent]);
//     setPosts(posts.map(post => (post.title === selectedPost.title ? { ...post, title: newTitle, content: newContent } : post)));
//     setSelectedPost([]);
//   };

//   const handleReply = () => {
//     alert('Reply to this topic');
//   };

//   const handleDelete = () => {
//     setPostTitle([]);
//     setPosts([]);
//     setSelectedPost([]);
//   };

//   return (
//     <>
//       <h1 className='mb-3'>Welcome to the forum! </h1>
//       <Form className='mb-3' onSubmit={handleSubmit}>
//         <Form.Group className='forum-window'>
//           <Form.Label>Title:</Form.Label>
//           <Form.Control
//             placeholder='What is the title?'
//             required
//             type='text'
//             v-model="text" pattern="[\w\d\s@&!?#$%^*()+-_{}:;']+" title="Letters and numbers only"
//             value={postTitle}
//             onChange={(e) => setPostTitle(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className='forum-window'>
//           <Form.Label>Topic:</Form.Label>
//           <Form.Control
//             required
//             placeholder='Let your imagination run wild!'
//             as='textarea'
//             rows={5}
//             value={postContent}
//             v-model="text" pattern="[\w\d\s@&!?#$%^*()+-_{}:;']+" title="Letters and numbers only"
//             onChange={(e) => setPostContent(e.target.value)}
//           />
//           <br />
//           <Button type='submit'>Post!</Button>
//         </Form.Group> <br />
//       </Form>

//       <div className='forum-links'>
//         <p>Links to the topics</p>
//         {posts.map((post, index) => (
//           <div key={index}>
//             <Link style={{ textDecoration: 'none' }} onClick={() => handleClick(index)}>
//               <th>
//                 <td>
//                   {post.title}
//                 </td>
//               </th>
//             </Link>
//             <hr />
//           </div>
//         ))}
//       </div>

//       <div className='forum-content'>
//         {selectedPost && (
//           <Card>
//             <Card.Body>
//               <Card.Title></Card.Title>
//               <Card.Text>
//                 <h6>Title: {selectedPost.title}</h6>
//                 <p>Comment: {selectedPost.content}</p>
//               </Card.Text>
//             </Card.Body>
//             <div>
//               <button onClick={() => setLike((prevLike) => !prevLike)}>
//                 {like ? '🍺' : "Like"}
//               </button>
//               <button onClick={() => handleReply()}><span role='img' aria-labelledby='reply'>📬</span></button>

//               <button onClick={() => handleEdit()}><span role='img' aria-labelledby='edit'>🖋</span></button>

//               <button onClick={() => handleDelete()}><span role='img' aria-labelledby='delete'>🗑</span></button>
//             </div>
//           </Card>
//         )}
//       </div>
//     </>
//   );
// };


// export default Forum;

//npm install profanity-filter --save


  // const handleSubmit = (e) => {
  //   console.log('handleSubmit')
  //   e.preventDefault();
  //   Context provider //
  //     topicHeading: postTitle,
  //     topicBody: postContent
  //   }).then(post => {
  //     setPosts([...posts, { title: postTitle, content: postContent }]);
  //     setPostTitle('');
  //     setPostContent('');
  //   });
  // };