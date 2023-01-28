import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Forum() {

  const [postTitle, setPostTitle] = useState('');
  const [postHeader, setPostHeader] = useState('');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [like, setLike] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, { header: setPostHeader, title: postTitle, content: postContent }]);
    setPostTitle('');
    setPostContent('');
  };

  const handleClick = (index) => {
    setSelectedPost(posts[index]);
  }

  return (
    <div>
      <h1 className='mb-3'>Welcome to the forum!</h1>
      <Form className='mb-3' onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            required
            type='text'
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Topic:</Form.Label>
          <Form.Control
            required
            as='textarea' rows={3}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Form.Group> <br />
        <Button className='forum-btn' type='submit'>Post!</Button>
      </Form>

      <div style={{ display: 'flex', padding: '0px 30px' }}>
        <div style={{ flex: 1 }}>
          <p>Links to the topics</p>
          {posts.map((post, index) => (
            <div key={index}>
              <Link style={{ textDecoration: 'none' }} onClick={() => handleClick(index)}>
                <th>
                  <td style={{ width: '300px' }}>
                    {post.title}
                  </td>
                </th>
              </Link>
            </div>
          ))}
        </div>

        <div>
          {selectedPost && (
            <Card style={{
              margin: '100px',
              width: '40rem'
            }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <h6>{selectedPost.title}</h6>
                  <p>{selectedPost.content}</p>
                </Card.Text>
              </Card.Body>
              <p onClick={() => setLike((prevLike) => !prevLike)}>
                {like ? '👍🏻' : "Like"}
              </p>
            </Card>
          )}
        </div>
      </div>
    </div >
  )
}

export default Forum;