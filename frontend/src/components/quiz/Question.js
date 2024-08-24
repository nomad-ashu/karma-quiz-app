import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <div className="flex mt-4 mb-2 items-center">
        <div className="text-base w-2 mx-2">{questionNumber}</div>
        <div className="text-base">{question.question}</div>
      </div>
      <div className="mx-6">
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <div
              className="flex items-center space-x-2"
              key={`${questionNumber}-${index}`}
            >
              <input
                type="checkbox"
                checked={options[option]}
                id={`q${questionNumber}option${index + 1}`}
                name="selectedOption"
                value={option}
                className="form-checkbox h-5 w-5 text-blue-600"
                onChange={(event) => checkboxSelectionHandler(event)}
                disabled={quizSubmitted}
              />
              <label
                className="text-sm"
                htmlFor={`q${questionNumber}option${index + 1}`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      {quizSubmitted && <Answer questionId={questionId} />}
    </div>
  );
}

export default Question;
