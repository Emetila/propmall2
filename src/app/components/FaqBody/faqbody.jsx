// src/FAQ.js
import React, { useState } from 'react';
import style from './style.module.css'

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
        question: "How to get started on Propmall",
        answer: ['Signing up for PropMall is quick and easy. Follow these steps to create your account:',
          "Click on the Sign Up button on the top right corner of the homepage.",
          "Fill in your personal details, including your name, email address, and password.",
          "Verify your email address by clicking on the confirmation link sent to your inbox.",
          "Log in to your new account and complete your profile.",
        ]
      },
      {
        question: "How do I improve my time management skills?",
        answer: [
          "Set clear goals and priorities",
          "Create a daily schedule or to-do list",
          "Use time-blocking techniques",
          "Minimize distractions and practice focused work",
          "Take regular breaks to maintain productivity"],
          isOpen: false,
      }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.isOpen = !faq.isOpen;
        }
        return faq;
      })
    );
  };

  return (
    <div className="faq">
      <h1>FAQ</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={style.faqitem}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {index + 1}. {faq.question} <span className={`dropdown-icon ${faq.isOpen ? 'open' : ''}`}>&#9660;</span>
          </div>
          {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
