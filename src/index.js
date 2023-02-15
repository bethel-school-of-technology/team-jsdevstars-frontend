import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './contexts/UserProvider';
import { ForumProvider } from './contexts/ForumProvider';
import { ForumCommentProvider } from './contexts/ForumCommentProvider';
// import { ArticleProvider } from './contexts/ArticleProvider';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider> 
      <ForumProvider>
      <ForumCommentProvider>
        {/* <ArticleProvider> */}
          <App />
        {/* </ArticleProvider> */}
        </ForumCommentProvider>
      </ForumProvider>
    </UserProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
