import '../styles/Forum.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

const ForumPage = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { title: postTitle, content: postContent }]);
    setPostTitle('');
    setPostContent('');
  };

  return (
    <div>
      <h1>Welcome to the forum!</h1>
      <Form className='mb-3' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type='text'
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Topic:</Form.Label>
          <Form.Control
            type='text'
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Form.Group> <br />
        <Button className='forum-btn' type='submit'>Post!</Button>
      </Form>
      {posts.map((post, index) => (
        <div key={index}>
          <Link to={`/forum/${index}`}>{post.title}</Link>
          <Card style={{ width: '48rem' }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <p>{post.content}</p>
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ForumPage;