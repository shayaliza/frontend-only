  import React, { useState } from "react";
  import "./Quiz.css"

  function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [options, setOptions] = useState([]);
    const [quizType, setQuizType] = useState("single"); 

    
    const handleAddQuestion = () => {
      setQuestions([...questions, { id: questions.length + 1 }]);
    };

    
    const handleDeleteQuestion = (id) => {
      setQuestions(questions.filter((question) => question.id !== id));
    };

    
    const addOption = () => {
      setOptions([...options, { id: options.length + 1, value: '', checked: false }]);
    };

    
    const removeOption = (index) => {
      setOptions(options.filter((_, i) => i !== index));
    };

    
    const handleDragStart = (e, index, type) => {
      e.dataTransfer.setData("text/plain", `${type}-${index}`);
    };

    
    const handleDrop = (e, index, type) => {
      e.preventDefault();
      const data = e.dataTransfer.getData("text/plain");
      const [draggedType, draggedIndex] = data.split("-");
      if (draggedType === type) {
        const draggedIndexNum = parseInt(draggedIndex, 10);
        if (type === "question") {
          const updatedQuestions = [...questions];
          const [draggedQuestion] = updatedQuestions.splice(draggedIndexNum, 1);
          updatedQuestions.splice(index, 0, draggedQuestion);
          setQuestions(updatedQuestions);
        } else if (type === "option") {
          const updatedOptions = [...options];
          const [draggedOption] = updatedOptions.splice(draggedIndexNum, 1);
          updatedOptions.splice(index, 0, draggedOption);
          setOptions(updatedOptions);
        }
      }
    };

    
    const handleDragOver = (e) => {
      e.preventDefault();
    };

  
    const handleInputChange = (index, value) => {
      const updatedOptions = [...options];
      updatedOptions[index].value = value;
      setOptions(updatedOptions);
    };

    
    const handleCheckboxChange = (index) => {
      if (quizType === "single") {
        const updatedOptions = options.map((option, i) => ({
          ...option,
          checked: i === index ? !option.checked : false,
        }));
        setOptions(updatedOptions);
      } else {
        const updatedOptions = [...options];
        updatedOptions[index].checked = !updatedOptions[index].checked;
        setOptions(updatedOptions);
      }
    };

    
    const handleQuizTypeChange = (type) => {
      setQuizType(type);
      if (type === "single") {
        setOptions(options.map((option) => ({ ...option, checked: false })));
      }
    };

    return (
      <div className="w-full justify-center body">
        <div className="w-full p-6 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex w-full lg:max-w-lg flex-[30%] flex-col rounded-lg bg-gray-50 p-5 ring-1 ring-gray-200 md:sticky z-0">
              <h2 className="mt-5 font-semibold">All Questions</h2>
              <p className="mt-1 text-sm text-gray-700">
                Questions that you add will be visible here. You can drag and drop
                to change the order of the questions.
              </p>
              <button
                type="button"
                className="w-full my-2 p-2 text-sm inline-flex items-center gap-2 flex-shrink-0 rounded-lg shadow bg-indigo-700 text-white hover:bg-violet-700 w-full justify-center text-center"
                data-testid="add-new-question-btn"
                onClick={handleAddQuestion}
              >
                Add a new question
              </button>
              <div className="col-span-1 mt-5">
                <div className="flex flex-col gap-4 px-1 py-2 overflow-y-auto max-h-96 scrollbar-hidden">
                  {questions.map((question, index) => (
                    <div
                      key={question.id}
                      className="mb-2"
                      draggable
                      onDragStart={(e) => handleDragStart(e, index, "question")}
                      onDrop={(e) => handleDrop(e, index, "question")}
                      onDragOver={handleDragOver}
                    >
                      <div className="flex items-center gap-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="h-5 w-5"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            strokeWidth="2"
                            d="M15,5 L17,5 L17,3 L15,3 L15,5 Z M7,5 L9,5 L9,3 L7,3 L7,5 Z M15,13 L17,13 L17,11 L15,11 L15,13 Z M7,13 L9,13 L9,11 L7,11 L7,13 Z M15,21 L17,21 L17,19 L15,19 L15,21 Z M7,21 L9,21 L9,19 L7,19 L7,21 Z"
                          ></path>
                        </svg>
                        <div className="flex w-full items-center justify-between rounded-lg bg-indigo-100 ring ring-indigo-500 ring-1 ring-gray-300">
                          <span className="px-4 py-2 text-sm font-medium">
                            Question {question.id}
                          </span>
                          <button
                            data-testid={`delete-question-btn-${question.id}`}
                            onClick={() => handleDeleteQuestion(question.id)}
                            className="flex-shrink-0 self-stretch rounded-br-md rounded-tr-md border-l p-2.5 focus:outline-none focus:ring disabled:cursor-not-allowed disabled:opacity-50 border-indigo-300 bg-indigo-200 hover:bg-indigo-300 focus:ring-indigo-400"
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              className="h-5 w-5 text-black"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-2V4h-4V2zm-2 2h-2v2h2V4zM9 8V6h6v2H9zm6 2H9v8h6V10zm-4 2v4h2v-4h-2z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-[70%] flex flex-col gap-6 border shadow-lg p-4 rounded-lg">
              <h2 className="mt-5 font-semibold">
                Editing Quiz Question: Question 1
              </h2>

              <div className="flex items-centerspace-x-2 justify-between">
                <div>
                  <span className="text-sm text-gray-700">Quiz Type:</span>

                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      id="singleCorrectTab"
                      className={`focus:outline-none p-1.5 text-sm rounded-md ${
                        quizType === "single" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handleQuizTypeChange("single")}
                    >
                      Single Correct
                    </button>
                    <button
                      id="multipleCorrectTab"
                      className={`focus:outline-none p-1.5 text-sm rounded-md ${
                        quizType === "multiple" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handleQuizTypeChange("multiple")}
                    >
                      Multiple Correct
                    </button>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs h-6 mt-8 font-semibold text-red-500 bg-red-100 rounded-full">
                  Unsaved
                </span>
              </div>

              <div class="mt-2 flex flex-col gap-2">
                          <label for="question" class="block text-sm font-medium text-gray-700">Question:</label>
                          <input type="text" name="title" id="quizTitle" class="p-2 block w-full rounded-md border-gray-300 text-gray-900 border-solid border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Give your quiz a nice title" data-testid="quiz-title-input" value="Ques 1"/>
                      </div>

                      <div class=" flex flex-col gap-2">
                          <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
                          <textarea type="text" name="title" class="p-2 block w-full rounded-md border-gray-300 text-gray-900 border-solid border-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Give your quiz a nice title" data-testid="quiz-title-input" value="Any description"/>
                      </div>

              <div className="flex flex-col gap-2 ">
                <label className="text-sm font-medium text-gray-700">Options:</label>
                {options.map((option, index) => (
                  <div
                    key={option.id}
                    className="flex items-center gap-2 border px-2"
                    draggable
                    onDragStart={(e) => handleDragStart(e, index, "option")}
                    onDrop={(e) => handleDrop(e, index, "option")}
                    onDragOver={handleDragOver}
                  >
                    <div className="flex h-5 items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
                          checked={option.checked}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      </div>
                      <div className="relative ml-2 flex flex-grow items-stretch focus-within:z-10">
                        <input
                          className="block w-full rounded-none focus:outline-none border-gray-200 text-sm text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 md:text-base h-8"
                          placeholder="The sun is..."
                          spellCheck="false"
                          value={option.value} // Set input value from state
                          onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                      </div>
                      <div className="flex h-full items-center justify-center gap-2 px-2">
                        <button
                          type="button"
                          className="inline-flex min-w-max items-center gap-2 flex-shrink-0 dark:ring-offset-gray-900 border border-transparent font-semibold focus:outline-none disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-50 focus:ring-primary-500 rounded-lg text-base border-none bg-transparent hover:text-primary-700 p-0 text-black"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={() => removeOption(index)}
                          className="inline-flex min-w-max items-center gap-2 flex-shrink-0 dark:ring-offset-gray-900 border border-transparent font-semibold focus:outline-none disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-50 focus:ring-primary-500 rounded-lg text-base border-none bg-transparent hover:text-primary-700 p-0 text-black"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 1024 1024"
                            className="hover:text-red-500"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path>
                          </svg>
                        </button>
                      </div>
                  </div>
                ))}
                <div className="flex justify-center items-center">
                <button className="px-6 py-2 font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
                onClick={addOption}>
                Add options
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Quiz;

