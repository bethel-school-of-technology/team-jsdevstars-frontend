import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Home.css';

function Home() {
  let myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://api.adviceslip.com/advice', true);
  myRequest.send();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {

        let myResponse = JSON.parse(this.responseText);

        let myDiv = document.createElement('div')

        let adviceTag = document.getElementById('advice');
        adviceTag.innerHTML = myResponse.slip.advice;

        document.body.appendChild(myDiv);

      } else {

        console.log('error processing request')
      }

    }
  }
  return (
    <div className='randomAdvice'>
      <h4 id="advTitle">Advice for the Day</h4>
      <p id="advice"></p>

      <div className="carousel">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1439920120577-eb3a83c16dd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1612173562294-8a977ef9d895?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJsYWNrJTIwZmF0aGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1627662055794-94ab33f5913a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGFzaWFuJTIwZmF0aGVyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1615723411974-ed6cf1a6180a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFkc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1468184121329-65aab8e7ad84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGRhZHN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>Fifth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1595182084742-abd9ecc0f0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRhZCUyMHBsYXlpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="Sixth slide"
            />
            <Carousel.Caption>
              <h3>Sixth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};


export default Home;
