import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [addCount, setAddCount] = useState(0);
  const [subCount, setsubCount] = useState(50);

  const incre = () => {
    setAddCount(addCount + 1);
  };

  const isEven = useMemo(() => {
    console.log("kaysgkcjbeiu");
    return addCount % 2 == 0;
  }, [addCount]);

  // function isEven(){
  //   console.log("kaysgkcjbeiu");
  //   let num = 1
  //   while(num < 20000000000000) return num;
  // }

  // const memoizedSumFunc = useMemo(() => {
  //     console.log("Sum function called!");
  //     return addCount*10;
  // }, [addCount]);

  const decre = () => {
    setsubCount(subCount - 1);
  };

  return (
    <>
      {isEven}
      <p>{addCount}</p>
      <button onClick={incre}>Increment</button>
      <p>{subCount}</p>
      <button onClick={decre}>Decrement</button>
    </>
  );
}

export default App;
