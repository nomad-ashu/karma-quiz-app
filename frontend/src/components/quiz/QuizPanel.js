import axios from "axios"
import Questions from "./Questions";

// // import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";

import Paper from "../basic/Paper";
import Button from "../basic/Button";
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
      <Paper>
        <Questions
          questionIds={questionIds}
          quizSubmitted={quizSubmitted}
          onOptionSelection={optionSelectionHandler}
          answeres={answeres}
        />
      </Paper>
      {!quizSubmitted && (
        <Button className="mx-12 mt-8"
        >
          Submit
        </Button>
      )}
      {quizSubmitted && <div className="text-blue-600 mx-12 my-6">Your Score: {quizScore}</div>}
    </form>
  );
};

export default QuizPanel;
