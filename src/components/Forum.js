// import React, { useState, useContext } from 'react';
// import { Button, Card, Form } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import '../styles/Forum.css';
// import { useNavigate } from 'react-router-dom';
// import Modal from 'react-bootstrap/Modal';
// import PostsContext from '../contexts/PostsContext';

// function Forum() {
//   const [postTitle, setPostTitle] = useState('');
//   const [postContent, setPostContent] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [like, setLike] = useState(false);
//   const [showEditPost, setShowEditPost] = useState(false);
//   const [updatedTitlePost, setUpdatedTitlePost] = useState([]);
//   const [updatedContentPost, setUpdatedContentPost] = useState([]);
//   let { newForum } = useContext(PostsContext);
//   let navigate = useNavigate();

//   function handleSubmit(e) {
//     e.preventDefault();
//     newForum(postTitle, postContent)
//       .then(() => {
//         navigate('/forum');
//       }).catch(error => {
//         console.log(error);
//         window.alert('Failed: error creating post');
//       });
//     setPosts([...posts, { title: postTitle, content: postContent }]);
//     setPostTitle('');
//     setPostContent('');
//   }

//   const handleClick = (index) => {
//     setSelectedPost(posts[index]);
//   };

//   const handleEdit = () => {
//     setShowEditPost(true);
//   };

//   const handleClose = () => {
//     setShowEditPost(false);
//   };

//   const handleReply = () => {
//     alert('Reply to this topic');
//   };

//   const handleDelete = () => {
//     setPostTitle([]);
//     setPosts([]);
//     setSelectedPost([]);
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
// <<<<<<< HEAD
//     setPosts([...updatedPosts, { title: updatedTitlePost, content: updatedContentPost }]);
//     setUpdatedTitlePost('');
//     setUpdatedContentPost('');
//     setShowEditPost(false);
//   };
// =======
//     let updatedTitleRequest = new XMLHttpRequest();
//     updatedTitleRequest.open('GET', 'https://www.purgomalum.com/service/json?text=' + updatedTitlePost, true);
//     updatedTitleRequest.send();
//   }
// >>>>>>> 822ff8665bcd1c283b860a3bd6ac88cb8ea68f90

//   const handleSaveReply = (e) => {
//     e.preventDefault();
//     setSelectedPost({ ...selectedPost, reply: reply });
//     handleClose();
//   }

//   return (
//     <>
//       <h1 className='mb-3'>Welcome to the forum! </h1>
//       <Form className='mb-3 forum-window' onSubmit={handleSubmit}>
//         <Form.Group className='forum-window'>
//           <Form.Label className='forum-window'>Title:</Form.Label>
//           <Form.Control
//             className='forum-window'
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
// <<<<<<< HEAD

//       <Modal className='forum-reply' show={showReplyPost}
//         onHide={handleClose}>
//         <Modal.Header className='forum-reply'>
//           <Modal.Title>Post your reply</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className='forum-reply'>
//           <Form onSubmit={handleReply}>
//             <Form.Group>
//               <Form.Label>Express yourself!:</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Reply to post"
//                 required
//                 value={reply}
//                 onChange={(e) => setReply(e.target.value)}
//                 id="reply"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={handleSaveReply}>Save</Button>
//         </Modal.Footer>
//       </Modal>
// =======
// >>>>>>> 822ff8665bcd1c283b860a3bd6ac88cb8ea68f90

//       <Modal className='forum-edit' show={showEditPost} onHide={handleClose}>
//         <Modal.Header className='forum-edit'>
//           <Modal.Title>Edit Post</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className='forum-edit'>
//           <Form>
//             <Form.Group>
//               <Form.Label>Title:</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Edit title"
//                 id="edit-title"
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Content:</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 placeholder="Edit post"
//                 id="edit-content"
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={handleSave}>Save</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };


// export default Forum;