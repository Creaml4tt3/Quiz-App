import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AnsList() {
  const [AnsList, setAnsList] = useState([]);

  useEffect(() => {
    fetchAnsList();
  }, []);

  const fetchAnsList = async () => {
    try {
        const response = await axios.get('http://localhost:8000/api/ans');
        setAnsList(response.data);
    } catch (error) {
        console.error(error);
    }
  };

  const deleteAnsList = (id) => {
    // โค้ดลบคำถาม
  };

  const AnsListArray = AnsList.map((q) => ({
    name: q.name,
    email: q.email,
    score: q.score,
    anss: q.anss.map((c) => ({
        question_id: c.question_id,
        ans: c.ans,
      })),
    
  }));

  return (

    <div>
    <h1>AnsList</h1>
    <pre>{JSON.stringify(AnsListArray, null, 2)}</pre>
  </div>
    



  
  );
}

export default AnsList;
