import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { UserProvider } from './contexts/UserProvider';
import { ForumProvider } from './contexts/ForumProvider';
// import { ArticleProvider } from './contexts/ArticleProvider';


ReactDOM.render(
  <React.StrictMode>
    {/* <UserProvider>  */}
      <ForumProvider>
        {/* <ArticleProvider> */}
          <App />
        {/* </ArticleProvider> */}
      </ForumProvider>
    {/* </UserProvider> */}

  </React.StrictMode>,
  document.getElementById('root')
);
