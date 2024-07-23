import { useEffect, useState } from "react";
import axios from "axios";

import "./Question.css";
import Answer from "./Answer";

function Question({
  questionNumber,
  questionId,
  quizSubmitted,
  onOptionSelection,
}) {
  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await axios.get(`/api/questions/${questionId}`);
      setQuestion(data);
      const optionsObj = {};
      data.options.forEach((option) => {
        optionsObj[option] = false;
      });
      setOptions(optionsObj);
    };

    fetchQuestion();
  }, [questionId]);

  const [options, setOptions] = useState({});
  const [question, setQuestion] = useState({ options: [] });

  const checkboxSelectionHandler = (event) => {
    // To ensure that only one checkbox is selected at a time
    // If another checkbox is checked then keep latest one as checked
    // If same checkbox is selected remove selected checkbox
    setOptions((prevOptions) => {
      const newOptions = { ...prevOptions };
      Object.keys(newOptions).forEach((key) => {
        if (key !== event.target.value) {
          newOptions[key] = false;
        }
      });
      newOptions[event.target.value] = !prevOptions[event.target.value];
      return newOptions;
    });
    if (event.target.checked) {
      onOptionSelection(questionId, event.target.value);
    } else {
      onOptionSelection(questionId, "");
    }
  };

  return (
    <>
    <div className="question">
      <div className="question__number">{questionNumber}</div>
      <div className="question-options">
        <div className="question__questionText">{question.question}</div>
        <div className="question__options">
          {question.options.map((option, index) => (
            <div
              className="question__option"
              key={`${questionNumber}-${index}`}
            >
              <input
                type="checkbox"
                checked={options[option]}
                id={`q${questionNumber}option${index + 1}`}
                name="selectedOption"
                value={option}
                className="question__checkbox"
                onChange={(event) => checkboxSelectionHandler(event)}
                disabled={quizSubmitted}
              />
              <label
                className="question__optionText"
                htmlFor={`q${questionNumber}option${index + 1}`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
    {quizSubmitted && <Answer questionId={questionId}/>}
    </>
  );
}

export default Question;
