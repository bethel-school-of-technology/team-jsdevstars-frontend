import React from 'react';
import '../styles/Faq.css'

const FAQ = () => {
  const faqs = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "Why use React?", answer: "React allows for efficient updates and rendering of components, making it a popular choice for building dynamic and interactive user interfaces." },
    { question: "How does React work?", answer: "React uses a virtual DOM (Document Object Model) to track changes and updates to components, minimizing the amount of DOM manipulation needed." },
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
