import React, {  useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function AddQuestion() {
  
    const navigate = useNavigate();

    const[type,setType]= useState("");
    const[type_language,setType_language]= useState("");
    const[question,setQuestione]= useState("");
    const[sub_question,setSub_question]= useState("");



 
    const createQuestion = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        
        formData.append('type',type);
        formData.append('type_language',type_language);
        formData.append('question',question);
        formData.append('sub_question',sub_question);
        formData.append('choices',choices);
        // for (var pair of formData.entries()) {
        //     console.log(pair[0]+ ', ' + pair[1]); 
        // }
        try {
            const response = await axios.post(`http://localhost:8000/api/questions`, formData);
            Swal.fire({
              icon: 'success',
              text: response.data.message
            });
             navigate('/question');
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
          

    }
      
  return (
    <div>
    <Form onSubmit={createQuestion}>
      <Form.Group as={Row} controlId='formType'>
        <Form.Label column sm='2'>
          Type
        </Form.Label>
        <Col sm='10'>
          <Form.Control
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder='Enter type'
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formTypeLanguage'>
        <Form.Label column sm='2'>
          Type Language
        </Form.Label>
        <Col sm='10'>
          <Form.Control
            type='text'
            value={type_language}
            onChange={(e) => setType_language(e.target.value)}
            placeholder='Enter type language'
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formQuestion'>
        <Form.Label column sm='2'>
          Question
        </Form.Label>
        <Col sm='10'>
          <Form.Control
            as='textarea'
            value={question}
            onChange={(e) => setQuestione(e.target.value)}
            placeholder='Enter question'
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId='formSubQuestion'>
        <Form.Label column sm='2'>
          Sub Question
        </Form.Label>
        <Col sm='10'>
          <Form.Control
            as='textarea'
            value={sub_question}
            onChange={(e) => setSub_question(e.target.value)}
            placeholder='Enter sub question'
          />
        </Col>
      </Form.Group>
      {Array.from({ length: 4 }, (_, subIndex) => (
            <Form.Group as={Row} controlId={`choices[${subIndex}]`} key={subIndex}>
              <Form.Label column sm='2'>
              choices{subIndex}
              </Form.Label>
              <Col sm='10'>
                <Form.Control
                  type='text'
                  value={choices[subIndex]}
                  onChange={(e) => setChoices(e, subIndex)}
                  placeholder='Enter ans'
                />
              </Col>
            </Form.Group>
          ))}
      

      <Button type='submit'>Submit</Button>
    </Form>
  </div>
  );
}

export default AddQuestion;
