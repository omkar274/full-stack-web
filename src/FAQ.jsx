import { useState } from 'react';

const faqItems = [
  {
    question: 'What are the key features of iPhone A17 Pro?',
    answer: 'The iPhone A17 Pro features our most advanced chip, revolutionary camera system, and all-day battery life.'
  },
  {
    question: 'How does the 3D model work?',
    answer: 'The 3D model is an interactive representation that you can rotate to view the product from all angles.'
  },
  {
    question: 'Where can I buy the iPhone A17 Pro?',
    answer: 'You can purchase it through our online store or at any authorized Apple retailer.'
  }
];

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faqItem" style={{ marginBottom: '1rem', color: 'white' }}>
      <div 
        className="faqQuestion" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          padding: '1rem', 
          backgroundColor: '#222', 
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span>{item.question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="faqAnswer" style={{ padding: '1rem', backgroundColor: '#333' }}>
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section style={{ 
      padding: '5rem 10vw', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h2 style={{ color: 'white', marginBottom: '2rem', fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
      {faqItems.map((item, index) => (
        <FAQItem key={index} item={item} />
      ))}
    </section>
  );
}