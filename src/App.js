import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
// import Footer from './components/Footer';
import './styles/App.css'
import Forum from './components/Forum';
import Resources from './components/Resources';
import Articles from './components/Articles';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import UserProfile from './components/UserProfile';
import Forum2 from './components/Forum2';
import forumReadingPane from './components/ForumReadingPane';

function App() {
  return (


    <div className='App'>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Navigation />} >
            <Route exact path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="/Forum" element={<Forum />} />
            {/* <Route path="/Forum" element={<Forum2 />} /> */}
            {/* <Route path="/Forum/post" element={<Post />} />
            <Route path="/Forum/:ForumId" element={<UpdateComment />} /> */}

            <Route path="/Articles" element={<Articles />} />

            <Route path="/Resources" element={<Resources />} />

            <Route path="/users/:userId" element={<UserProfile />} />
          </Route>
          <Route path="*" element={<h1>Adam, where are you?</h1>} />
        </Routes>


      </BrowserRouter>
    </div>


  );
}

export default App;