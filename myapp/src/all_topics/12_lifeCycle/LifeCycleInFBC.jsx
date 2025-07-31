import React, { useEffect, useRef, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initializeRender = useRef(true); //{current :true}

  useEffect(() => {
    console.log("component Mounted");
    let intervalID = setInterval(() => {
      console.log("API CALL");
    }, 2000);

    return () => {
      console.log("component Ubmounetd");
      clearInterval(intervalID)
    };
  }, []);

  useEffect(() => {
    if (initializeRender.current) {
      initializeRender.current = false;
      return;
    }
    console.log("component Updated");
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC</h1>
      <h2>Counter ={count}</h2>
      <button onClick={() => setCount(count + 1)}>UPDATE</button>
    </div>
  );
};

export default LifeCycleInFBC;
