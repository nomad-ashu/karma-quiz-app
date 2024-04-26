import Questions from "./Questions";

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import "./QuizPanel.css";

const QuizPanel = ({
  questions,
  quizSubmitted,
  onOptionSelection,
  onQuizSubmission,
  answeres,
  quizScore,
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
      <Paper elevation={3}>
        <Questions
          questions={questions}
          quizSubmitted={quizSubmitted}
          onOptionSelection={optionSelectionHandler}
          answeres={answeres}
        />
      </Paper>
      {!quizSubmitted && (
        <Button
          variant="contained"
          type="submit"
          sx={{ marginLeft: 5, marginTop: 1, marginBottom: 2 }}
        >
          Submit
        </Button>
      )}
      {quizSubmitted && <div className="score">Your Score: {quizScore}</div>}
    </form>
  );
};

export default QuizPanel;
