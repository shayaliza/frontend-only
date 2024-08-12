import React, { useState } from "react";

const quizData = {
  course: "Learn SQL Basics",
  quizTitle: "SQL SELECT Statement",
  question: `Suppose a database has a table named 
    <strong>Employees</strong> with these fields: 
    <strong>id</strong>, <strong>name</strong>, 
    <strong>email</strong>, and <strong>city</strong>. 
    How can we select the email addresses of all the employees from the 
    <strong>Employees</strong> table?`,
  options: [
    {
      value: "A",
      text: "SELECT id, email FROM Employees;",
    },
    {
      value: "B",
      text: "SELECT city FROM Employees;",
    },
    {
      value: "C",
      text: "SELECT email FROM Customers;",
    },
    {
      value: "D",
      text: "SELECT email FROM Employees;",
    },
  ],
};

const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="p-4 sm:px-4 lg:px-20 xl:px-30 quiz relative -z-10">
      <div className="sm:px-4 lg:px-8 xl:px-64">
        <div className="border-2 p-4 sm:p-6 lg:p-8 xl:p-12 bg-white shadow-lg rounded-lg">
          <div className="py-2 text-gray-700">Course: {quizData.course}</div>
          <div className="py-2 text-gray-700">
            Quiz:
            <br />
            <b>{quizData.quizTitle}</b>
          </div>
          <div
            className="py-2 text-gray-700"
            dangerouslySetInnerHTML={{ __html: quizData.question }}
          />
          <div className="py-2">
            <ul id="options" className="space-y-4">
              {quizData.options.map((option) => (
                <li
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  className={`p-4 cursor-pointer rounded-lg border ${
                    selectedOption === option.value
                      ? "bg-blue-100 border-blue-500 text-blue-700"
                      : "bg-white border-gray-300 text-gray-700"
                  } hover:bg-blue-50 transition-all`}
                >
                  <div>Option {option.value}:</div>
                  <div>{option.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
