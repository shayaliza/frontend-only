import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ number, question, summary, answer, isOpen, onClick }) => {
  return (
    <div className="border-b-2 border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <span className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center font-bold">
            {number}
          </span>
          <div>
            <h3 className="text-lg font-medium text-gray-800">{question}</h3>
            {!isOpen && <p className="text-sm text-gray-600">{summary}</p>}
          </div>
        </div>
        <div className="text-gray-600">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const [expandedAll, setExpandedAll] = useState(false);
  const faqs = [
    {
      number: 1,
      question: "What is Python?",
      summary: "Python is a programming language.",
      answer:
        "Python is a programming language that lets you work quickly and integrate systems more effectively.",
    },
    {
      number: 2,
      question: "How do I install Python?",
      summary: "You can install Python from the official website.",
      answer:
        "You can install Python from the official website python.org. Follow the instructions provided there.",
    },
  ];

  const handleExpandAll = () => {
    setExpandedAll(!expandedAll);
  };

  return (
    <div className="ml-2 mx-auto mt-10 border-2 border-black p-4">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-2xl font-bold text-black">Syllabus</h2>
        <button
          onClick={handleExpandAll}
          className="text-blue-500 hover:underline"
        >
          {expandedAll ? "Collapse all sections" : "Expand all sections"}
        </button>
      </div>
      <div className="mb-2 text-gray-600">
        14 lessons • 12 projects • 12 quizzes
      </div>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          number={faq.number}
          question={faq.question}
          summary={faq.summary}
          answer={faq.answer}
          isOpen={expandedAll}
          onClick={() => setExpandedAll(!expandedAll)}
        />
      ))}
    </div>
  );
};

export default FAQ;
