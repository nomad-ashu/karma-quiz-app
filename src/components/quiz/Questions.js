import React from "react";
import Question from "./Question";

function Questions({ questions, quizSubmitted, onOptionSelection, answeres }) {
  const optionSelectionHandler = (questionNumber, answered) => {
    onOptionSelection(questionNumber, answered);
  };

  let quizContent = <p className="quiz__zero">No Questions Found!</p>;

  if (questions.length > 0) {
    quizContent = questions.map((question, index) => (
      <div>
        <Question
          key={question.id}
          questionNumber={index + 1}
          questionText={question.question}
          optionText1={question.option1}
          optionText2={question.option2}
          optionText3={question.option3}
          optionText4={question.option4}
          quizSubmitted={quizSubmitted}
          onOptionSelection={optionSelectionHandler}
        />
        {quizSubmitted && (
          <div>Correct Answer: {answeres[index]["answer"]}</div>
        )}
      </div>
    ));
  }

  return <div>{quizContent}</div>;
}

export default Questions;
