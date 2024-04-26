import Questions from "./Questions";

const QuizPanel = ({
  questions,
  quizSubmitted,
  onOptionSelection,
  onQuizSubmission,
  answeres,
  quizScore
}) => {

  

  const optionSelectionHandler = (questionNumber, answered) => {
    onOptionSelection(questionNumber, answered);
  };

  const quizSubmissionHandler = (e) => {
    e.preventDefault();
    onQuizSubmission(e);
  };

  return (
    <form onSubmit={quizSubmissionHandler}>
      <Questions
        questions={questions}
        quizSubmitted={quizSubmitted}
        onOptionSelection={optionSelectionHandler}
        answeres={answeres}
      />
      {!quizSubmitted && <button type="submit">Submit</button>}
      {quizSubmitted && <div>Your Score: {quizScore}</div>}
    </form>
  );
};

export default QuizPanel;
