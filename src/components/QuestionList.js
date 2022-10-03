import React, { useEffect, useState } from 'react'
import QuestionItem from './QuestionItem'

const QuestionList = ({ onDeleteQuestion, onUpdateAnswer }) => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((resp) => resp.json())
      .then((questions) => setQuestions(questions))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={onDeleteQuestion}
            onUpdateAnswer={onUpdateAnswer}
          />
        ))}
      </ul>
    </section>
  )
}

export default QuestionList
