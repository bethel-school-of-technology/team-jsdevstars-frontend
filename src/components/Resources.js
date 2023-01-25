import { React, useState } from 'react';
import '../styles/Resources.css';

const Resources = () => {
  return (
    <div className="page-container">
      <div className="header">
        <h1>Resources</h1>
      </div>

      <div className="content">
        <div className="links">
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
          <p>Link 5</p>
          <p>Link 6</p>
          <p>Link 7</p>
          <p>Link 8</p>
          <p>Link 9</p>
          <p>Link 10</p>
        </div>

        <div className="videos">
          <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/YQHsXMglC9A">
          </iframe>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/eE5obmM5Zqw">
          </iframe>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/A9XUcWGd0AA">
          </iframe>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ">
          </iframe>
        </div>

        <div className="image-text">
          <div className="image">
            <img src="https://via.placeholder.com/150" alt="placeholder image" />
          </div>
          <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies nisi a eleifend bibendum. Vivamus suscipit nisi sed ante scelerisque, quis semper mauris volutpat. Nullam scelerisque euismod sapien, nec vulputate massa venenatis at. Maecenas non sapien et mi luctus venenatis. Fusce varius ut neque non efficitur. Donec ac erat ac dolor congue hendrerit. Vestibulum a suscipit eros. Pellentesque vestibulum porta sapien, a tincidunt leo malesuada vel. Aenean euismod aliquet erat, quis dictum velit sagittis quis. Nullam placerat justo eget metus congue, quis faucibus est tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
