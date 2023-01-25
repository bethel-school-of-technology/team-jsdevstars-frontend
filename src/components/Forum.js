import { React, useState } from 'react';
import '../styles/Forum.css';
import { Link } from 'react-router-dom';

// const Forum = () => {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState('');

//   const handlePostSubmit = (e) => {
//     e.preventDefault();
//     setPosts([...posts, newPost]);
//     setNewPost('');
//   }

//   const handlePostChange = (e) => {
//     setNewPost(e.target.value);
//   }

//   return (
//     <div className="forum">
//       <div className="forum-sidebar">
//         <Link to="/forum/topic1">Topic 1</Link><br />
//         <Link to="/forum/topic2">Topic 2</Link><br />
//         <Link to="/forum/topic3">Topic 3</Link><br />
//         <Link to="/forum/topic4">Topic 4</Link><br />
//       </div>
//       <div className="forum-posts">
//         {posts.map((post, index) => (
//           <div key={index} className="post">{post}</div>
//         ))}
//         <form onSubmit={handlePostSubmit}>
//           <input type="text" value={newPost} onChange={handlePostChange} />
//           <button type="submit">Post!</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Forum;












const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleClick = () => {
    if (userInput) {
      setPosts([...posts, userInput]);
      setUserInput('');
    }
  };

  return (
    <div className="forum-page-container">
      <div className="left-column">
        <div className="topic-list">
          <h3>Topics</h3>
          <ul>
            <Link to="/forum/topic1">Topic 1</Link><br />
            <Link to="/forum/topic2">Topic 2</Link><br />
            <Link to="/forum/topic3">Topic 3</Link><br />
            <Link to="/forum/topic4">Topic 4</Link><br />
          </ul>
        </div>
      </div>
      <div className="right-column">
        <div className="main-div">
          <p className="main-div-text">
            {posts.length > 0
              ? posts.map((post, i) => <p key={i}>{post}</p>)
              : 'No posts yet!'}
          </p>
        </div>
        <div className="post-box">
          <textarea
            value={userInput}
            onChange={handleChange}
            placeholder="Enter your comment"
          />
          <br />
          <button onClick={handleClick}>Post!</button>
        </div>
      </div>
    </div>
  );
};

export default Forum;
















// another one BELOW

// const Forum = () => {
//   const [posts, setPosts] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const post = document.getElementById('post').value;
//     setPosts([...posts, post]);
//     document.getElementById('post').value = '';
//   }

//   return (
//     <div className="forum-page">
//       <div className="topic-list">
//       </div>
//       <div className="main-div">
//         <h2>Welcome to the Forum!</h2>
//         <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="forum" />
//         <div className="posts">
//           {posts.map((post, index) => (
//             <p key={index}>{post}</p>
//           ))}
//         </div>
//       </div>
//       <div className="post-form">
//         <form onSubmit={handleSubmit}>
//           <textarea id="post" required placeholder="Enter post here..." /><br />
//           <button type="submit">Post!</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Forum;