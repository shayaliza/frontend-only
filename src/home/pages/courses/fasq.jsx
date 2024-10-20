import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQItem = ({ number, question, summary, answer, isOpen, onClick }) => {
  return (
    <div className="border-b-2 border-gray-200 dark:border-gray-700 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <span className="bg-black dark:bg-white text-white dark:text-black rounded-full h-6 w-6 flex items-center justify-center font-bold">
            {number}
          </span>
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              {question}
            </h3>
            {!isOpen && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {summary}
              </p>
            )}
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600 dark:text-gray-400">{answer}</p>
      )}
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
    <div className="ml-2 mx-auto mt-10 border-2 border-black dark:border-white p-4 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Syllabus
        </h2>
        <button
          onClick={handleExpandAll}
          className="text-blue-500 dark:text-blue-300 hover:underline"
        >
          {expandedAll ? "Collapse all sections" : "Expand all sections"}
        </button>
      </div>
      <div className="mb-2 text-gray-600 dark:text-gray-400">
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
