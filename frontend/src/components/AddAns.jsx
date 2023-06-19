import React, {  useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';



function AddAns() {
  const navigate = useNavigate();
  const [name1, setName1] = useState("saisho4");
  const [email, setEmail] = useState("sora4");
  const [password, setPassword] = useState("12345");

  const createAns = async () => {
    const payload = {
      name: name1,
      email: email,
      password:password,
      questions: [
        {
          question_id: 1,
          ans: ["a", "b"]
        },
        {
          question_id: 2,
          ans: ["t", ""]
        }
      ]
    };

    try {
      const response = await axios.post("http://localhost:8000/api/ans", payload);
      Swal.fire({
        icon: 'success',
        text: response.data.message
      });
      navigate('/question/ans');
    } catch (error) {
      if (error.response.status === 422) {
        setValidationError(error.response.data.errors);
      } else {
        Swal.fire({
          text: error.response.data.message,
          icon: 'error'
        });
      }
    }
  };

  const deleteAns = async () => {
    const id = {
      id:1
    }

    try {
      const response = await axios.post(`http://localhost:8000/api/delete`,id);
      Swal.fire({
        icon: 'success',
        text: response.data.message
      });
      navigate('/question/ans');
    } catch (error) {
      if (error.response.status === 422) {
        setValidationError(error.response.data.errors);
      } else {
        Swal.fire({
          text: error.response.data.message,
          icon: 'error'
        });
      }
    }
  };

  return (
    <>
      <button onClick={createAns}>Create</button>
      <button onClick={deleteAns}>Delete</button>
    </>
  );
}

export default AddAns;
