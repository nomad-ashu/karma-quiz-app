import Question from "./Question";

import "./Questions.css";

function Questions({ questionIds, quizSubmitted, onOptionSelection, answeres }) {

  const optionSelectionHandler = (qId, answered) => {
    onOptionSelection(qId, answered);
  };

  let quizContent = questionIds.map((questionId, index) => (
      <div key={questionId}>
        <Question
          questionNumber={index + 1}
          questionId={questionId}
          quizSubmitted={quizSubmitted}
          onOptionSelection={optionSelectionHandler}
        />
      </div>
    ))
  return <div>{quizContent}</div>;
}

export default Questions;
