import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/App.css'
import Header from './components/Header';
import { UserProvider } from './contexts/UserProvider';
import { PostsProvider } from './contexts/PostsProvider'

function App() {
  return (
    <>
      <div className='App'>
        <UserProvider>
          <PostsProvider>
            <Header />
            <Navbar />
            <Footer />
          </PostsProvider>
        </UserProvider>
      </div>
    </>
  );
}

export default App;

