import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import QuizSample from "./quizjs";
import Index from "../layout";

export default function Componentquiz() {
  const [quizData, setQuizData] = useState(QuizSample);
  const [data, setData] = useState({});
  const [activeChoice, setActiveChoice] = useState({});
  const [timeOut, setTimeOut] = useState(30 * 60);
  const [inputValues, setInputValues] = useState([]);
  // const [score, setScore] = useState(null);

  // getData
  // useEffect(() => {
  //   Axios
  //     .get
  //     // localhost:hostของเครื่อง/api/path
  //     ()
  //     .then((res) =>
  //       //res data ที่ส่งมาข้างหลัง
  //       //  ใช้เอาไป setQuizData Ex. setQuizData(res.data)
  //       console.log(res)
  //     )
  //     .catch((err) =>
  //       // catch err จากหลังบ้าน Ex.Err ต่างๆจากหลังบ้าน
  //       console.log(err)
  //     );
  // }, []);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setTimeOut((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  const min = Math.floor(timeOut / 60);
  const seconds = timeOut % 60;

  useEffect(() => {
    // console.table(inputValues);
    console.log(data);
  }, [data, inputValues]);
  useEffect(() => {
    // console.log(data);
    // console.log(activeChoice);
  }, [data]);

  const handleChoiceSelect = (questionId, choiceIndex) => {
    setActiveChoice((prev) => ({
      ...prev,
      [questionId]: choiceIndex,
    }));

    const thisInput =
      Array.isArray(inputValues) &&
      inputValues.find((obj) => obj["question_id"] === questionId);

    const updatedInputValues = thisInput
      ? inputValues.map((obj) =>
          obj === thisInput ? { ...obj, select: choiceIndex } : obj
        )
      : [...inputValues, { id: questionId, select: choiceIndex }];
    setInputValues(updatedInputValues);
  };

  const handleSubmit = () => {
    const newData = inputValues.map((inputValue) => {
      if (inputValue.hasOwnProperty("select")) {
        // Retrieve the values of the 'select' property
        inputValue["question_id"] = inputValue?.id; // Assign the values to the 'ans' property
        inputValue["ans"] = [inputValue.select]; // Assign the values to the 'ans' property
        delete inputValue.id; // Remove the 'select' property
        delete inputValue.select; // Remove the 'select' property
      } else {
        const reducedObj = Object.keys(inputValue).reduce(
          (acc, key) => {
            console.log(acc);
            if (key !== "question_id") {
              acc.ans.push(
                inputValue["input"] || null,
                inputValue["input1"] || null,
                inputValue["input2"] || null
              );
            }
            return acc;
          },
          { question_id: inputValue.question_id, ans: [] }
        );
        inputValue = reducedObj;
      }
      return inputValue;
    });

    const result = {
      username: data.username,
      email: data.email,
      questions: newData,
    };

    setData(result);
    // console.log(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInput = (questionId, e) => {
    const { name, value } = e.target;
    const thisInput =
      Array.isArray(inputValues) &&
      inputValues.find((obj) => obj["question_id"] === questionId);

    const updatedInputValues = thisInput
      ? inputValues.map((obj) =>
          obj === thisInput ? { ...obj, [name]: value } : obj
        )
      : [...inputValues, { question_id: questionId, [name]: value }];
    setInputValues(updatedInputValues);
  };

  return (
    <div className="flex flex-col gap-[24px] items-center">
      <Index min={min} seconds={seconds}>
        <input
          type="text"
          className="username"
          name="username"
          value={data.username}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          className="email"
          name="email"
          value={data.email}
          onChange={(e) => handleChange(e)}
        />
        {quizData.map((item, ind) => {
          const question_quiz = item.sub_question;

          const inputObj = {
            "%i%": (
              <input
                type="text"
                name="input"
                value={
                  Array.isArray(inputValues) &&
                  inputValues.find(
                    (obj) => obj["question_id"] === item.question_id
                  )?.input
                    ? inputValues.find(
                        (obj) => obj["question_id"] === item.question_id
                      ).input
                    : ""
                }
                onChange={(e) => handleInput(item.question_id, e)}
              />
            ),
            "%i1%": (
              <input
                type="text"
                name="input1"
                value={
                  Array.isArray(inputValues) &&
                  inputValues.find(
                    (obj) => obj["question_id"] === item.question_id
                  )?.input1
                    ? inputValues.find(
                        (obj) => obj["question_id"] === item.question_id
                      ).input1
                    : ""
                }
                onChange={(e) => handleInput(item.question_id, e)}
              />
            ),
            "%i2%": (
              <input
                style={{ margin: "0px 16px 0px" }}
                type="text"
                name="input2"
                value={
                  Array.isArray(inputValues) &&
                  inputValues.find(
                    (obj) => obj["question_id"] === item.question_id
                  )?.input2
                    ? inputValues.find(
                        (obj) => obj["question_id"] === item.question_id
                      ).input2
                    : ""
                }
                onChange={(e) => handleInput(item.question_id, e)}
              />
            ),
            function: (
              <span className=" text-purple-400 text-xl">function </span>
            ),
            return: <span className="text-purple-400 text-xl">return </span>,
            const: <span className="text-purple-500 text-xl">const </span>,
          };
          const swap_text = () => {
            const text_array = question_quiz.split(" ");
            const a = text_array.map((item) => {
              if (item in inputObj) item = inputObj[item];
              else item += " ";
              return item;
            });
            return a;
          };

          return (
            <div className="flex mb-[24px] w-[50%] " key={item.question_id}>
              <div className="flex flex-col gap-[20px] w-full  ">
                <div>
                  {ind + 1}. {item.question}
                </div>

                {item.type_question === "key" ? (
                  <pre>
                    <code>{swap_text()}</code>
                  </pre>
                ) : (
                  <div className="flex gap-[16px] w-[100%] ">
                    {item.choices?.map((choiz, indexchoice) => {
                      return (
                        <div
                          key={choiz.id}
                          className={`flex w-[25%] ${
                            activeChoice[item.question_id] === choiz
                              ? "bg-[#bbadad67] text-black "
                              : "bg-blue-900 text-white"
                          }
                            p-[24px]  break-all
                            justify-center rounded-[16px] box-border text-2 `}
                          onClick={() => {
                            handleChoiceSelect(item.question_id, choiz);
                          }}
                        >
                          {choiz}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <footer className="bttton-submit-container flex justify-center w-[50%] ">
          <button
            className="button-submit p-4 text-white bg-[#213555] m-10 rounded-xl"
            onClick={handleSubmit}
          >
            ส่งคำตอบ
          </button>
        </footer>
      </Index>
    </div>
  );
}
// console.log("swap_text -->", swap_text());
// console.log("question ", question_quiz);
// data.question
//           var parts = "I am a cow; cows say moo. MOOOOO.".split(/(\bmoo+\b)/gi);
// for (var i = 1; i < parts.length; i += 2) {
//   parts[i] = <span className="match" key={i}>{parts[i]}</span>;
// }
// return <div>{parts}</div>;
// const keyEditParts = item.keyEdit.split(/%i%|%i1%|%i2%/gi);

// const newKeyEdit = item.keyEdit
//   .toString()
//   .replace(/%i%|%i1%|%i2%/gi, (match) => {
//     return inputObj[match];
//   });

// const newKeyEdit = keyEditParts.map((part, index) => {
//   switch (index) {
//     case keyEditParts.length - 1:
//       return part;
//     case 0:
//     case 1:
//     case 2:
//       return (
//         <input
//           key={index}
//           type="text"
//           name={part}
//           value={inputValues[ind][part]}
//           onChange={(e) => handleInput(item.id, e)}
//         />
//       );
//     default:
//       return null;
//   }
// });

// import React, { useState } from 'react';

// function Quiz() {
//   const questions = [
//     { question: 'Question 1', id: 1, correctInput1: 'Correct 1', correctInput2: 'Correct 2' },
//     { question: 'Question 2', id: 2, correctInput1: 'Answer 1', correctInput2: 'Answer 2' },
//     // Add more questions as needed
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const currentQuestion = questions[currentQuestionIndex];

//   const [input1, setInput1] = useState('');
//   const [input2, setInput2] = useState('');
//   const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

//   const handleInput1Change = (e) => {
//     setInput1(e.target.value);
//   };

//   const handleInput2Change = (e) => {
//     setInput2(e.target.value);
//   };

//   const handleNextQuestion = () => {
//     if (isAnswerCorrect) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       setInput1('');
//       setInput2('');
//       setIsAnswerCorrect(false);
//     }
//   };

//   const checkAnswer = () => {
//     if (
//       input1 === currentQuestion.correctInput1 &&
//       input2 === currentQuestion.correctInput2
//     ) {
//       setIsAnswerCorrect(true);
//     } else {
//       setIsAnswerCorrect(false);
//     }
//   };

//   return (
//     <div>
//       <h2>{currentQuestion.question}</h2>
//       <input type="text" value={input1} onChange={handleInput1Change} />
//       <input type="text" value={input2} onChange={handleInput2Change} />
//       <button onClick={checkAnswer}>Check Answer</button>
//       {isAnswerCorrect && <p>Correct!</p>}
//       {!isAnswerCorrect && (
//         <p>Incorrect. Please try again or move to the next question.</p>
//       )}
//       <button onClick={handleNextQuestion}>Next Question</button>
//     </div>
//   );
// }

// import React, { useState } from 'react';

// function Quiz() {
//   const questions = [
//     { question: 'Question 1', id: 1, correctInput1: 'Correct 1', correctInput2: 'Correct 2' },
//     { question: 'Question 2', id: 2, correctInput1: 'Answer 1', correctInput2: 'Answer 2' },
//     // Add more questions as needed
//   ];

//   const [inputs, setInputs] = useState(
//     questions.map((question) => ({
//       id: question.id,
//       input1: '',
//       input2: '',
//       isAnswerCorrect: false,
//     }))
//   );

//   const handleInputChange = (e, questionId) => {
//     const { name, value } = e.target;
//     setInputs((prevInputs) =>
//       prevInputs.map((input) =>
//         input.id === questionId ? { ...input, [name]: value } : input
//       )
//     );
//   };

//   const checkAnswer = (questionId) => {
//     const question = questions.find((q) => q.id === questionId);
//     const input = inputs.find((input) => input.id === questionId);

//     if (
//       input.input1 === question.correctInput1 &&
//       input.input2 === question.correctInput2
//     ) {
//       setInputs((prevInputs) =>
//         prevInputs.map((input) =>
//           input.id === questionId ? { ...input, isAnswerCorrect: true } : input
//         )
//       );
//     } else {
//       setInputs((prevInputs) =>
//         prevInputs.map((input) =>
//           input.id === questionId ? { ...input, isAnswerCorrect: false } : input
//         )
//       );
//     }
//   };

//   return (
//     <div>
//       {questions.map((question) => {
//         const input = inputs.find((input) => input.id === question.id);

//         return (
//           <div key={question.id} className='flex flex-col gap-4'>
//             <h2>{question.question}</h2>
//             <input
//               className='bg-black text-white'
//               type="text"
//               name="input1"
//               value={input.input1}
//               onChange={(e) => handleInputChange(e, question.id)}
//             />
//             <input
//             className='bg-black text-white'
//               type="text"
//               name="input2"
//               value={input.input2}
//               onChange={(e) => handleInputChange(e, question.id)}
//             />
//             <button onClick={() => checkAnswer(question.id)}>Check Answer</button>
//             {input.isAnswerCorrect && <p>Correct!</p>}
//             {!input.isAnswerCorrect && (
//               <p>Incorrect. Please try again.</p>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Quiz;

// import React, { useState } from "react";

// const Quiz = () => {
//   // const [quizData, setQuizData] = useState(QuizSample);
//   const [answers, setAnswers] = useState([]);

//   const handleInputChange = (e, questionId) => {
//     const { name, value } = e.target;
//     setAnswers((prevAnswers) => {
//       const updatedAnswers = [...prevAnswers];
//       const answerIndex = updatedAnswers.findIndex(
//         (answer) => answer.questionId === questionId
//       );
//       if (answerIndex !== -1) {
//         updatedAnswers[answerIndex][name] = value;
//       } else {
//         updatedAnswers.push({ questionId, [name]: value });
//       }
//       return updatedAnswers;
//     });
//   };

//   const handleSelectChange = (e, questionId) => {
//     const { value } = e.target;
//     setAnswers((prevAnswers) => {
//       const updatedAnswers = [...prevAnswers];
//       const answerIndex = updatedAnswers.findIndex(
//         (answer) => answer.questionId === questionId
//       );
//       if (answerIndex !== -1) {
//         updatedAnswers[answerIndex].selectedChoice = value;
//       } else {
//         updatedAnswers.push({ questionId, selectedChoice: value });
//       }
//       return updatedAnswers;
//     });
//   };

//   const handleSubmit = () => {
//     console.log("Submitted answers:", answers);
//     // Add your logic for handling the submitted answers
//   };

//   const renderQuestion = (question) => {
//     switch (question.type_Quiz) {
//       case "key":
//         return (
//           <div key={question.id}>
//             <p>{question.title}</p>
//             <div className="flex flex-col">
//               {question.keyEdit
//                 .replace(/%i%/g, question.correctInput)
//                 .replace(/%i1%/g, question.correctInput1)
//                 .replace(/%i2%/g, question.correctInput2)}
//             </div>
//             <input
//               type="text"
//               name="input"
//               value={getAnswer(question.id, "input") || ""}
//               onChange={(e) => handleInputChange(e, question.id)}
//             />
//           </div>
//         );
//       case "select":
//         return (
//           <div key={question.id}>
//             <p>{question.title}</p>
//             <select
//               name="selectedChoice"
//               value={getAnswer(question.id, "selectedChoice") || ""}
//               onChange={(e) => handleSelectChange(e, question.id)}
//             >
//               <option value="">Select an option</option>
//               {question.QuizChoice.map((choice, index) => (
//                 <option key={index} value={index}>
//                   {choice}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const getAnswer = (questionId, key) => {
//     const answer = answers.find((answer) => answer.questionId === questionId);
//     return answer ? answer[key] : null;
//   };

//   return (
//     <div>
//       <h1>Quiz</h1>
//       {quizData.map((question) => renderQuestion(question))}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Quiz;

// import React, { useEffect, useState } from "react";
// import QuizSample from "./quiz";
// import Index from "../layout";

// export default function Componentquiz() {
//   const [quizData, setQuizData] = useState(QuizSample);
//   const [timeOut, setTimeOut] = useState(10 * 60);
//   const [score, setScore] = useState(null);
//   const [showResult, setShowResult] = useState(false);
//   const [inputValues, setInputValues] = useState(
//     quizData.map((item) => ({
//       id: item.id,
//       input_: "string_0",
//       input_1: "",
//       input_2: "",
//       correctAnswer: false,
//     }))
//   );

//   useEffect(() => {
//     const intervalTime = setInterval(() => {
//       setTimeOut((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalTime);
//     };
//   }, []);

//   const min = Math.floor(timeOut / 60);
//   const seconds = timeOut % 60;

//   const handleChoiceSelect = (questionId, choiceIndex) => {
//     setQuizData((prevQuestions) => {
//       return prevQuestions.map((question) => {
//         if (question.id === questionId) {
//           return {
//             ...question,
//             activeChoice: choiceIndex,
//           };
//         }
//         return question;
//       });
//     });
//   };

//   const handleSubmit = () => {
//     let newscore = 0;
//     quizData.forEach((prev) => {
//       if (
//         prev.activeChoice === prev.correctchoice &&
//         prev.type_Quiz === "select"
//       ) {
//         newscore++;
//       }
//     });
//     setScore(newscore);
//     setShowResult(!showResult);
//     console.log("log submit", inputValues[0]?.input_);
//   };

//   useEffect(() => {
//     console.log("check input --->", inputValues[0].input_);
//   }, [inputValues]);

//   return (
//     <div className="flex flex-col gap-[24px] items-center">
//       <Index min={min} seconds={seconds}>
//         {quizData.map((item, ind) => {
//           const newKeyEdit = item.keyEdit.replace(
//             /%i%|%i1%|%i2%/gi,
//             (match) => {
//               if (match === "%i%") {
//                 return (
//                   <input
//                     key={item.id}
//                     type="text"
//                     value={inputValues[ind].input_}
//                     name="input_"
//                     onChange={(e) => {
//                       const updateValues = [...inputValues];
//                       updateValues[ind].input_ = e.target.value;
//                       setInputValues(updateValues);
//                     }}
//                   />
//                 );
//               } else if (match === "%i1%") {
//                 return (
//                   <input
//                     key={item.id}
//                     type="text"
//                     value={inputValues[ind].input_1}
//                     name="input_1"
//                     onChange={(e) => {
//                       const updateValues = [...inputValues];
//                       updateValues[ind].input_1 = e.target.value;
//                       setInputValues(updateValues);
//                     }}
//                   />
//                 );
//               } else if (match === "%i2%") {
//                 return (
//                   <input
//                     key={item.id}
//                     type="text"
//                     value={inputValues[ind].input_2}
//                     name="input_2"
//                     onChange={(e) => {
//                       const updateValues = [...inputValues];
//                       updateValues[ind].input_2 = e.target.value;
//                       setInputValues(updateValues);
//                     }}
//                   />
//                 );
//               }
//               return match;
//             }
//           );

//           return (
//             <div key={item.id}>
//               <h3>{item.question}</h3>
//               {item.type_Quiz === "select" ? (
//                 item.QuizChoice.map((choice, index) => (
//                   <div key={index}>
//                     <label>
//                       <input
//                         type="radio"
//                         checked={item.activeChoice === index}
//                         onChange={() => handleChoiceSelect(item.id, index)}
//                       />
//                       {choice}
//                     </label>
//                   </div>
//                 ))
//               ) : (
//                 <div>{newKeyEdit}</div>
//               )}
//             </div>
//           );
//         })}
//       </Index>
//       <button onClick={handleSubmit}>Submit</button>
//       {showResult && (
//         <div>
//           <h2>Your Score: {score}</h2>
//         </div>
//       )}
//     </div>
//   );
// }
