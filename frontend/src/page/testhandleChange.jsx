import React, { useEffect, useState } from "react";

function TesthandleChange() {
  const [input, setInput] = useState();

  useEffect(() => {
    console.log(input, "check value");
  }, [input]);

  return (
    <div>
      Input
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default TesthandleChange;
