import React, { useContext } from 'react';
import PostsContext from '../contexts/PostsContext';
import { Link } from "react-router-dom";
import '../styles/App.css'

function PostsList(props) {

  let { deletePosts } = useContext(PostsContext);

  let formatDate = (input) => {
    let v = new Date(input);
    return v.toLocaleDateString("en-US")
  }

  return (

    <PostsContext.Consumer>
      {
        ({ posts }) => {
          return <div>
            <h3>Welcome back!</h3>
            <a href="/posts/new"><button>Add New Post</button></a>
            <div>
              {posts.map((c) => {
                console.log(posts)
                return (
                  <div className='posts_list' key={c._id}>
                    <div className='posts_text'>
                      <h2>{c.name}</h2>
                    </div>
                    <div className='list'>
                      <Link to={`/edit/${c._id}`}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => { deletePosts(c._id) }}>Delete</button>
                      <p>Tweet created on: {formatDate(c.createdAt)} by<a href={`/usersList/${c.username}`}>{c.username}</a></p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        }
      }
    </PostsContext.Consumer>
  );
}




export default PostsList;