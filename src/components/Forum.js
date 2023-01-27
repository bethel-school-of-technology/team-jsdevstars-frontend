import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Forum() {

  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { title: postTitle, content: postContent }]);
    setPostTitle('');
    setPostContent('');
  };

  const handleClick = (index) => {
    setSelectedPost(posts[index]);
  }

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

      <div style={{ display: 'flex', padding: '20px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          {posts.map((post, index) => (
            <div key={index}>
              <Link onClick={() => handleClick(index)}>{post.title}</
              Link>
            </div>
          ))}
        </div>

        <div>
          {selectedPost && (
            <Card style={{ width: '40rem' }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <h6>{selectedPost.title}</h6>
                  <p>{selectedPost.content}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

export default Forum;