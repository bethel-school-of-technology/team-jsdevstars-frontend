import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import './styles/App.css'
import Resources from './components/Resources';
import Articles from './components/Articles';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import UserProfile from './components/UserProfile';
import Forum2 from './components/Forum2';
import About from './components/About';
import Faq from './components/Faq';

function App() {
  return (


    <div className='App'>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Navigation />} >
            <Route exact path="/" element={<Home />} />
           
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />

            <Route path="/Forum" element={<Forum2 />} />
            <Route path="/Forum/:forumId" element={<Forum2 />} />

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