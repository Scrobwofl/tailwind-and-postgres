"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function clickHandler() {
    setCount((prev) => prev + 1);
  }

  return (
    <div onClick={clickHandler} className="text-center">
      <h3>{count}</h3>
    </div>
  );
};

export default Counter;
