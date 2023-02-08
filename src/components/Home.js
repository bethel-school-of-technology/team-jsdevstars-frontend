import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack'
import CarouselFade from './Carousel'
import '../styles/Home.css';

function Home() {

  // let myRequest = new XMLHttpRequest();
  // myRequest.open('GET', 'https://api.adviceslip.com/advice', true);
  // myRequest.send();

  // myRequest.onreadystatechange = function () {
  //   if (this.readyState === 4) {
  //     if (this.status === 200) {

  //       let myResponse = JSON.parse(this.responseText);

  //       let myDiv = document.createElement('div')

  //       let adviceTag = document.getElementById('advice');
  //       adviceTag.innerHTML = myResponse.slip.advice;

  //       document.body.appendChild(myDiv);

  //     } else {

  //       console.log('error processing request')
  //     }
  //   }
  // }

  return (

    <>
      <Stack gap={3} className="col-md-9 mx-auto mt-3">
        <CarouselFade />

      </Stack>
    </>




    // <div className='randomAdvice'>
    //   <h4 id="advTitle">Advice of the Day</h4>
    //   <p id="advice"></p>

     
  );
};


export default Home;
