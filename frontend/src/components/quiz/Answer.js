import React, { useEffect, useState } from 'react'
import axios from "axios";

const Answer = ({questionId}) => {
    const [correctAnswer, setCorrectAnswer] = useState("")

    useEffect(() => {
        const fetchAnswer = async () => {
            const { data } = await axios.get(`/api/answers/${questionId}`);
            setCorrectAnswer(data.answer)
        }
        fetchAnswer()
    }, [])

  return (
    <div>
      Correct Answer: {correctAnswer}
    </div>
  )
}

export default Answer
