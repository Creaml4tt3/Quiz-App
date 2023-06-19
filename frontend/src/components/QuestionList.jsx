import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function QuestionList() {
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/api/questions`);
        setQuestion(response.data);
    } catch (error) {
        console.error(error);
    }
  };

  const deleteQuestion = (id) => {
    // โค้ดลบคำถาม
  };

  const questionArray = question.map((q) => ({
    id: q.id,
    question: q.question,
    question_id: q.question_id,
    sub_question: q.sub_question,
    choices: q.choices.map((c) => ({
        id: c.id,
        choice: c.choice,
      })),
    // เพิ่มโค้ดอื่น ๆ ที่ต้องการแสดงเพิ่มเติม
  }));

  return (

    <div>
    <h1>Question List</h1>
    <pre>{JSON.stringify(questionArray, null, 2)}</pre>
  </div>
    



  
  );
}

export default QuestionList;
