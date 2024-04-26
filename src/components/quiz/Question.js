import { useState } from "react";

import "./Question.css" 

function Question(
  {
  questionNumber,
  questionText,
  optionText1,
  optionText2,
  optionText3,
  optionText4,
  quizSubmitted,
  onOptionSelection
}
) {

  // to refer optiontext while iterating
  const optionTexts = [optionText1, optionText2, optionText3, optionText4]

  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const checkboxSelectionHandler = (event, selected) => {
    // To ensure that only one checkbox is selected at a time
    // If another checkbox is checked then keep latest one as checked
    // If same checkbox is selected remove selected checkbox
    setOptions((prevOptions) => {
      const newOptions = { ...prevOptions };
      Object.keys(newOptions).forEach((key) => {
        if (key !== selected) {
          newOptions[key] = false;
        }
      });
      newOptions[selected] = !prevOptions[selected];
      return newOptions;
    });
    if (event.target.checked) {
      onOptionSelection(questionNumber, event.target.value)
    } else {
      onOptionSelection(questionNumber, "")
    }
  };

  return (
    <div className="question">
      <div className="question__number">{questionNumber}</div>
      <div className="question-options">
        <div className="question__questionText">{questionText}</div>
        <div className="question__options">
          {Object.keys(options).map((option, index) => (
            <div className="question__option">
              <input
                type="checkbox"
                checked={options[option]}
                id={`q${questionNumber}option${index+1}`}
                name="selectedOption"
                value={optionTexts[index]}
                className="question__checkbox"
                onChange={(event) => checkboxSelectionHandler(event, option)}
                disabled={quizSubmitted}
              />
              <label className="question__optionText" htmlFor={`q${questionNumber}option${index+1}`} >
                {optionTexts[index]}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;
