import React from 'react';
import Stack from 'react-bootstrap/Stack'
import CarouselFade from './HomeCarousel'
import '../styles/Home.css';
import AdviceAPI from '../API/AdviceAPI';

function Home() {
  return (
    <>
      <Stack gap={3} className="col-md-9 mx-auto mt-3">
        <AdviceAPI />
        <CarouselFade />
      </Stack>
    </>
  );
};


export default Home;
