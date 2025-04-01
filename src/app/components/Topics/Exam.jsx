import React from "react";
import { ArrowLeft, Clock } from "react-feather";

function Exam(props) {
  const htmlQuestions = [
    {
      question: "What does HTML stand for?",
      choices: [
        "HyperText Markup Language", // Correct answer
        "Hyper Transfer Markup Language",
        "HighText Machine Language",
        "Hyperlink and Text Management Language",
      ],
      correctAnswer: "HyperText Markup Language",
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      choices: [
        "<a>", // Correct answer
        "<link>",
        "<href>",
        "<url>",
      ],
      correctAnswer: "<a>",
    },
    {
      question: "Which tag is used to define an unordered list in HTML?",
      choices: [
        "<ul>", // Correct answer
        "<ol>",
        "<li>",
        "<list>",
      ],
      correctAnswer: "<ul>",
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      choices: [
        "<br>", // Correct answer
        "<lb>",
        "<break>",
        "<newline>",
      ],
      correctAnswer: "<br>",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  return (
    <div
      onDoubleClick={() => props.setIsExamOpen(false)}
      className=" fixed inset-0 bg-black/70 z-50  flex items-center justify-center "
    >
      <div className="flex flex-col items-center justify-between bg-[#445bc2] text-white p-4 rounded-md w-full h-10/12 md:w-8/12  ">
        <div className="flex-1/12 flex flex-row">
          <ArrowLeft />
          <div className=" flex flex-row justify-items-center ">
            <Clock />
            10:00
          </div>
        </div>
        <div className="flex-1/12">
          {htmlQuestions.map((_, i) => {
            return (
              <span
                key={i + 10}
              className={"text-base md:text-lg rounded-full px-5 py-3.5 border border-solid border-white mx-2 " + (currentQuestion === i? "bg-white text-[#445bc2] " : "")}
            >
              {i + 1}
            </span>);
          })}
        </div>
        <div className="text-black bg-white p-4 rounded-md w-full flex-10/12 flex flex-col">
          <p className="text-lg md:text-xl font-bold flex-1/5  ">
            {currentQuestion + 1}. <br />
            {htmlQuestions[currentQuestion].question}
          </p>
          <div className="flex flex-col justify-between pb-20  flex-4/5">
            {htmlQuestions[currentQuestion].choices.map((choice, index) => (
              <div
                key={index}
                className="flex flex-row items-center  shadow-[0_0_5px_gray] hover:bg-[#5c7aff] transition-all duration-300 py-5 rounded-lg  px-7"
              >
                <input
                  type="radio"
                  name="answer"
                  id={index}
                  value={choice}
                  className=" mr-2"
                  onChange={() => {
                    if (currentQuestion < htmlQuestions.length - 1){
                      setCurrentQuestion(currentQuestion + 1)
                    }else {props.setIsExamOpen(false)}
                  }}
                />
                <label htmlFor={index} className="text-lg md:text-xl ">
                  {choice}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
