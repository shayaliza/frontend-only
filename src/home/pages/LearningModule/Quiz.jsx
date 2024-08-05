import React from "react";
// import "./quiz.css"
// Define the quiz data as a constant
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
  return (
    <div className="p-4 sm:px-4 lg:px-20 xl:px-30 quiz">
      <div className="sm:px-4 lg:px-8 xl:px-64">
        <div className="border-2 p-4 sm:p-6 lg:p-8 xl:p-12">
          <div className="py-2">Course: {quizData.course}</div>
          <div className="py-2">
            Quiz:
            <br />
            <b>{quizData.quizTitle}</b>
          </div>
          <div
            className="py-2"
            dangerouslySetInnerHTML={{ __html: quizData.question }}
          />
          <div className="py-2">
            <ul id="options" className="space-y-4">
              {quizData.options.map((option) => (
                <li key={option.value}>
                  <div className="option" data-value={option.value}>
                    <div>Option {option.value}:</div>
                    <div>{option.text}</div>
                  </div>
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
