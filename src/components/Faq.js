import React, { useState } from 'react';
import '../styles/Faq.css';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              onClick={() => handleAccordionClick(0)}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse ${
              activeIndex === 0 ? 'show' : ''
            }`}
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              onClick={() => handleAccordionClick(1)}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse ${
              activeIndex === 1 ? 'show' : ''
            }`}
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
