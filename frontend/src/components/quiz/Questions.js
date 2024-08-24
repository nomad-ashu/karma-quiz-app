import Question from "./Question";


function Questions({ questionIds, quizSubmitted, onOptionSelection, answeres }) {

  const optionSelectionHandler = (qId, answered) => {
    onOptionSelection(qId, answered);
  };

  let quizContent = questionIds.map((questionId, index) => (
        <Question
          questionNumber={index + 1}
          questionId={questionId}
          quizSubmitted={quizSubmitted}
          onOptionSelection={optionSelectionHandler}
        />
    ))
  return <div>{quizContent}</div>;
}

export default Questions;
