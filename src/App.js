import React from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css'
import Header from './components/Header';
import { UserProvider } from './contexts/UserProvider';
import { ForumProvider } from './contexts/ForumProvider';
import { ArticleProvider } from './contexts/ArticleProvider';
import Forum from './components/Forum';
import Resources from './components/Resources';
import Articles from './components/Articles';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <UserProvider>
      <ForumProvider>
        <ArticleProvider>


          <div className='App'>
            <BrowserRouter>
              <nav>
                <Link to="/signup">Sign Up</Link>
                <span> | </span>
                <Link to="/login">Log In</Link>
              </nav>
              <Routes>
                {/* <Header />
                <Navbar />
                <Footer /> */}
                <Route exact path="/" element={<Header />}>
                
                <Route exact path="/" element={<Navbar />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path="/" element={<Footer />} />
               
               <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<SignUp />} />

               <Route path="/Forum" element={<Forum />} />
               {/* <Route path="/Forum/post" element={<Post />} /> */}
               {/* <Route path="/Forum/:ForumId" element={<UpdateComment />} /> */}

               <Route path="/Articles" element={<Articles />} />

               <Route path="/Resources" element={<Resources />} />

               <Route path="/users/:userId" element={<UserProfile />} />
                </Route>
                <Route path="*" element={<h1>Adam, where are you?</h1>} />
              </Routes>


            </BrowserRouter>

          </div>

        </ArticleProvider>
      </ForumProvider>
    </UserProvider>

  );
}

export default App;

