import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './contexts/UserProvider';
import { ForumProvider } from './contexts/ForumProvider';
import { ForumCommentProvider } from './contexts/ForumCommentProvider';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider> 
      <ForumProvider>
      <ForumCommentProvider>
          <App />
        </ForumCommentProvider>
      </ForumProvider>
    </UserProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
