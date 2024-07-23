import axios from "axios"
import Questions from "./Questions";

// import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import Button from "../buttons/Button";

import "./QuizPanel.css";
import { useEffect, useState } from "react";


const QuizPanel = ({
  quizId,
  quizSubmitted,
  onOptionSelection,
  onQuizSubmission,
  answeres,
  quizScore,
}) => {

  const [questionIds, setQuestionsIds] = useState([])

  
  useEffect(() => {
    const fetchQuestions = async () => {
      const {data} = await axios.get(`/api/quizes/${quizId}`)
      setQuestionsIds(data.quizQuestionIds)
    }

    fetchQuestions()
  },[quizId])

  const optionSelectionHandler = (qId, answered) => {
    onOptionSelection(qId, answered);
  };

  const quizSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    onQuizSubmission(e);
  };

  return (
    <form onSubmit={quizSubmissionHandler}>
      <Paper elevation={3}>
        <Questions
          questionIds={questionIds}
          quizSubmitted={quizSubmitted}
          onOptionSelection={optionSelectionHandler}
          answeres={answeres}
        />
      </Paper>
      {!quizSubmitted && (
        <Button
        >
          Submit
        </Button>
      )}
      {quizSubmitted && <div className="score">Your Score: {quizScore}</div>}
    </form>
  );
};

export default QuizPanel;
