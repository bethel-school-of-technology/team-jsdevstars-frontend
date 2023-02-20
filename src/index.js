import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserProvider } from './contexts/UserProvider';
import { ForumProvider } from './contexts/ForumProvider';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider> 
      <ForumProvider>
          <App />
      </ForumProvider>
    </UserProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
