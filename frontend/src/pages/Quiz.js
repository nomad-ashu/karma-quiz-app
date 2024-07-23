import React, { useState, useEffect } from "react";
import axios from "axios"
import QuizPanel from "../components/quiz/QuizPanel";
import NavBar from "../components/navbar/NavBar";

const Quiz = ({userId}) => {

  const fetchAnswers = async () => {
    try {
      if (quizSubmitted){
        const {data} = await axios.get("/api/answers");
        setAnswers(data)
        data.forEach(item => {
          attempted.forEach(attempt => {
            if((attempt.qId === item.id) & (attempt.answer === item.answer)){
              setQuizScore(prevScore => prevScore+1)
            }
          })
        })
      }
    } catch (error) {
      console.error("Error fetching answers:", error);
    }
  };

  const [answers, setAnswers] = useState([]);
  const [attempted, setAttempted] = useState([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0)
  

  useEffect(() => {
    fetchAnswers()
  }, [quizSubmitted]);

  const quizSubmissionHandler = (e) => {
    setQuizSubmitted(true);
  };

  const optionSelectionHandler = (qId, answered) => {
    console.log(qId);
    console.log(answered);
    setAttempted(prevAttempted => {
      let qidFound = false
      const updateSelectedAnswer = prevAttempted.map(attempt => {
        if (attempt.qId === qId) {
          qidFound = true
          return { ...attempt, answer: answered};
        }
        return attempt
      })
      if (!qidFound) {
        updateSelectedAnswer.push({qId: qId , answer: answered});
      }
      return updateSelectedAnswer;
    })}

  return (
    <div>
      <NavBar user={userId}/>
      <QuizPanel
        quizId={"test-quiz"}
        quizSubmitted={quizSubmitted}
        onOptionSelection={optionSelectionHandler}
        onQuizSubmission={quizSubmissionHandler}
        answeres={quizSubmitted ? answers : ""}
        quizScore={quizSubmitted ? quizScore : ""}
      />
    </div>
  );
};

export default Quiz;
