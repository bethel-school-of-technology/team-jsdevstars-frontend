import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where Did it all start</Accordion.Header>
        <Accordion.Body>
         So there we were four dads...lol seriously truth be told the man and visionare behind For Dads is none other than our very own CEO and lead ux designer Felipe Sarres.
         The vision is to create a community of men that can connnecet and grow together. A platform for knowledge and practical wisdom to be shared. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header></Accordion.Header>
        <Accordion.Body>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faq;
