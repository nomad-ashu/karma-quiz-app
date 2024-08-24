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
    }, [questionId])

  return (
    <div className='mx-6 mt-2'>
      Correct Answer: <span className="text-blue-600 font-semibold">{correctAnswer}</span>
    </div>
  )
}

export default Answer
