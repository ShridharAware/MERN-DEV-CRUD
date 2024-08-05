import { useEffect, useMemo, useState } from "react";
const Homepage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect");
  }, [count]);

  useMemo(() => {
    console.log("Square of 2 is ", 2 * 2);
  }, [count]);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        Decrease
      </button>
      {count}
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default Homepage;

// 1. useState -> useState(initialValue) -> state variable, function
// const [count, setCount] = useState(0);

// 2. useEffect ->
// 1.useEffect(()=>{}) , 2. useEffect(()=>{}, []), 3. useEffect(()=>{}, [val1, val2, ....])

// 3. useMemo ->
// Memoization ->
// const calculate = useMemo(()=>{}, [])
