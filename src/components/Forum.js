import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Forum.css';

function Forum() {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [updatedTitlePost, setUpdatedTitlePost] = useState([]);
  const [updatedContentPost, setUpdatedContentPost] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [like, setLike] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { title: postTitle, content: postContent }]);
    setPostTitle('');
    setPostContent('');
  };

  const handleClick = (index) => {
    setSelectedPost(posts[index]);
  };

  const handleEdit = () => {
    const newTitle = prompt('Edit your title');
    setPostTitle(newTitle);
  };

  const handleReply = () => {
    alert('Reply to this topic');
  };

  const handleDelete = () => {
    setPostTitle([]);
    setPosts([]);
    setSelectedPost([]);
  };

  return (
    <>
      <h1 className='mb-3'>Welcome to the forum! </h1>
      <Form className='mb-3' onSubmit={handleSubmit}>
        <Form.Group className='forum-window'>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            placeholder='What is your topic?'
            required
            type='text'
            v-model="text" pattern="^[a-zA-Z0-9\s]*$" title="Letters and numbers only"
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
            v-model="text" pattern="^[a-zA-Z0-9\s]*$" title="Letters and numbers only"
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
    </>
  );
};


export default Forum;

//npm install profanity-filter --save
