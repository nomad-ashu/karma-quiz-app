import React, { useState } from "react";

import QuizPanel from "../components/quiz/QuizPanel";
import data from "../data.json";
import answeres from "../answers.json"

const Quiz = () => {

const [quizScore, setQuizScore] = useState(0);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizSubmissionHandler = (e) => {
    setQuizSubmitted(true);
  };

  const optionSelectionHandler = (questionNumber, answered) => {
        if (answered === answeres[questionNumber - 1]["answer"]) {
          setQuizScore(quizScore + 1);        
      }
  };
  return (
    <div>
      <QuizPanel
        questions={data}
        quizSubmitted={quizSubmitted}
        onOptionSelection={optionSelectionHandler}
        onQuizSubmission={quizSubmissionHandler}
        answeres={quizSubmitted? answeres: ""}
        quizScore={quizSubmitted? quizScore: ""}
      />
    </div>
  );
};

export default Quiz;
