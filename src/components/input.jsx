import React from "react";

function Input({ value, name, setInput, input, id }) {
  //   function handleInput(e, questionId) {
  //     console.log(e);
  //     const { name, value } = e.target;
  //     setInput((prev) =>
  //       prev.map(
  //         (previnput) =>
  //           previnput.id === questionId && { ...input, [name]: value }
  //       )
  //     );
  //   }

  return (
    <div>
      <source />
    </div>
  );
}

export default Input;

/* "%i1%": `<input type='text' name='input' value='${
              input[ind]?.input
            }' onChange='${(e) =>
              setInput((prev) => [{ ...prev, input: e.target.value }])}' />`,
            "%i2%": ` <input type="text" name="input2" value={input.input2} onchange={(e) => handleInput(e, item.id)}/> `, */
// "%i2%": `<input type='text' placholder='inputvalues' name="input2" value={input.input2} onChange=((e) => hanldeInput(e,quizData.id)  ) />`,



// 
  // useEffect(() => {
  //   if (min === 5 && seconds === 0) {
  //     alert("เหลือเวลาทำข้อสอบ 5 นาที");
  //   }
  //   if (min < 0) {
  //     alert("หมดเวลาแล้วเว้ย!!");
  //     // redirect
  //   }
  // });



  // const handleInput = (e, questionId) => {
  //   alert("www");
  //   console.log("check event--->", e);
  //   const { name, value } = e.target;
  //   setInputValues((prev) =>
  //     prev.map((previnput) =>
  //       previnput.id === questionId
  //         ? { ...previnput, [name]: value }
  //         : previnput
  //     )
  //   );
  // };