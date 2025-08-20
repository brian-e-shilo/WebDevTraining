import { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import Header from "./Header";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
import Footer from "./Footer";

// Reducer for count
type CountAction = "increment" | "decrement" | "reset";
function countReducer(state: number, action: CountAction) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function App() {
  // useState
  const [title, setTitle] = useState("Brian's Kitchen");

  // useReducer
  const [count, dispatch] = useReducer(countReducer, 0);

  // useEffect (side-effect: update tab title when count changes)
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useMemo (expensive calc demo)
  const doubleCount = useMemo(() => {
    // imagine an expensive computation here
    return count * 2;
  }, [count]);

  // useCallback (memoized function reference)
  const resetTwice = useCallback(() => {
    // call reducer twice
    dispatch("decrement");
    dispatch("decrement");
  }, [dispatch]);

  return (
    <>
      <Header title={title} />
      <Counter
        count={count}
        onIncrement={() => dispatch("increment")}
        onDecrement={() => dispatch("decrement")}
        onReset={() => dispatch("reset")}
      />
      <p><strong>Double (useMemo):</strong> {doubleCount}</p>
      <button onClick={resetTwice}>Decrement Twice (useCallback)</button>      

      <ColorPicker onChangeTitle={setTitle} />

      <Footer year={new Date().getFullYear()} />
    </>
  );
}
